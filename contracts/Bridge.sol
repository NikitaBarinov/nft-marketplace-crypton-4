// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Bridge is ERC721Holder {
    event SwapInitialized(address sender, uint256 tokenId, uint256 chainFrom, uint256 chainTo, uint256 nonce);
    event SwapRedeemed(address sender, uint256 tokenId, uint256 chainFrom, uint256 chainTo, uint256 nonce);

    address public erc721_CONTRACT;
    address public validator;

    mapping(bytes32 => bool) public locked;
    mapping(bytes32 => bool) public redeemed;

    constructor(address _validator, address _erc721_contract) {
        require(_validator != address(0), 'Invalid validator address');
        require(_erc721_contract != address(0), 'Invalid NFT contract address');

        validator = _validator;
        erc721_CONTRACT = _erc721_contract;
    }

    function swap(uint256 tokenId, uint256 chainTo, uint256 nonce) public {
        bytes32 hash = keccak256(abi.encodePacked(
            msg.sender, tokenId, block.chainid, chainTo, nonce
        ));

        require(!locked[hash], 'Duplicate hash');
        locked[hash] = true;
        
        IERC721(erc721_CONTRACT).transferFrom(msg.sender, address(this), tokenId);
        
        emit SwapInitialized(msg.sender, tokenId, block.chainid, chainTo, nonce);
    }

    function redeem(uint256 tokenId, uint256 chainFrom, uint256 nonce, uint8 v, bytes32 r, bytes32 s) public {
        bytes32 hash = keccak256(abi.encodePacked(
            msg.sender, tokenId, chainFrom, block.chainid, nonce
        ));

        address signer = ECDSA.recover(ECDSA.toEthSignedMessageHash(hash), v, r, s);
        require(signer == validator, 'Invalid validator signature');

        require(!redeemed[hash], 'Already redeemed');
        redeemed[hash] = true;
        

        IERC721(erc721_CONTRACT).safeTransferFrom(address(this), msg.sender, tokenId);

        emit SwapRedeemed(msg.sender, tokenId, chainFrom, block.chainid, nonce);
    }
}