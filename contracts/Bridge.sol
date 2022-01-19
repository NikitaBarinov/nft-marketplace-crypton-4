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

    function redeem(uint256 tokenId, uint256 chainFrom, uint256 nonce, uint8 v, bytes32 r, bytes32 s) public{
        bytes32 hash = keccak256(abi.encodePacked(
            msg.sender, tokenId, chainFrom, block.chainid, nonce
        ));

        address signer = getSigner(hash, v, r, s);
        // if(signer == address(validator)){
        //     return true;
        // }
        // else if(signer != validator){return false;}
        // //return signer;
        require(signer == validator, 'Invalid validator signature');

        require(!redeemed[hash], 'Already redeemed');
        redeemed[hash] = true;
        

        IERC721(erc721_CONTRACT).safeTransferFrom(address(this), msg.sender, tokenId);

        emit SwapRedeemed(msg.sender, tokenId, chainFrom, block.chainid, nonce);
    }
    function getSigner(bytes32 hash, uint8 v, bytes32 r, bytes32 s) private pure  returns(address){
        address signer = ecrecover(getEthSignedMessageHash(hash), v, r, s);
        return signer;
    }
  function getEthSignedMessageHash(bytes32 _messageHash)
        public
        pure
        returns (bytes32)
    {
        /*
        Signature is produced by signing a keccak256 hash with the following format:
        "\x19Ethereum Signed Message\n" + len(msg) + msg
        */
        return
            keccak256(
                abi.encodePacked("\x19Ethereum Signed Message:\n32", _messageHash)
            );
    }
    function getMessageHash(
        address _to,
        uint _amount,
        string memory _message,
        uint _nonce
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _amount, _message, _nonce));
    }
}