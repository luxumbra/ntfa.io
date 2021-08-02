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
  )
}
