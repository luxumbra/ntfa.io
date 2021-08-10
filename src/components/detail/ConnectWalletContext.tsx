import React, { FC, useState, useEffect, useCallback, useRef, createContext } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
// import { css, jsx } from "@emotion/react";
// import { OpenSeaPort, Network } from "opensea-js";
// import NextLink from 'next/link';
import { SpinnerIcon } from "@chakra-ui/icons";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers, providers, utils } from 'ethers';
import { CONFIG } from "../../../config";
import { get, remove, set } from '../../lib/store';
import { clearWalletConnect } from '../../lib/auth';

const walletconnectKey = 'walletconnect';
const mobileLinkChoiceKey = 'WALLETCONNECT_DEEPLINK_CHOICE';
const injectedWalletKey = "WEB3_CONNECT_CACHED_PROVIDER";
declare const window: any;
export let provider: any;
export let web3: any;
export let accounts: any;


export type ConnectWalletContextType = {
  provider: providers.Web3Provider | null;
  onClickConnect: () => Promise<void>;
  onClickDisconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
  bidding: boolean,
  modalOpen: boolean,
  onClickBidModalOpen: () => void,
  onClickBidModalClose: () => void,
  price: number,
  yourBid: { asset: string | null, amount: number, assetAddress: string | null } | undefined,
  isEnded: boolean,
  creatingOrder: boolean,
  processingOrder: boolean,
  sendingOrder: boolean,
  priceSetter: (price: number) => void,
  doCreatingOrder: (status: boolean) => void,
  doProcessingOrder: (status: boolean) => void,
  doSendingOrder: (status: boolean) => void,
  cancelOrder: () => void,
  storeBid: (assetId: string | null, bid: string | null, assetAddress: string | null) => void,
  storeNFTVideoUrl: (nftId: string, videoUrl: string) => void,
  videos: Array<StoreVideoPropType>,
};

export const ConnectWalletContext = createContext<ConnectWalletContextType>({
  provider: null,
  onClickConnect: async () => { },
  onClickDisconnect: () => undefined,
  isConnecting: false,
  isConnected: false,
  address: null,
  bidding: false,
  modalOpen: false,
  onClickBidModalOpen: () => { },
  onClickBidModalClose: () => { },
  price: 0,
  yourBid: undefined,
  isEnded: false,
  creatingOrder: false,
  processingOrder: false,
  sendingOrder: false,
  priceSetter: () => { },
  doCreatingOrder: () => { },
  doProcessingOrder: () => { },
  doSendingOrder: () => { },
  cancelOrder: () => { },
  storeBid: () => { },
  storeNFTVideoUrl: () => { },
  videos: [{ nftId: "", videoUrl: "" }],
});

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: CONFIG.infuraId,
    },
  },
};

const web3Modal =
  typeof window !== 'undefined' &&
  new Web3Modal({
    network: 'rinkeby',
    cacheProvider: true,
    providerOptions,
  });

interface ConnectWalletProviderOptions {
  children: React.ReactElement;
}
type StoreVideoPropType = {
  nftId: string;
  videoUrl: string;
}

export default function ConnectWalletProvider({ children }: ConnectWalletProviderOptions) {
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);
  const [bidding, setBidding] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [price, setPrice] = useState<number>(0);
  const [yourBid, setYourBid] = useState<any>(undefined);
  const [isEnded, setIsEnded] = useState(false);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [sendingOrder, setSendingOrder] = useState(false);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [videos, setVideos] = useState<Array<StoreVideoPropType>>([{ nftId: "", videoUrl: "" }]);

  const calledOnce = useRef<boolean>(false);

  const onClickDisconnect = useCallback(async () => {
    if (web3Modal === false) return;
    accounts = null;
    web3Modal.clearCachedProvider();
    clearWalletConnect();
    setAddress(null);
    setProvider(null);
    setIsConnecting(false);
    setIsConnected(false);
    setBidding(false);
    setYourBid(undefined)
    setCreatingOrder(false);
    setSendingOrder(false);
    setProcessingOrder(false);
    console.log("Web3 disconnected...");

  }, []);


  const onClickConnect = useCallback(async () => {
    if (web3Modal === false) return;
    setIsConnecting(true);
    console.log("Web3 Connecting...");

    try {
      const web3Provider = await web3Modal.connect();
      web3Provider && console.log("web3 provider ready...");

      const ethersProvider = new ethers.providers.Web3Provider(web3Provider);
      setProvider(ethersProvider);

      console.log("Getting your address...");
      const ethAddress = await ethersProvider.getSigner().getAddress();
      ethAddress && console.info("address obtained, web3 set: ", ethAddress);

      ethAddress &&
        setAddress(ethAddress);
      setIsConnecting(false);
      setIsConnected(true);
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      setIsConnecting(false);
      setIsConnected(false);
      onClickDisconnect();
    }

  }, [onClickDisconnect]);


  const onClickBidModalOpen = useCallback(() => {
    setBidding(true);
    setModalOpen(true);
  }, []);

  const onClickBidModalClose = useCallback(() => {
    setBidding(false);
    setModalOpen(false);
    setBidding(false);
    setYourBid(undefined)
    setCreatingOrder(false);
    setSendingOrder(false);
    setProcessingOrder(false);
    console.log("Bid modal closed...");

  }, []);

  const doCreatingOrder = useCallback(async (status: boolean) => {
    setCreatingOrder(status);
  }, []);
  const doProcessingOrder = useCallback(async (status: boolean) => {
    setProcessingOrder(status);
  }, []);
  const doSendingOrder = useCallback(async (status: boolean) => {
    setSendingOrder(status);
  }, []);
  const cancelOrder = useCallback(async () => {
    setCreatingOrder(false);
    setProcessingOrder(false);
  }, []);

  const priceSetter = useCallback(async (price: number) => {
    setPrice(price);
  }, []);

  const storeBid = useCallback((assetId, bid, assetAddress) => {
    setYourBid({ asset: assetId, amount: bid, assetAddress: assetAddress })
  }, []);

  const storeNFTVideoUrl = (id: string, url: string) => {
    setVideos(videos => [...videos, { nftId: id, videoUrl: url }]);
  }

  useEffect(() => {
    if (calledOnce.current) return;
    calledOnce.current = true;

    if (web3Modal === false) return;
    if (web3Modal.cachedProvider) {
      onClickConnect().catch(() => undefined);
    }
  }, [onClickConnect]);

  return (
    <ConnectWalletContext.Provider
      value={{
        provider,
        onClickConnect,
        onClickDisconnect,
        isConnected,
        isConnecting,
        address,
        bidding,
        modalOpen,
        onClickBidModalOpen,
        onClickBidModalClose,
        price,
        yourBid,
        isEnded,
        creatingOrder,
        processingOrder,
        sendingOrder,
        priceSetter,
        doCreatingOrder,
        doProcessingOrder,
        doSendingOrder,
        cancelOrder,
        storeBid,
        storeNFTVideoUrl,
        videos
      }}>
      {children}
    </ConnectWalletContext.Provider>
  );
}
