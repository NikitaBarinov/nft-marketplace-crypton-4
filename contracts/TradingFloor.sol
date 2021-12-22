// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./ACDM/ACDM.sol";

/**@title pyramid contract */

contract TradingFloor{
    uint256 constant roundTime = 3 * 24 * 3600;
    ACDM private token;
    uint256 public numOfRound = 0;
    uint256 private price;
    uint256 public totalSupplyACDM;
   
    struct refer{
        address firstRefer;
        address secondRefer;
    }

    mapping(address => uint256)  balancesETH;
    mapping(address => uint256)  balancesACDM;
    mapping(address => refer) refers;
    
    constructor(address _voteToken){
        token = ACDM(_voteToken);
        price = 0.00001 ether;
    }



    modifier userRegistered(address _user){
        require(refers[_user].firstRefer != address(0) || _user == address(0), "User not registered");
        _;
    }

    modifier userNotRegistered(address _user){
        require(refers[_user].firstRefer == address(0), "User is already registered");
        _;
    }

    
    /** @notice Register user in contract.
        * @param _firstRefer Address of first refer.
        * @param _secondRefer Address of second refer.
    */
    function registration(
        address _firstRefer,
        address _secondRefer
    ) external
    payable 
    userNotRegistered(msg.sender)
    userRegistered(_firstRefer)
    userRegistered(_secondRefer)
    returns(bool _success){
        balancesETH[msg.sender] = msg.value;
        balancesACDM[msg.sender] = 0;
        
        refer memory newRefer;
        
        newRefer.firstRefer = choiceRefers(_firstRefer);
        newRefer.secondRefer = choiceRefers(_secondRefer);
        
        refers[msg.sender] = newRefer;
        emit UserIsRegistrated(msg.sender, refers[msg.sender].firstRefer, refers[msg.sender].secondRefer);
    return true;
    }
    
    /** @notice If refer address(0) return address of contract if not return refer.
      * @param _refer Address of refer.
      * @return address of new refer or contract address.
    */
    function choiceRefers(address _refer)private view returns(address){
        if(_refer != address(0)){
            return _refer;
        } else if(_refer == address(0)){
            return address(this);
        } 
    }

    /** @notice Buy ACDM tokens for ETH.
        * @param _amountACDM Amount of tokens which the user wants to buy .
    */
    // commis
    function buyACDMInSale(uint256 _amountACDM) public payable{
        uint256 priceForAmountACDM = priceForACDM(_amountACDM);
        
        require(balancesETH[msg.sender] > priceForAmountACDM, "Insufficent funds");
        
        balancesETH[msg.sender] = balancesETH[msg.sender] - priceForAmountACDM;
        balancesETH[address(this)] +=  priceForAmountACDM;
        balancesACDM[msg.sender] += _amountACDM;
        
        token.transferFrom(address(this), msg.sender, _amountACDM);
    }

    /** @notice Calculate the total amount of ETH for ACDM.
        * @param _amountACDM Amount of tokens which the user wants to buy .
    */
    function priceForACDM(uint256 _amountACDM) private returns(uint256){
        uint256 priceETH = (_amountACDM * (price * 10e6)) / 10e6;
        return priceETH;
    } 
    

    /** @notice Calculate the total amount of ETH for ACDM.
        * @param _totalPrice Amount of tokens which the user wants to buy .
    */
    function fee(uint256 _totalPrice, address _user)private{
        uint256 transactionFee = (_totalPrice * 1) / 100; 
      
            
    }



    /** @notice Calculate and set new price for next round.
        * @param _numOfRound Number of next round.
    */
    // function changePrice(uint256 _numOfRound) private{
    //     price = ((price * 103) / 100) + 0.000004;
    //     emit PriceChanged(price);
    // }

    /// @notice Getter for price variable
    /// @return price type uint256
    function getPrice() external view returns(uint256){
        return price;
    }

    /// @notice Return block.timestamp
    /// @return block.timestamp type uint256
    function getBlockTimeStamp() external view returns(uint256){
        return block.timestamp;
    }

    /// @notice Return balance of address in ETH
    /// @return balance type uint256
    function balanceOfETH(address _userAddress) external view returns(uint256 balance){
      return balancesETH[_userAddress];
    }
    
    /// @notice Return balance of address in ACDM
    /// @return balance type uint256
    function balanceOfACDM(address _userAddress) external view returns(uint256 balance){
      return balancesACDM[_userAddress];
    }

    /// @notice Getter for refers of address
    /// @return refers type
    function getRefer(address _user) external view returns(refer memory){
        return refers[_user];
    }

    /// @notice Getter for contract address
    /// @return address(this) type address
    function getTradingFloorAddress()external view returns(address){
        return address(this);
    }
    event UserIsRegistrated(address _user, address _firstRefer, address _secondRefer);

    event PriceChanged(uint256 _newPrice);
}


