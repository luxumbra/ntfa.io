import React, { FC, useState, useEffect, useCallback, useRef, createContext } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
// import { css, jsx } from "@emotion/react";
// import { OpenSeaPort, Network } from "opensea-js";
// import NextLink from 'next/link';
import { SpinnerIcon } from "@chakra-ui/icons";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers, providers } from 'ethers';
import { CONFIG } from "../../../config";
import { get, remove, set } from '../../lib/store';
import { clearWalletConnect } from '../../lib/auth';

const walletconnectKey = 'walletconnect';
const mobileLinkChoiceKey = 'WALLETCONNECT_DEEPLINK_CHOICE';
const injectedWalletKey = "WEB3_CONNECT_CACHED_PROVIDER";
declare const window: any;
export let provider: any;
export let web3: any;
export let onClickConnect: any;
export let onClickDisconnect: any;
export let accounts: any;
export let user: any;

export type ConnectWalletContextType = {
  provider: providers.Web3Provider | null;
  onClickConnect: () => Promise<void>;
  onClickDisconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
};
export const ConnectWalletContext = createContext<ConnectWalletContextType>({
  provider: null,
  onClickConnect: async () => { },
  onClickDisconnect: () => undefined,
  isConnecting: false,
  isConnected: false,
  address: null,
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

export default function ConnectWalletProvider({ children }: ConnectWalletProviderOptions) {
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);
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
    console.log("Web3 disconnected...");

  }, []);



  const onClickConnect = useCallback(async () => {
    if (web3Modal === false) return;
    setIsConnecting(true);
    console.log("Web3 Connecting...");

    try {
      const web3Provider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(web3Provider);

      const ethAddress = await ethersProvider.getSigner().getAddress();

      setAddress(ethAddress);
      setProvider(ethersProvider);
      ethAddress && console.info("Web3 set: ", web3Provider, ethersProvider, ethAddress);
      setIsConnecting(false);
      setIsConnected(true);
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      setIsConnecting(false);
      setIsConnected(false);
      onClickDisconnect();
    }

  }, [onClickDisconnect]);



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
      }}>
      {children}
    </ConnectWalletContext.Provider>
  );
}
