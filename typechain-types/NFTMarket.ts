/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type MarketItemStruct = {
  itemId: BigNumberish;
  price: BigNumberish;
  nftContract: string;
  owner: string;
  sale: boolean;
};

export type MarketItemStructOutput = [
  BigNumber,
  BigNumber,
  string,
  string,
  boolean
] & {
  itemId: BigNumber;
  price: BigNumber;
  nftContract: string;
  owner: string;
  sale: boolean;
};

export type AuctionStruct = {
  owner: string;
  lastBidder: string;
  price: BigNumberish;
  amountOfBids: BigNumberish;
  minBidStep: BigNumberish;
  finishTime: BigNumberish;
  idItem: BigNumberish;
  open: boolean;
};

export type AuctionStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean
] & {
  owner: string;
  lastBidder: string;
  price: BigNumber;
  amountOfBids: BigNumber;
  minBidStep: BigNumber;
  finishTime: BigNumber;
  idItem: BigNumber;
  open: boolean;
};

export interface NFTMarketInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "PAUSER_ROLE()": FunctionFragment;
    "buyItem(uint256)": FunctionFragment;
    "cancel(uint256)": FunctionFragment;
    "cancelAuction(uint256)": FunctionFragment;
    "changeAuctionTime(uint256)": FunctionFragment;
    "createItem(address,string)": FunctionFragment;
    "fetchAuctionItems()": FunctionFragment;
    "fetchMarketItems()": FunctionFragment;
    "finishAuction(uint256)": FunctionFragment;
    "getAuction(uint256)": FunctionFragment;
    "getItem(uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "listItem(uint256,uint256)": FunctionFragment;
    "listItemOnAuction(uint256,uint256,uint256)": FunctionFragment;
    "makeBid(uint256,uint256)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeAuctionTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createItem",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchAuctionItems",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchMarketItems",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finishAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listItemOnAuction",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "makeBid",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeAuctionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchAuctionItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchMarketItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAuction", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listItemOnAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "AuctionFinished(uint256,bool)": EventFragment;
    "AuctionStarted(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "AuctionTimeChanged(uint256)": EventFragment;
    "BidMaked(address,uint256,uint256,uint256)": EventFragment;
    "ItemBought(address,uint256,uint256)": EventFragment;
    "ItemCreated(address,uint256)": EventFragment;
    "MarketItemCanceled(uint256)": EventFragment;
    "MarketItemCreated(address,address,uint256,uint256,bool)": EventFragment;
    "Paused(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionTimeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BidMaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketItemCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketItemCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type AuctionFinishedEvent = TypedEvent<
  [BigNumber, boolean],
  { auctionId: BigNumber; result: boolean }
>;

export type AuctionFinishedEventFilter = TypedEventFilter<AuctionFinishedEvent>;

export type AuctionStartedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    owner: string;
    startPrice: BigNumber;
    minBidStep: BigNumber;
    finishTime: BigNumber;
    idAuction: BigNumber;
    idItem: BigNumber;
  }
>;

export type AuctionStartedEventFilter = TypedEventFilter<AuctionStartedEvent>;

export type AuctionTimeChangedEvent = TypedEvent<
  [BigNumber],
  { _newAuctionTime: BigNumber }
>;

export type AuctionTimeChangedEventFilter =
  TypedEventFilter<AuctionTimeChangedEvent>;

export type BidMakedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    bidder: string;
    newPrice: BigNumber;
    auctioId: BigNumber;
    amountOfBids: BigNumber;
  }
>;

export type BidMakedEventFilter = TypedEventFilter<BidMakedEvent>;

export type ItemBoughtEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { _newOwner: string; _itemId: BigNumber; _price: BigNumber }
>;

export type ItemBoughtEventFilter = TypedEventFilter<ItemBoughtEvent>;

export type ItemCreatedEvent = TypedEvent<
  [string, BigNumber],
  { owner: string; tokenId: BigNumber }
>;

export type ItemCreatedEventFilter = TypedEventFilter<ItemCreatedEvent>;

export type MarketItemCanceledEvent = TypedEvent<
  [BigNumber],
  { _itemId: BigNumber }
>;

export type MarketItemCanceledEventFilter =
  TypedEventFilter<MarketItemCanceledEvent>;

export type MarketItemCreatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, boolean],
  {
    nftContract: string;
    owner: string;
    itemId: BigNumber;
    price: BigNumber;
    sale: boolean;
  }
>;