// contract DAO{
//     Token private token;
//     uint256 private proposalId = 0;
//     address public chairPerson;
//     address public voteToken;
//     uint256 public minimumQuorum;
//     uint256 public debatingPeriod;
//     enum checkVote{
//         notVote,
//         voted,
//         delegated
//     }

//     struct proposal{
//         address recipient;
//         bytes transactionByteCode;
//         string description;
//         uint256 endTime;
//         uint256 totalVotes;
//         uint256 totalVotesFor;
//         bool open;
//     } 

//     mapping(address => uint256)  balances;
//     mapping(uint256 => proposal) public proposals;
//     mapping(address => uint256) public unlockBalance;
//     mapping(address => mapping(uint256 => address[])) public delegates;
//     mapping(uint256 => mapping(address => checkVote)) public checkVoting;
    

//     /** @notice Create Dao.
//       * @param _chairPerson The perrson who will administrate dao.
//       * @param _voteToken address of voting token.
//       * @param _minimumQuorum minimum quantiti of tokens for successful proposal.
//       * @param _debatingPeriod Period for voting.
//     */
//     constructor(
//         address _chairPerson,
//         address _voteToken,
//         uint256 _minimumQuorum,
//         uint256 _debatingPeriod
//     ){
//         chairPerson = _chairPerson;
//         voteToken = _voteToken;
//         minimumQuorum = _minimumQuorum;
//         debatingPeriod = _debatingPeriod;
//         token = Token(_voteToken);
//     }

//     modifier onliChairPerson {
//         require(msg.sender == chairPerson,"You are not chair person");
//         _;
//     }

//     modifier proposalNotClosed(uint256 _proposalId) {
//         require(proposals[_proposalId].open == true, "Proposal already closed");
//         _;
//     }

//     modifier proposalExist(uint256 _proposalId){
//         require(proposalId > _proposalId,"Proposal does not exist");
//         _;
//     }

//     modifier onlyTokenHolder(address _sender){
//         require(balances[_sender] > 0,"Insufficens funds");
//         _;
//     }

//     /** @notice Deposit token from token address.
//       * @param _amount Amount of deposit tokens.
//     */
//     function deposit(uint256 _amount) public payable{
//         token.transferFrom(msg.sender, address(this), _amount);
//         balances[msg.sender] += _amount;
//         emit Deposit(msg.sender, _amount);
//     }

//     function delegate(uint256 _proposalId, address _delegat) 
//     external
//     proposalExist(_proposalId)
//     proposalNotClosed(_proposalId)
//     onlyTokenHolder(msg.sender)
//     {
//         delegates[_delegat][_proposalId].push(msg.sender);
//         checkVoting[_proposalId][msg.sender] = checkVote.delegated;
//         emit Delegate(msg.sender, _delegat, _proposalId); 
//     }

//     /** @notice Withdraw token to token address.
//       * @param _amount Amount of withdrawing tokens.
//     */
//     function withdraw(uint256 _amount) external {
//         require(unlockBalance[msg.sender] <= block.timestamp,"Balance still lock");
//         balances[msg.sender] -= _amount;
//         token.transfer(msg.sender, _amount);

//         emit Withdraw(msg.sender, _amount);
//     }

//     /** @notice Add proposal and start voting.
//       * @param _recipient Address of token there send transactionbytecode.
//       * @param _description Description of proposal.
//       * @param _transactionByteCode Bytecode of sending transaction.
//     */
//     function addProposal(
//         address _recipient,
//         string memory _description,
//         bytes memory _transactionByteCode
//     ) external 
//     onlyTokenHolder(msg.sender)
//     {
//         proposal memory _proposal;
//         _proposal.recipient = _recipient;
//         _proposal.transactionByteCode = _transactionByteCode;
//         _proposal.description = _description;
//         _proposal.totalVotes = 0;
//         _proposal.totalVotesFor = 0;
//         _proposal.endTime = block.timestamp + debatingPeriod;
//         _proposal.open = true;

//         proposals[proposalId] = _proposal;
//         proposalId++;
        
//         emit ProposalCreated(_recipient, _transactionByteCode, _description, _proposal.endTime);
//     }

//     /** @notice Change voting rules.
//       * @param _minimumQuorum Minimum quantiti of tokens for successful proposal.
//       * @param _debatingPeriodDuration Period of time for voting.
//     */  
//     function changeVotingRules(
//         uint256 _minimumQuorum,
//         uint256 _debatingPeriodDuration
//     ) external 
//     onliChairPerson
//     {
//         minimumQuorum = _minimumQuorum;
//         debatingPeriod = _debatingPeriodDuration;

//         emit VotingRulesChanged(minimumQuorum, debatingPeriod);
//     }

//     /** @notice Takes vote from address and lock balance of address.
//       * @param _proposalId Id of the calling proposal.
//       * @param supportAgainst Vote for or against.
//     */  
//     function vote(
//         uint256 _proposalId,
//         bool supportAgainst
//     ) external 
//     proposalExist(_proposalId)
//     proposalNotClosed(_proposalId)
//     onlyTokenHolder(msg.sender)
//     {
//         require(checkVoting[_proposalId][msg.sender] == checkVote.notVote, "You are already voted");
    
