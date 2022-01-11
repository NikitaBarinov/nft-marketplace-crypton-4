/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTMarket, NFTMarketInterface } from "../NFTMarket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_voteToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "AuctionFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minBidStep",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finishTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idAuction",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idItem",
        type: "uint256",
      },
    ],
    name: "AuctionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "auctioId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOfBids",
        type: "uint256",
      },
    ],
    name: "BidMaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "ItemBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ItemCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "MarketItemCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sale",
        type: "bool",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMarketItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "sale",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "finishAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuction",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "lastBidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOfBids",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minBidStep",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finishTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "idItem",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "open",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.Auction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "getItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "sale",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idItem",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minBidStep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startPrice",
        type: "uint256",
      },
    ],
    name: "listItemOnAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "makeBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002239380380620022398339810160408190526200003491620000ee565b6200003f3362000081565b6000805460ff60a01b19169055600580546001600160a01b039283166001600160a01b0319918216179091556004805493909216921691909117905562000125565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000e957600080fd5b919050565b6000806040838503121562000101578182fd5b6200010c83620000d1565b91506200011c60208401620000d1565b90509250929050565b61210480620001356000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806378bd7935116100a257806396b5a7551161007157806396b5a755146102f7578063adfcdc111461030a578063cf266ed01461031d578063e7fb74c714610330578063f2fde38b1461034357600080fd5b806378bd79351461023f5780638456cb59146102c1578063883efa67146102c95780638da5cb5b146102dc57600080fd5b80633f4ba83a116100de5780633f4ba83a146101ff57806340e58ee5146102075780635c975abb1461021a578063715018a61461023757600080fd5b80630b951ee7146101105780630f08efe01461012557806326fb76c2146101435780633129e77314610156575b600080fd5b61012361011e366004611e44565b610356565b005b61012d61057a565b60405161013a9190611f1b565b60405180910390f35b610123610151366004611d16565b610774565b6101f2610164366004611df3565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915250600090815260076020908152604091829020825160a0810184528154815260018201549281019290925260028101546001600160a01b0390811693830193909352600301549182166060820152600160a01b90910460ff161515608082015290565b60405161013a919061202f565b61012361093d565b610123610215366004611df3565b610971565b600054600160a01b900460ff16604051901515815260200161013a565b610123610adc565b61025261024d366004611df3565b610b10565b60405161013a919060006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151151560e083015292915050565b610123610bea565b6101236102d7366004611e23565b610c1c565b6000546040516001600160a01b03909116815260200161013a565b610123610305366004611df3565b610d43565b610123610318366004611e23565b610f49565b61012361032b366004611df3565b61122e565b61012361033e366004611df3565b61140c565b610123610351366004611cfc565b611684565b60008381526007602052604090206003015483906001600160a01b0316331461039a5760405162461bcd60e51b815260040161039190612006565b60405180910390fd5b600084815260076020526040902060030154600160a01b900460ff16156103f75760405162461bcd60e51b81526020600482015260116024820152704974656d20616c72656164792073616c6560781b6044820152606401610391565b6104008461171f565b61040e600380546001019055565b600061041960035490565b9050604051806101000160405280336001600160a01b0316815260200160006001600160a01b0316815260200184815260200160008152602001858152602001426203f4806104689190612043565b81526020808201889052600160409283018190526000858152600680845290849020855181546001600160a01b03199081166001600160a01b03928316178355948701519382018054909516931692909217909255918301516002830155606083015160038301556080830151600483015560a0830151600583015560c08301519082015560e0909101516007909101805460ff19169115159190911790557f7200cf48839ab2613af9e8f2cd3b2a89664b6b7fc52ee433f4d5637500612bba338486610538426203f480612043565b604080516001600160a01b03909516855260208501939093529183015260608201526080810183905260a0810187905260c00160405180910390a15050505050565b6060600061058760015490565b9050600080805b838110156105de5760006007816105a6846001612043565b81526020019081526020016000206001015411156105cc576105c9600184612043565b92505b806105d681612087565b91505061058e565b5060008267ffffffffffffffff81111561060857634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561066157816020015b6040805160a0810182526000808252602080830182905292820181905260608201819052608082015282526000199092019101816106265790505b50905060005b8481101561076b57600060078161067f846001612043565b81526020019081526020016000206001015411156107595760006007816106a7846001612043565b815260208082019290925260409081016000908120548082526007845290829020825160a0810184528154815260018201549481019490945260028101546001600160a01b039081169385019390935260038101549283166060850152600160a01b90920460ff1615156080840152855190935090919085908790811061073e57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610754600186612043565b945050505b8061076381612087565b915050610667565b50949350505050565b6000546001600160a01b0316331461079e5760405162461bcd60e51b815260040161039190611fd1565b600054600160a01b900460ff16156107c85760405162461bcd60e51b815260040161039190611f7c565b6107d6600180546001019055565b60006107e160015490565b60048054604051630138280760e01b81529293506001600160a01b031691630138280791610813918791879101611ef7565b602060405180830381600087803b15801561082d57600080fd5b505af1158015610841573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108659190611e0b565b506040805160a081018252828152600060208083018281526004546001600160a01b0390811685870190815289821660608701818152608088018781528a88526007909652958890209651875592516001870155516002860180549183166001600160a01b031990921691909117905592516003909401805492511515600160a01b026001600160a81b0319909316949093169390931717905590517fa9a8fc8429e9d4b8fe54b38fd34cb56aaa1a9bf6eb605f45b223b08b58b97618906109309084815260200190565b60405180910390a2505050565b6000546001600160a01b031633146109675760405162461bcd60e51b815260040161039190611fd1565b61096f6117ae565b565b600054600160a01b900460ff161561099b5760405162461bcd60e51b815260040161039190611f7c565b6000818152600760205260409020600301548190600160a01b900460ff1615156001146109f65760405162461bcd60e51b81526020600482015260096024820152684974656d2073616c6560b81b6044820152606401610391565b60008281526007602052604090206003015482906001600160a01b03163314610a315760405162461bcd60e51b815260040161039190612006565b600083815260076020526040902060010154610a7f5760405162461bcd60e51b815260206004820152600d60248201526c4974656d206e6f742073616c6560981b6044820152606401610391565b610a89833361184b565b60008381526007602052604080822060010191909155517fb1a176800c8fd3678d67204dac70aeb48aa9bb90b068dd8d94810161f12c68a990610acf9085815260200190565b60405180910390a1505050565b6000546001600160a01b03163314610b065760405162461bcd60e51b815260040161039190611fd1565b61096f60006118d7565b610b6c60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b5060009081526006602081815260409283902083516101008101855281546001600160a01b039081168252600183015416928101929092526002810154938201939093526003830154606082015260048301546080820152600583015460a08201529082015460c082015260079091015460ff16151560e082015290565b6000546001600160a01b03163314610c145760405162461bcd60e51b815260040161039190611fd1565b61096f611927565b600054600160a01b900460ff1615610c465760405162461bcd60e51b815260040161039190611f7c565b60008281526007602052604090206003015482906001600160a01b03163314610c815760405162461bcd60e51b815260040161039190612006565b60008211610cd15760405162461bcd60e51b815260206004820152601e60248201527f5072696365206d75737420626520626967676572207468656e207a65726f00006044820152606401610391565b610cda8361171f565b6000838152600760209081526040918290206001908101859055600454835186815292830191909152859233926001600160a01b03909216917f67f82fabf39fcad1b894cde13b20cc40a6bb0d526b67fb2e90e4de4a662b4f1a910160405180910390a4505050565b806000610d4f60035490565b9050808211158015610d77575060008281526006602052604090206007015460ff1615156001145b610d935760405162461bcd60e51b815260040161039190611fa6565b60008381526006602052604090206005015483904210801590610dcc57506000818152600660205260409020546001600160a01b031633145b610e115760405162461bcd60e51b815260206004820152601660248201527521b0b7103737ba103334b734b9b41030bab1ba34b7b760511b6044820152606401610391565b60008481526006602052604090206003015460021015610e635760405162461bcd60e51b815260206004820152600d60248201526c546f6f206d616e79206269647360981b6044820152606401610391565b60008481526006602081815260409283902083516101008101855281546001600160a01b039081168252600183015416928101929092526002810154938201939093526003830154606082015260048301546080820152600583015460a08201529082015460c082015260079091015460ff16151560e0820152610ee69061198c565b600084815260066020526040902054610f099085906001600160a01b03166119c1565b60408051858152600060208201527f2f81cf470cf5a3743bd234181b55ac11ea2319fbeeb52664407d65075436599291015b60405180910390a150505050565b816000610f5560035490565b9050808211158015610f7d575060008281526006602052604090206007015460ff1615156001145b610f995760405162461bcd60e51b815260040161039190611fa6565b6000848152600660205260409020546001600160a01b03163314801590610fd0575060008481526006602052604090206005015442105b61100f5760405162461bcd60e51b815260206004820152601060248201526f10d85b881b9bdd081b585ad948189a5960821b6044820152606401610391565b60008481526006602052604090206004810154600290910154849161103391612043565b111580156110bb57506005546040516370a0823160e01b81523360048201526001600160a01b03909116906370a082319060240160206040518083038186803b15801561107f57600080fd5b505afa158015611093573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b79190611e0b565b8311155b6110fb5760405162461bcd60e51b8152602060048201526011602482015270496e737566666963656e742066756e647360781b6044820152606401610391565b600554611113906001600160a01b03163330866119ee565b60008481526006602081815260409283902083516101008101855281546001600160a01b039081168252600183015416928101929092526002810154938201939093526003830154606082015260048301546080820152600583015460a08201529082015460c082015260079091015460ff16151560e08201526111969061198c565b60008481526006602052604081206003018054916111b383612087565b90915550506000848152600660209081526040918290206001810180546001600160a01b0319163390811790915560028201879055600390910154835191825291810186905291820186905260608201527f3b9d0913796994cfc81e0a405eaed0c7ca6c9b57dcbe0eb583cb98eab9df951390608001610f3b565b80600061123a60035490565b9050808211158015611262575060008281526006602052604090206007015460ff1615156001145b61127e5760405162461bcd60e51b815260040161039190611fa6565b600083815260066020526040902060050154839042108015906112b757506000818152600660205260409020546001600160a01b031633145b6112fc5760405162461bcd60e51b815260206004820152601660248201527521b0b7103737ba103334b734b9b41030bab1ba34b7b760511b6044820152606401610391565b6000848152600660205260409020600301546002106113505760405162461bcd60e51b815260206004820152601060248201526f496e737566666963656e74206269647360801b6044820152606401610391565b60008481526006602052604090208054600290910154600554611381926001600160a01b0391821692911690611a5f565b60008481526006602081815260408084206001810180549185015486526007845291852060030180546001600160a01b0319166001600160a01b0392831617905593889052919052546113d6918691166119c1565b60408051858152600160208201527f2f81cf470cf5a3743bd234181b55ac11ea2319fbeeb52664407d6507543659929101610f3b565b600054600160a01b900460ff16156114365760405162461bcd60e51b815260040161039190611f7c565b6000818152600760205260409020600301548190600160a01b900460ff1615156001146114915760405162461bcd60e51b81526020600482015260096024820152684974656d2073616c6560b81b6044820152606401610391565b6005546040516370a0823160e01b81523360048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156114d457600080fd5b505afa1580156114e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150c9190611e0b565b60008381526007602052604090206001015411156115605760405162461bcd60e51b8152602060048201526011602482015270496e737566666963656e742066756e647360781b6044820152606401610391565b6000828152600760205260409020600301546001600160a01b03163314156115c35760405162461bcd60e51b815260206004820152601660248201527521b0b7103737ba10313abc90313c903434b6b9b2b63360511b6044820152606401610391565b600082815260076020526040902060038101546001909101546005546115fa926001600160a01b03918216923392909116906119ee565b611604823361184b565b6000828152600760209081526040918290206003810180546001600160a01b031916339081179091556001909101548351918252918101859052918201527ffe2094c9ff56716cb07edf0cff82da158f346cb3bb2d89703228ab4eb0c329b69060600160405180910390a150600090815260076020526040812060010155565b6000546001600160a01b031633146116ae5760405162461bcd60e51b815260040161039190611fd1565b6001600160a01b0381166117135760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610391565b61171c816118d7565b50565b600480546040516323b872dd60e01b81523392810192909252306024830152604482018390526001600160a01b0316906323b872dd90606401600060405180830381600087803b15801561177257600080fd5b505af1158015611786573d6000803e3d6000fd5b505050600091825250600760205260409020600301805460ff60a01b1916600160a01b179055565b600054600160a01b900460ff166117fe5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610391565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600480546040516323b872dd60e01b815230928101929092526001600160a01b0383811660248401526044830185905216906323b872dd90606401600060405180830381600087803b1580156118a057600080fd5b505af11580156118b4573d6000803e3d6000fd5b50505060009283525050600760205260409020600301805460ff60a01b19169055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff16156119515760405162461bcd60e51b815260040161039190611f7c565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861182e3390565b60208101516001600160a01b03161561171c576020810151604082015160055461171c926001600160a01b0390911691611a5f565b600082815260066020819052604090912060078101805460ff1916905501546119ea908261184b565b5050565b6040516001600160a01b0380851660248301528316604482015260648101829052611a599085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611a94565b50505050565b6040516001600160a01b038316602482015260448101829052611a8f90849063a9059cbb60e01b90606401611a22565b505050565b6000611ae9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b669092919063ffffffff16565b805190915015611a8f5780806020019051810190611b079190611dd3565b611a8f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610391565b6060611b758484600085611b7f565b90505b9392505050565b606082471015611be05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610391565b843b611c2e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610391565b600080866001600160a01b03168587604051611c4a9190611edb565b60006040518083038185875af1925050503d8060008114611c87576040519150601f19603f3d011682016040523d82523d6000602084013e611c8c565b606091505b5091509150611c9c828286611ca7565b979650505050505050565b60608315611cb6575081611b78565b825115611cc65782518084602001fd5b8160405162461bcd60e51b81526004016103919190611f69565b80356001600160a01b0381168114611cf757600080fd5b919050565b600060208284031215611d0d578081fd5b611b7882611ce0565b60008060408385031215611d28578081fd5b611d3183611ce0565b9150602083013567ffffffffffffffff80821115611d4d578283fd5b818501915085601f830112611d60578283fd5b813581811115611d7257611d726120b8565b604051601f8201601f19908116603f01168101908382118183101715611d9a57611d9a6120b8565b81604052828152886020848701011115611db2578586fd5b82602086016020830137856020848301015280955050505050509250929050565b600060208284031215611de4578081fd5b81518015158114611b78578182fd5b600060208284031215611e04578081fd5b5035919050565b600060208284031215611e1c578081fd5b5051919050565b60008060408385031215611e35578182fd5b50508035926020909101359150565b600080600060608486031215611e58578081fd5b505081359360208301359350604090920135919050565b60008151808452611e8781602086016020860161205b565b601f01601f19169290920160200192915050565b80518252602080820151908301526040808201516001600160a01b0390811691840191909152606080830151909116908301526080908101511515910152565b60008251611eed81846020870161205b565b9190910192915050565b6001600160a01b0383168152604060208201819052600090611b7590830184611e6f565b6020808252825182820181905260009190848201906040850190845b81811015611f5d57611f4a838551611e9b565b9284019260a09290920191600101611f37565b50909695505050505050565b602081526000611b786020830184611e6f565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b602080825260119082015270105d58dd1a5bdb881b9bdd08195e1a5cdd607a1b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600f908201526e2737ba103a37b5b2b71037bbb732b960891b604082015260600190565b60a0810161203d8284611e9b565b92915050565b60008219821115612056576120566120a2565b500190565b60005b8381101561207657818101518382015260200161205e565b83811115611a595750506000910152565b600060001982141561209b5761209b6120a2565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212205a913e14957845d57a457ad14e6e42b380998251989b1c0a931a17ab69ec9f3964736f6c63430008040033";

type NFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarket__factory extends ContractFactory {
  constructor(...args: NFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _nftContract: string,
    _voteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTMarket> {
    return super.deploy(
      _nftContract,
      _voteToken,
      overrides || {}
    ) as Promise<NFTMarket>;
  }
  getDeployTransaction(
    _nftContract: string,
    _voteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftContract,
      _voteToken,
      overrides || {}
    );
  }
  attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketInterface {
    return new utils.Interface(_abi) as NFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}
