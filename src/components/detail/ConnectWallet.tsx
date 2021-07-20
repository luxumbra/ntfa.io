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

const walletconnectKey = 'walletconnect';
const mobileLinkChoiceKey = 'WALLETCONNECT_DEEPLINK_CHOICE';
const injectedWalletKey = "WEB3_CONNECT_CACHED_PROVIDER";
declare const window: any;
export let provider: any;
export let web3: any;
export let accounts: any;

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
const clearWalletConnect = (): void => {
  remove(walletconnectKey);
  remove(mobileLinkChoiceKey);
};

export type ConnectWalletProps = {
  userWallet: any;
}

export type ConnectWalletContextType = {
  provider: providers.Web3Provider | null;
  connectWeb3: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
};

export const ConnectWalletContext = createContext<ConnectWalletContextType>({
  provider: null,
  connectWeb3: async () => { },
  disconnect: () => undefined,
  isConnecting: false,
  isConnected: false,
  address: null,
});

export default function ConnectWallet({ userWallet }: ConnectWalletProps) {
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
  }, []);

  const onClickConnect = useCallback(async () => {
    if (web3Modal === false) return;
    setIsConnecting(true);

    try {
      const web3Provider = await web3Modal.connect();
      const ethersProvider = new providers.Web3Provider(web3Provider);

      const ethAddress = await ethersProvider.getSigner().getAddress();

      setAddress(ethAddress);
      setProvider(ethersProvider);
      setIsConnecting(false);
      setIsConnected(true);
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      setIsConnecting(false);
      onClickDisconnect();
    }
    return false;
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
    <>
      {isConnected ? (
        <>
          <Box fontSize={{ base: "10px" }} mb={3}>
            {/* {`${address} connected.`} */}
          </Box>
          <Button variant="cta" onClick={() => onClickDisconnect()}>Disconnect</Button>
        </>
      ) : (
        <ButtonGroup>
            <Button isLoading={isConnecting} loadingText={`Connecting...`} variant="cta" onClick={() => onClickConnect()}>
              {!isConnected && !isConnecting && `Connect`}
          </Button>
        </ButtonGroup >
      )}
    </>
  );
}