export type MarketItemCreatedEventFilter =
  TypedEventFilter<MarketItemCreatedEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface NFTMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTMarketInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    buyItem(
      _itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancel(
      _itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeAuctionTime(
      _newAuctionTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createItem(
      _to: string,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fetchAuctionItems(
      overrides?: CallOverrides
    ): Promise<[MarketItemStructOutput[]]>;

    fetchMarketItems(
      overrides?: CallOverrides
    ): Promise<[MarketItemStructOutput[]]>;

    finishAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[AuctionStructOutput]>;

    getItem(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[MarketItemStructOutput]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    listItem(
      _itemId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listItemOnAuction(
      _idItem: BigNumberish,
      _minBidStep: BigNumberish,
      _startPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeBid(
      _auctionId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

  buyItem(
    _itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancel(
    _itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelAuction(
    _auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeAuctionTime(
    _newAuctionTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createItem(
    _to: string,
    tokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fetchAuctionItems(
    overrides?: CallOverrides
  ): Promise<MarketItemStructOutput[]>;

  fetchMarketItems(
    overrides?: CallOverrides
  ): Promise<MarketItemStructOutput[]>;

  finishAuction(
    _auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAuction(
    _auctionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<AuctionStructOutput>;

  getItem(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<MarketItemStructOutput>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  listItem(
    _itemId: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listItemOnAuction(
    _idItem: BigNumberish,
    _minBidStep: BigNumberish,
    _startPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeBid(
    _auctionId: BigNumberish,
    _newPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

    buyItem(_itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    cancel(_itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    cancelAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeAuctionTime(
      _newAuctionTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createItem(
      _to: string,
      tokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fetchAuctionItems(
      overrides?: CallOverrides
    ): Promise<MarketItemStructOutput[]>;

    fetchMarketItems(
      overrides?: CallOverrides
    ): Promise<MarketItemStructOutput[]>;

    finishAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<AuctionStructOutput>;

    getItem(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<MarketItemStructOutput>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listItem(
      _itemId: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    listItemOnAuction(
      _idItem: BigNumberish,
      _minBidStep: BigNumberish,
      _startPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    makeBid(
      _auctionId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AuctionFinished(uint256,bool)"(
      auctionId?: null,
      result?: null
    ): AuctionFinishedEventFilter;
    AuctionFinished(
      auctionId?: null,
      result?: null
    ): AuctionFinishedEventFilter;

    "AuctionStarted(address,uint256,uint256,uint256,uint256,uint256)"(
      owner?: string | null,
      startPrice?: null,
      minBidStep?: null,
      finishTime?: null,
      idAuction?: null,
      idItem?: null
    ): AuctionStartedEventFilter;
    AuctionStarted(
      owner?: string | null,
      startPrice?: null,
      minBidStep?: null,
      finishTime?: null,
      idAuction?: null,
      idItem?: null
    ): AuctionStartedEventFilter;

    "AuctionTimeChanged(uint256)"(
      _newAuctionTime?: null
    ): AuctionTimeChangedEventFilter;
    AuctionTimeChanged(_newAuctionTime?: null): AuctionTimeChangedEventFilter;

    "BidMaked(address,uint256,uint256,uint256)"(
      bidder?: string | null,
      newPrice?: null,
      auctioId?: BigNumberish | null,
      amountOfBids?: null
    ): BidMakedEventFilter;
    BidMaked(
      bidder?: string | null,
      newPrice?: null,
      auctioId?: BigNumberish | null,
      amountOfBids?: null
    ): BidMakedEventFilter;

    "ItemBought(address,uint256,uint256)"(
      _newOwner?: null,
      _itemId?: null,
      _price?: null
    ): ItemBoughtEventFilter;
    ItemBought(
      _newOwner?: null,
      _itemId?: null,
      _price?: null
    ): ItemBoughtEventFilter;

    "ItemCreated(address,uint256)"(
      owner?: string | null,
      tokenId?: null
    ): ItemCreatedEventFilter;
    ItemCreated(owner?: string | null, tokenId?: null): ItemCreatedEventFilter;

    "MarketItemCanceled(uint256)"(
      _itemId?: null
    ): MarketItemCanceledEventFilter;
    MarketItemCanceled(_itemId?: null): MarketItemCanceledEventFilter;

    "MarketItemCreated(address,address,uint256,uint256,bool)"(
      nftContract?: string | null,
      owner?: string | null,
      itemId?: BigNumberish | null,
      price?: null,
      sale?: null
    ): MarketItemCreatedEventFilter;
    MarketItemCreated(
      nftContract?: string | null,
      owner?: string | null,
      itemId?: BigNumberish | null,
      price?: null,
      sale?: null
    ): MarketItemCreatedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    buyItem(
      _itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancel(
      _itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeAuctionTime(
      _newAuctionTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createItem(
      _to: string,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fetchAuctionItems(overrides?: CallOverrides): Promise<BigNumber>;

    fetchMarketItems(overrides?: CallOverrides): Promise<BigNumber>;

    finishAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getItem(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      _itemId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listItemOnAuction(
      _idItem: BigNumberish,
      _minBidStep: BigNumberish,
      _startPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeBid(
      _auctionId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyItem(
      _itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      _itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeAuctionTime(
      _newAuctionTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createItem(
      _to: string,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fetchAuctionItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fetchMarketItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finishAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getItem(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listItem(
      _itemId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listItemOnAuction(
      _idItem: BigNumberish,
      _minBidStep: BigNumberish,
      _startPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeBid(
      _auctionId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
