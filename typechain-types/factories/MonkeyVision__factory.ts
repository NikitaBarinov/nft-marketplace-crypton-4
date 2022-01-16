/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MonkeyVision, MonkeyVisionInterface } from "../MonkeyVision";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        name: "owner",
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
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "createToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "initMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600f81526e26b2ba30bb32b939b2902a37b5b2b760891b60208083019182528351808501909452600384526213515560ea1b9084015281519192916200006491600091620000f3565b5080516200007a906001906020840190620000f3565b50505062000097620000916200009d60201b60201c565b620000a1565b620001d6565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001019062000199565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b600181811c90821680620001ae57607f821691505b60208210811415620001d057634e487b7160e01b600052602260045260246000fd5b50919050565b6119ed80620001e66000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb46514610239578063b88d4fde1461024c578063c87b56dd1461025f578063e985e9c514610272578063f2fde38b146102ae57600080fd5b806370a0823114610205578063715018a6146102185780638da5cb5b1461022057806395d89b411461023157600080fd5b8063095ea7b3116100e9578063095ea7b3146101a457806323b872dd146101b957806334a55611146101cc57806342842e0e146101df5780636352211e146101f257600080fd5b8063013828071461011b57806301ffc9a71461014157806306fdde0314610164578063081812fc14610179575b600080fd5b61012e6101293660046115fb565b6102c1565b6040519081526020015b60405180910390f35b61015461014f366004611683565b610368565b6040519015158152602001610138565b61016c6103ba565b604051610138919061179b565b61018c6101873660046116bb565b61044c565b6040516001600160a01b039091168152602001610138565b6101b76101b236600461165a565b6104d4565b005b6101b76101c736600461150d565b6105ea565b6101b76101da3660046114c1565b61061b565b6101b76101ed36600461150d565b610670565b61018c6102003660046116bb565b61068b565b61012e6102133660046114c1565b610702565b6101b7610789565b6007546001600160a01b031661018c565b61016c6107bf565b6101b76102473660046115c1565b6107ce565b6101b761025a366004611548565b6107dd565b61016c61026d3660046116bb565b610815565b6101546102803660046114db565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101b76102bc3660046114c1565b61098c565b6007546000906001600160a01b031633146102f75760405162461bcd60e51b81526004016102ee90611800565b60405180910390fd5b610305600880546001019055565b600061031060085490565b905061031c8482610a27565b6103268184610a41565b7f1e1b69b56bd875547ce642e5ca9d38001b825863ffbf9cf08c72e0ff64b00a8d8482856040516103599392919061176b565b60405180910390a19392505050565b60006001600160e01b031982166380ac58cd60e01b148061039957506001600160e01b03198216635b5e139f60e01b145b806103b457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546103c9906118f5565b80601f01602080910402602001604051908101604052809291908181526020018280546103f5906118f5565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b5050505050905090565b600061045782610acc565b6104b85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016102ee565b506000908152600460205260409020546001600160a01b031690565b60006104df8261068b565b9050806001600160a01b0316836001600160a01b0316141561054d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016102ee565b336001600160a01b038216148061056957506105698133610280565b6105db5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016102ee565b6105e58383610ae9565b505050565b6105f43382610b57565b6106105760405162461bcd60e51b81526004016102ee90611835565b6105e5838383610c3d565b6007546001600160a01b031633146106455760405162461bcd60e51b81526004016102ee90611800565b61064e8161098c565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b6105e5838383604051806020016040528060008152506107dd565b6000818152600260205260408120546001600160a01b0316806103b45760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016102ee565b60006001600160a01b03821661076d5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016102ee565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b031633146107b35760405162461bcd60e51b81526004016102ee90611800565b6107bd6000610ddd565b565b6060600180546103c9906118f5565b6107d9338383610e2f565b5050565b6107e73383610b57565b6108035760405162461bcd60e51b81526004016102ee90611835565b61080f84848484610efe565b50505050565b606061082082610acc565b6108865760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016102ee565b6000828152600660205260408120805461089f906118f5565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb906118f5565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b50505050509050600061093660408051602081019091526000815290565b9050805160001415610949575092915050565b81511561097b5780826040516020016109639291906116ff565b60405160208183030381529060405292505050919050565b61098484610f31565b949350505050565b6007546001600160a01b031633146109b65760405162461bcd60e51b81526004016102ee90611800565b6001600160a01b038116610a1b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ee565b610a2481610ddd565b50565b6107d9828260405180602001604052806000815250611009565b610a4a82610acc565b610aad5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016102ee565b600082815260066020908152604090912082516105e592840190611396565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b1e8261068b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b6282610acc565b610bc35760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016102ee565b6000610bce8361068b565b9050806001600160a01b0316846001600160a01b03161480610c095750836001600160a01b0316610bfe8461044c565b6001600160a01b0316145b8061098457506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610984565b826001600160a01b0316610c508261068b565b6001600160a01b031614610cb85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016102ee565b6001600160a01b038216610d1a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016102ee565b610d25600082610ae9565b6001600160a01b0383166000908152600360205260408120805460019290610d4e9084906118b2565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d7c908490611886565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610e915760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016102ee565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610f09848484610c3d565b610f158484848461103c565b61080f5760405162461bcd60e51b81526004016102ee906117ae565b6060610f3c82610acc565b610fa05760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016102ee565b6000610fb760408051602081019091526000815290565b90506000815111610fd75760405180602001604052806000815250611002565b80610fe184611149565b604051602001610ff29291906116ff565b6040516020818303038152906040525b9392505050565b6110138383611263565b611020600084848461103c565b6105e55760405162461bcd60e51b81526004016102ee906117ae565b60006001600160a01b0384163b1561113e57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061108090339089908890889060040161172e565b602060405180830381600087803b15801561109a57600080fd5b505af19250505080156110ca575060408051601f3d908101601f191682019092526110c79181019061169f565b60015b611124573d8080156110f8576040519150601f19603f3d011682016040523d82523d6000602084013e6110fd565b606091505b50805161111c5760405162461bcd60e51b81526004016102ee906117ae565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610984565b506001949350505050565b60608161116d5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611197578061118181611930565b91506111909050600a8361189e565b9150611171565b60008167ffffffffffffffff8111156111c057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111ea576020820181803683370190505b5090505b8415610984576111ff6001836118b2565b915061120c600a8661194b565b611217906030611886565b60f81b81838151811061123a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061125c600a8661189e565b94506111ee565b6001600160a01b0382166112b95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016102ee565b6112c281610acc565b1561130f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016102ee565b6001600160a01b0382166000908152600360205260408120805460019290611338908490611886565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546113a2906118f5565b90600052602060002090601f0160209004810192826113c4576000855561140a565b82601f106113dd57805160ff191683800117855561140a565b8280016001018555821561140a579182015b8281111561140a5782518255916020019190600101906113ef565b5061141692915061141a565b5090565b5b80821115611416576000815560010161141b565b600067ffffffffffffffff8084111561144a5761144a61198b565b604051601f8501601f19908116603f011681019082821181831017156114725761147261198b565b8160405280935085815286868601111561148b57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b03811681146114bc57600080fd5b919050565b6000602082840312156114d2578081fd5b611002826114a5565b600080604083850312156114ed578081fd5b6114f6836114a5565b9150611504602084016114a5565b90509250929050565b600080600060608486031215611521578081fd5b61152a846114a5565b9250611538602085016114a5565b9150604084013590509250925092565b6000806000806080858703121561155d578081fd5b611566856114a5565b9350611574602086016114a5565b925060408501359150606085013567ffffffffffffffff811115611596578182fd5b8501601f810187136115a6578182fd5b6115b58782356020840161142f565b91505092959194509250565b600080604083850312156115d3578182fd5b6115dc836114a5565b9150602083013580151581146115f0578182fd5b809150509250929050565b6000806040838503121561160d578182fd5b611616836114a5565b9150602083013567ffffffffffffffff811115611631578182fd5b8301601f81018513611641578182fd5b6116508582356020840161142f565b9150509250929050565b6000806040838503121561166c578182fd5b611675836114a5565b946020939093013593505050565b600060208284031215611694578081fd5b8135611002816119a1565b6000602082840312156116b0578081fd5b8151611002816119a1565b6000602082840312156116cc578081fd5b5035919050565b600081518084526116eb8160208601602086016118c9565b601f01601f19169290920160200192915050565b600083516117118184602088016118c9565b8351908301906117258183602088016118c9565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611761908301846116d3565b9695505050505050565b60018060a01b038416815282602082015260606040820152600061179260608301846116d3565b95945050505050565b60208152600061100260208301846116d3565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156118995761189961195f565b500190565b6000826118ad576118ad611975565b500490565b6000828210156118c4576118c461195f565b500390565b60005b838110156118e45781810151838201526020016118cc565b8381111561080f5750506000910152565b600181811c9082168061190957607f821691505b6020821081141561192a57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156119445761194461195f565b5060010190565b60008261195a5761195a611975565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610a2457600080fdfea26469706673582212206e32bd8579554ae86f58741b403c4e8a0cfab6f920ead75b6b5ee63570932d4b64736f6c63430008040033";

type MonkeyVisionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MonkeyVisionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MonkeyVision__factory extends ContractFactory {
  constructor(...args: MonkeyVisionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MonkeyVision> {
    return super.deploy(overrides || {}) as Promise<MonkeyVision>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MonkeyVision {
    return super.attach(address) as MonkeyVision;
  }
  connect(signer: Signer): MonkeyVision__factory {
    return super.connect(signer) as MonkeyVision__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MonkeyVisionInterface {
    return new utils.Interface(_abi) as MonkeyVisionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MonkeyVision {
    return new Contract(address, _abi, signerOrProvider) as MonkeyVision;
  }
}
