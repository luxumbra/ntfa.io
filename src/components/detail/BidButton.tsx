import React, { FC, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
//


export interface BidButtonProps {
  tokenContract: string;
}

export const BidButton: FC<BidButtonProps> = ({ tokenContract }) => {
  const [isBid, setIsBid] = useState(false);
  const [bidPrice, setBidPrice] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);
  const [bidStatus, setBidStatus] = useState('');
  const [bidError, setBidError] = useState('');

  const onBidClick = (e: any) => {
    e.preventDefault();
    setIsBid(true);
  };

  // const onBidSuccess = (e) => {
  //   e.preventDefault();
  //   setIsBid(false);
  //   setBidPrice(e.detail.price);
  //   setBidAmount(e.detail.amount);
  //   setBidStatus('success');
  // };

  // const onBidError = (e) => {
  //   e.preventDefault();
  //   setIsBid(false);
  //   setBidPrice(0);
  //   setBidAmount(0);
  //   setBidStatus('error');
  //   setBidError(e.detail.message);
  // };

  // const onBidCancel = (e) => {
  //   e.preventDefault();
  //   setIsBid(false);
  //   setBidPrice(0);
  //   setBidAmount(0);
  //   setBidStatus('');
  // };

  return (
    <Box px={4} py={4} width={[1, 2, 2, 2]}>
      <Box px={4}>
        <Box px={4}>
          <Box mb={1}>
            <Button onClick={onBidClick}>
              <Box pb={1}>Bid</Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