//         if(supportAgainst == true){
//             proposals[_proposalId].totalVotesFor += sumOfBalances(msg.sender, _proposalId);
//         }

//         checkVoting[_proposalId][msg.sender] = checkVote.voted;
//         proposals[_proposalId].totalVotes += sumOfBalances(msg.sender, _proposalId);
//         unlockBalance[msg.sender] = block.timestamp + debatingPeriod;

//         emit VoteCreated(msg.sender, _proposalId, balances[msg.sender], supportAgainst);
//     }

//      function sumOfBalances(address _sender, uint256 _proposalId) private view returns(uint256){
//         uint256 _sum = balances[_sender];
//         for(uint256 i = 0; i < delegates[msg.sender][_proposalId].length; i++){
//             _sum += balances[delegates[_sender][_proposalId][i]];
//         }
//         return _sum;
//     }

//     /** @notice Finish proposal and close it.
//       * @param _proposalId Id of the calling proposal.
//       * @return _success true if proposal successfull execute, false if not.
//     */  
//     function finishVote(
//         uint256 _proposalId
//     ) external 
//     proposalExist(_proposalId)
//     proposalNotClosed(_proposalId) 
//     returns(bool _success)
//     {
//         require(proposals[proposalId].endTime < block.timestamp,"Time for voting is not over");
        
//         if(proposalPoll(_proposalId)){
//             executeProposal(_proposalId);
//             _success = true;           
//         } else if(!proposalPoll(_proposalId)){
             
//             _success = false;     
//         }
        
//         _closeProposal(_proposalId);

//         emit ProposalFinished(
//             _proposalId,
//             proposals[_proposalId].transactionByteCode,
//             proposals[_proposalId].description,
//             _success   
//         );

//         return _success;
//     }

//     /** @notice Decides on proposal.
//       * @param _proposalId Id of the calling proposal.
//       * @return _success true if proposal successfull< false if not.
//     */
//     function proposalPoll(uint256 _proposalId) private view returns(bool _success){
//         if(
//             proposals[_proposalId].totalVotes >= minimumQuorum &&
//             proposals[_proposalId].totalVotesFor > (minimumQuorum / 2) 
//         ){
//             return true;
//         }
//         return false;
//     }

//     /** @notice Execute successful proposal.
//       * @param _proposalId Id of the calling proposal.
//       * @return success Status of executing proposal.
//     */
//     function executeProposal(uint256 _proposalId) private returns(bool){
//         (bool success, ) = proposals[_proposalId].recipient.call(proposals[_proposalId].transactionByteCode);
//         return success;
//     }

//     /** @notice Close proposal.
//       * @param _proposalId Id of the closing proposal.
//       * @return true Status of closing proposal.
//     */
//     function _closeProposal(uint256 _proposalId) private returns(bool){
//         proposals[_proposalId].open = false;
//         emit ProposalClosed(proposalId);
//         return true;
//     }

//     /// @notice Return which option is the vote 
//     /// @return checkVoting[_proposalId][_voter] type uint
//     function getVote(address _voter, uint256 _proposalId) external view returns(uint256){
//         return uint(checkVoting[_proposalId][_voter]);
//     }

//     /// @notice Return addresses who delegate tokens to msg.sender 
//     /// @return delegates[_voter][_proposalId] type address
//     function getDelegate(address _voter, uint256 _proposalId) external view returns(address[] memory){
//         return delegates[_voter][_proposalId];
//     }

//     /// @notice Return balance of address
//     /// @return balance type uint256
//     function balanceOf(address _owner) external view returns(uint256 balance){
//       return balances[_owner];
//     }
    
//     /// @notice Return struct proposal
//     /// @return proposals[_proposalId] type proposal
//     function getProposal(uint256 _proposalId) external view returns(proposal memory){
//         return proposals[_proposalId];
//     }

//     /// @notice Return time then balance will be unlicked
//     /// @return unlockBalance[_owner] type uint256
//     function getUnlockBalance(address _owner) external view returns(uint256){
//         return unlockBalance[_owner];
//     }

//     /// @notice Return block.timestamp
//     /// @return block.timestamp type uint256
//     function getBlockTimeStamp() external view returns(uint256){
//         return block.timestamp;
//     }

//     event ProposalCreated(address proposer,
//         bytes sygnHash,
//         string description,
//         uint256 votingTimer
//     );

//     event ProposalFinished(
//             uint256 _proposalId,
//             bytes _transactionByteCode,
//             string _description,
//             bool _success   
//     );

//     event ProposalClosed(uint256 proposalId);

//     event VotingRulesChanged(uint256 _minimumQuorum, uint256 _debatingPeriod);

//     event Deposit(address sender, uint256 _amount);

//     event Withdraw(address sender, uint256 _amount);
    
//     event Delegate(address _from, address _to, uint256 _proposalId);

//     event VoteCreated(address _voter, uint256 proposalId, uint256 _amount, bool _forAgainst);
// }