// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

import "./assets/ERC20.sol";
import "./assets/ERC721.sol";
import "./assets/ERC1155.sol";

contract NFTMarket is AccessControl, Pausable, ERC1155Holder, IERC721Receiver {
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;    
    //Counter for items id 
    Counters.Counter private _itemIds;
    //Counter for amount of sold items
    Counters.Counter private _itemsSold;
    //Counter for auctions
    Counters.Counter private _auctionIds; 
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    /*Time for auction*/
    uint256 public auctionTime = 3 * 24 * 3600; 

    /*Address of ERC721 token contract*/ 
    address public erc721Contract;

    /*Address of ERC1155 token contract*/ 
    address public erc1155Contract;

    /*address of ERC20 token contract */
    address public token;

    constructor(address _voteToken) {
        token = _voteToken;
        erc721Contract = address(new ACDM721());
        erc1155Contract = address(new ACDM1155());

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    struct MarketItem {
        uint256 itemId;
        uint256 amountItems;
        uint256 price;
        address erc721Contract;
        address owner;
        bool sale;
    }

    struct Auction{
        address owner;
        address lastBidder;
        bool open;
        uint256 price;
        uint256 amountOfBids;
        uint256 minBidStep;
        uint256 finishTime;
        uint256 idItem;
        uint256 amount;
    }
    
    mapping(uint256 => Auction) private auctions; //auctionID => Auction
    mapping(uint256 => MarketItem) private idToMarketItem;//itemId => MarketItem
    
    //Emitted when auction time changed
    event AuctionTimeChanged(uint256 _newAuctionTime);
    
    //Emitted when auction finished, if result == true auction succesfully finished
    //if result == false auction canceled
    event AuctionFinished(address indexed bidderWiner, uint256 auctionId, bool result);

    //Emitted when maked a bid
    event BidMaked(address indexed bidder, uint256 newPrice, uint256 indexed auctioId, uint256 amountOfBids);

    //Emitted when created auction for item
    event AuctionStarted(
        address indexed owner,
        uint256 startPrice,
        uint256 minBidStep,
        uint256 finishTime,
        uint256 idAuction,
        uint256 idItem,
        uint256 amount
    );

    //Emitted when created token for item
    event ItemCreated(
        address indexed owner,
        uint256 tokenId,
        uint256 amountItems
    );
    
    //Emitted when item listed
    event MarketItemCreated (
        address indexed erc721Contract,
        address indexed owner,
        uint256 indexed itemId,
        uint256 price,
        bool sale
    );
    
    //Emitted when item bought by new user
    event ItemBought(address _newOwner, uint256 _itemId, uint256 _price);
    
    //Emitted when listed item cancelled without buying
    event MarketItemCanceled(uint256 _itemId);
    
    modifier auctionExist(uint256 _auctionId){
        uint256 auctionIds = _auctionIds.current();
        require(
            _auctionId <= auctionIds &&
            auctions[_auctionId].open == true, 
        "Auction not exist"
        );
        _;
    }

    modifier auctionTimeOverAndItemOwner(uint256 _auctionId){
        require(
            auctions[_auctionId].finishTime <= block.timestamp &&
            auctions[_auctionId].owner == msg.sender,
            "Can not finish auction");
        _;
    }

    modifier itemSale(uint256 _itemId){
        require(idToMarketItem[_itemId].sale == true, "Item not sale");
        _;
    }

    modifier itemNotSale(uint256 _itemId){
        require(idToMarketItem[_itemId].sale == false, "Item sale");
        _;
    }

    modifier itemOwner(uint256 _itemId){
        require(idToMarketItem[_itemId].owner == msg.sender,"Not token owner");
        _;
    }

    /** @notice Change time of auction.
     * @dev Change period of time for auction, emit AuctionTimeChanged event.
     * @param _newAuctionTime new time period for auction
    */
    function changeAuctionTime(uint256 _newAuctionTime) external onlyRole(DEFAULT_ADMIN_ROLE){
        require(
            _newAuctionTime >= (24 * 3600) &&
            _newAuctionTime <= (5 * 24 * 3600),
        "Time must be between 1st and 5th days");
        auctionTime = _newAuctionTime;
        emit AuctionTimeChanged(auctionTime);
    }
    
    /** @notice Create token on ERC721 contract and on this.
     * @dev Create idToMarketItem, emit ItemCreated event.
     * @param _to Address of receiver of nft.
     * @param tokenURI URI of mintable token.
    */
    function createItem(
        address _to,
        string memory tokenURI
    ) external 
    onlyRole(MINTER_ROLE)
    whenNotPaused{
        _itemIds.increment();
        uint256 itemId = _itemIds.current();
        
        ACDM721(erc721Contract).createToken(_to, tokenURI);

        idToMarketItem[itemId] = MarketItem(
            itemId,
            1,
            0,
            erc721Contract,
            _to,
            false
        );

        emit ItemCreated(
            _to,
            itemId,
            1 
        );
    }

    function createItemBatch(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory data
    ) external 
    onlyRole(MINTER_ROLE)
    whenNotPaused{
        ACDM1155(erc1155Contract).mintBatch(_to, _ids, _amounts, data);
    
            for(uint256 i = 0; i < _ids.length; i++){
                _itemIds.increment();
                idToMarketItem[_itemIds.current()] = MarketItem(
                _ids[i],
                _amounts[i],
                0,
                erc1155Contract,
                _to,
                false
                );

            emit ItemCreated(
            _to,
            _itemIds.current(),
            _amounts[i]
            );
        }   
    }

    /** @notice List amount of ERC1155 tokens on marketplace.
     * @dev emit MarketItemCreated event.
     * @param _itemId Id of listed item.
     * @param _price Price in EIP20 tokens for item.
     * @param _amount Amount of ERC1155 tokens for list.
    */
    function listItem(
        uint256 _itemId, 
        uint256 _price,
        uint256 _amount
    ) external 
    whenNotPaused
    itemOwner(_itemId)
    itemNotSale(_itemId)
    returns(bool)
    {
        require(_price > 0,"Price must be bigger then zero");
        require(_amount <= idToMarketItem[_itemId].amountItems,"Isufficent items");

        _listItem(_itemId, _amount);
        idToMarketItem[_itemId].price = _price;

        emit MarketItemCreated(
            erc721Contract, 
            msg.sender,  
            _itemId,
            _price,
            true
        ); 
        return true;
    }
    
    /** @notice List item on marketplace.
     * @dev Update itemsId, emit MarketItemCreated event.
     * @param _itemId Id of listed item.
     * @param _price Price in EIP20 tokens for item.
    */
    function listItem(
        uint256 _itemId, 
        uint256 _price
    ) external 
    whenNotPaused
    itemOwner(_itemId)
    itemNotSale(_itemId)
    returns(bool)
    {
        require(_price > 0,"Price must be bigger then zero");

        _listItem(_itemId);
        idToMarketItem[_itemId].price = _price;

        emit MarketItemCreated(
            erc721Contract, 
            msg.sender,  
            _itemId,
            _price,
            true
        ); 
        return true;
    }

    /** @notice Buy item for price in ACDM tokens.
     * @dev Market item have price more then zero, emit ItemBought event.
     * @param _itemId Id of listed item.
    */
    function buyItem(uint256 _itemId) external whenNotPaused
    itemSale(_itemId){
        require(
            idToMarketItem[_itemId].price <= IERC20(token).balanceOf(msg.sender) &&
            idToMarketItem[_itemId].price > 0, "Insufficent funds");
        require(idToMarketItem[_itemId].owner != msg.sender, "Can not buy by himself");
       
        IERC20(token).safeTransferFrom(msg.sender, idToMarketItem[_itemId].owner, idToMarketItem[_itemId].price);
        
        cancelItem_(_itemId, msg.sender);
        
        idToMarketItem[_itemId].owner = msg.sender;
        
        emit ItemBought(
            msg.sender,  
            _itemId,
            idToMarketItem[_itemId].price
        );
        idToMarketItem[_itemId].price = 0;
    }

    /** @notice Cancel item sale for price in ACDM tokens.
     * @dev Non market items have zero price, emit MarketItemCanceled event.
     * @param _itemId Id of listed item.
    */
    function cancel(uint256 _itemId) external whenNotPaused
    itemSale(_itemId)
    itemOwner(_itemId){
        require(idToMarketItem[_itemId].price > 0, "Item not sale");
       
        cancelItem_( _itemId,  msg.sender);
        idToMarketItem[_itemId].price = 0;

        emit MarketItemCanceled( _itemId);
    }
 


    /** @notice List iem on aution by item owner.
     * @dev Create auction, emit AuctionStarted event.
     * @param _idItem Id of ERC721 token that owner want to list on auction.
     * @param _minBidStep The amount of minimum bid step in auction in ERC20 token.
     * @param _startPrice The amount of price in ERC20 token, with which auction will start.
    */
    function listItemOnAuction(
            uint256 _idItem, 
            uint256 _minBidStep, 
            uint256 _startPrice
        ) external
        itemOwner(_idItem)
        itemNotSale(_idItem){

        _listItem(_idItem);
        _createAuction(_startPrice, 1, _minBidStep,_idItem);
    }

    /** @notice List item on aution by item owner.
     * @dev Create auction, emit AuctionStarted event.
     * @param _idItem Id of ERC721 token that owner want to list on auction.
     * @param _minBidStep The amount of minimum bid step in auction in ERC20 token.
     * @param _startPrice The amount of price in ERC20 token, with which auction will start.
    */
    function listItemOnAuction(
            uint256 _idItem,
            uint256 _amount, 
            uint256 _minBidStep, 
            uint256 _startPrice
        ) external
        itemOwner(_idItem)
        itemNotSale(_idItem){
            require(_amount <= idToMarketItem[_idItem].amountItems,"Insufficent items");
            
            _listItem(_idItem, _amount);
            _createAuction(_startPrice, _amount, _minBidStep,_idItem);
    }

    /** @notice Make bid in choisen auction by user.
     * @dev Make bid in choisen aucton, emit BidMaked event.
     * @param _auctionId Id of aution that user wants to bid.
     * @param _newPrice The amount of minimum bid step + last bidder price in ERC20 token.
    */
    function makeBid(
        uint256 _auctionId, 
        uint256 _newPrice
        ) external 
        auctionExist(_auctionId)
        {
        require(
            auctions[_auctionId].owner != msg.sender &&
            auctions[_auctionId].finishTime > block.timestamp, 
            "Can not make bid");
        require(
            (auctions[_auctionId].price + auctions[_auctionId].minBidStep) <= _newPrice && 
            (_newPrice) <= IERC20(token).balanceOf(msg.sender), 
            "Insufficent funds"
        );
        
        IERC20(token).safeTransferFrom(msg.sender, address(this), _newPrice);

        transferToLastBidder(auctions[_auctionId].lastBidder,auctions[_auctionId].price);
        
        auctions[_auctionId].amountOfBids ++;
        auctions[_auctionId].lastBidder = msg.sender;
        auctions[_auctionId].price = _newPrice;
        
        emit BidMaked(msg.sender, _newPrice, _auctionId, auctions[_auctionId].amountOfBids);
    }

    /** @notice Finish auction with send ERC20 token to owner of item and send ERC721 token to lastBidder.
     * @dev Finish successful auction, emit AuctionFinished event.
     * @param _auctionId Id of auction that owner want to finish.
    */
    function finishAuction(
        uint256 _auctionId
    ) external 
    auctionExist(_auctionId)
    auctionTimeOverAndItemOwner(_auctionId){
        require(auctions[_auctionId].amountOfBids > 2, "Insufficent bids");
        
        IERC20(token).safeTransfer(auctions[_auctionId].owner, auctions[_auctionId].price);
        
        idToMarketItem[auctions[_auctionId].idItem].owner = auctions[_auctionId].lastBidder;
        
        _closeAuction(_auctionId, auctions[_auctionId].lastBidder);

        emit AuctionFinished(auctions[_auctionId].lastBidder, _auctionId, true);
    }   

    /** @notice Cancel auction with send ERC20 token to lastBidder and send ERC721 to owner of token.
     * @dev Cancel not successful auction, emit AuctionFinished event.
     * @param _auctionId Id of auction that owner want to cancel.
    */
    function cancelAuction(
        uint256 _auctionId
    ) external
    auctionExist(_auctionId)
    auctionTimeOverAndItemOwner(_auctionId){
        require(auctions[_auctionId].amountOfBids <= 2, "Too many bids");
        
        transferToLastBidder(auctions[_auctionId].lastBidder,auctions[_auctionId].price);
        _closeAuction(_auctionId, auctions[_auctionId].owner);

        emit AuctionFinished(auctions[_auctionId].owner, _auctionId, false);
    }

    /** @notice Create new auction.
     * @dev Create auction, emit AuctionStarted event.
     * @param _itemId Id of ERC721 token that owner want to list on auction.
     * @param _minBidStep The amount of minimum bid step in auction in ERC20 token.
     * @param _startPrice The amount of price in ERC20 token, with which auction will start.
     * @param _amount The amount of ERC1155 tokens.
    */
    function _createAuction(
        uint256 _startPrice, 
        uint256 _amount, 
        uint256 _minBidStep, 
        uint256 _itemId
        ) private
    {
        _auctionIds.increment();
        uint256 auctionIds = _auctionIds.current();
        
        auctions[auctionIds] = Auction(
            msg.sender,
            address(0),
            true,
            _startPrice,
            0,
            _minBidStep,
            (block.timestamp + auctionTime),
            _itemId,
            _amount
        );
         emit AuctionStarted(
            msg.sender,
            _startPrice,
            _minBidStep,
            (block.timestamp + auctionTime),
            auctionIds,
            _itemId,
            _amount
        );
    }

    /** @notice Transfer ERC20 tokens to lastBidder if he exist.
     * @dev Use for return ERC20 to last bidder.
     * @param _to Address of lasst bidder.
     * @param _price Amount of ERC20 tokens deposited by last bidder.
    */
    function transferToLastBidder(address _to, uint256 _price) private{
        if(_to != address(0)){
            IERC20(token).safeTransfer(_to, _price);
        }
    }

    /** @notice Cancel auction.
     * @dev Use for cancel auction and transfer item.
     * @param _auctionId Id of cloasble auction.
     * @param _to Address of item receiver.
    */
    function _closeAuction(uint256 _auctionId, address _to) private{
        auctions[_auctionId].open = false;
        cancelItem_(auctions[_auctionId].idItem, _to);
    }

    /** @notice Cancel item.
     * @dev Use for cancel item sale and transfer item to new owner.
     * @param _itemId Id of cancelable item.
     * @param _to Address of item receiver.
    */
    function cancelItem_(uint256 _itemId, address _to) private{
        idToMarketItem[_itemId].sale = false;
        if(idToMarketItem[_itemId].erc721Contract == erc721Contract){
            IERC721(erc721Contract).transferFrom(address(this), _to, idToMarketItem[_itemId].itemId);
        }else if(idToMarketItem[_itemId].erc721Contract == erc1155Contract){
            IERC1155(erc1155Contract).safeTransferFrom(address(this), _to, idToMarketItem[_itemId].itemId, idToMarketItem[_itemId].amountItems,"");
        }
    }

    /** @notice List item and start sale.
     * @dev Use for start item sale and transfer item from item owner to contract address.
     * @param _itemId Id of listing item.
    */
    function _listItem(uint256 _itemId) private{
        IERC721(erc721Contract).transferFrom(msg.sender, address(this), _itemId);
        idToMarketItem[_itemId].sale = true;
    }

    /** @notice List item and start sale.
     * @dev Use for start item sale and transfer item from item owner to contract address.
     * @param _itemId Id of listing item.
    */
    function _listItem(uint256 _itemId, uint256 _amount) private{
        if(idToMarketItem[_itemId].amountItems > _amount){
            _itemIds.increment();
            uint256 itemId = _itemIds.current();
            idToMarketItem[itemId] = MarketItem(
                idToMarketItem[_itemId].itemId,
                idToMarketItem[_itemId].amountItems - _amount,
                0,
                erc1155Contract,
                msg.sender,
                false
            );
            idToMarketItem[_itemId].amountItems = _amount;
        }
        IERC1155(erc1155Contract).safeTransferFrom(msg.sender, address(this), idToMarketItem[_itemId].itemId, _amount,"");
        idToMarketItem[_itemId].sale = true;
    }

    /** @notice Getter for auctions array.
    */
    function getAuction(uint256 _auctionId) external view returns(Auction memory){
        return auctions[_auctionId];
    }

    /** @notice Getter for choisen item.
    */
    function getItem(uint256 _itemId) public view returns(MarketItem memory){
        return idToMarketItem[_itemId];
    }

        /** @notice Unpausing functions of contract.
    * @dev Available only to admin
    * Allows calls to functions with `whenNotPaused` modifier.
    */
    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /** @notice Pausing some functions of contract.
    * @dev Available only to owner.
    * Prevents calls to functions with `whenNotPaused` modifier.
    */
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }
    
    /** @notice Fetch array of auctions.
    */
    function fetchAuctionItems() public view returns(MarketItem[] memory){
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < itemCount; i++){
            if(idToMarketItem[i + 1].price == 0 && idToMarketItem[i + 1].sale == true) {
                unsoldItemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++){
            if(idToMarketItem[i + 1].price == 0 && idToMarketItem[i + 1].sale == true){
                uint256 currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        } 
        return items;
    }

    /** @notice Fetch array of market items.
    */
    function fetchMarketItems() public view returns(MarketItem[] memory){
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < itemCount; i++){
            if(idToMarketItem[i + 1].price > 0) {
                unsoldItemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++){
            if(idToMarketItem[i + 1].price > 0){
                uint256 currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        } 
        return items;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155Receiver, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /** Always returns `IERC721Receiver.onERC721Received.selector`. */
    function onERC721Received(address, address, uint256, bytes memory) public virtual override returns (bytes4) {
    return this.onERC721Received.selector;
  }

    /** Sweep _amount of ERC20 tokens from marketplace address to _to address */
  function sweepERC20(address _to, uint256 _amount)external onlyRole(DEFAULT_ADMIN_ROLE){
      IERC20(token).safeTransferFrom(address(this), _to, _amount);
  }
    /** Sweep ERC721 token from marketplace address to _to address */
  function sweepERC721(address _to, uint256 _itemId)external onlyRole(DEFAULT_ADMIN_ROLE){
      IERC721(erc721Contract).transferFrom(address(this), _to, _itemId);
  }
    /** Sweep ERC1155 token from marketplace address to _to address */
  function sweepERC1155(address _to, uint256 _itemId, uint256 _amount)external onlyRole(DEFAULT_ADMIN_ROLE){
      IERC1155(erc1155Contract).safeTransferFrom(address(this), _to, _itemId, _amount,"");
  }
}


