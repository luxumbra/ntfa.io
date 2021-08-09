import { FC, useState } from 'react';
import { Box, Button, ButtonGroup, Link, Image } from '@chakra-ui/react';
import { useWeb3 } from '../../lib/hooks';

export type ConnectButtonContextType = {
  onClickConnect: () => Promise<void>;
  onClickDisconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
};

export const ConnectButton: FC = () => {
  const {
    onClickConnect,
    onClickDisconnect,
    isConnected,
    isConnecting,
  } = useWeb3();

  return (
    <>
      {isConnected ? (
        <>
          <Button variant="cta-small" onClick={() => onClickDisconnect()}>Disconnect</Button>
        </>
      ) : (
          <>
            <Button isLoading={isConnecting} loadingText={`Connecting...`} variant="cta-small" onClick={() => onClickConnect()}>
              {!isConnected && !isConnecting && `Connect to bid`}
          </Button>
          </>
      )}
    </>
  )
}
