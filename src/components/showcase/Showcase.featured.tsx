import React, { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Heading, ButtonGroup, Button } from '@chakra-ui/react';
import Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';

declare const window: any;

export let seaport: any;

export interface ShowcaseFeaturedInterface {
    title: string;
    url: string;
    contract: string;
    tokenId: number;
}

export const ShowcaseFeaturedComponent: FC<ShowcaseFeaturedInterface> = ({ title, url, contract, tokenId }) => {
    const [asset, setAsset] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
        (async () => {
            seaport = new OpenSeaPort(window.ethereum, { networkName: Network.Main })

            const assetState = await seaport.api.getAsset({ tokenAddress: contract, tokenId });
            console.log(assetState);

            if (assetState.sellOrders && assetState.sellOrders.length > 0) {
                let price = 99999;

                for (let i = 0; i < assetState.sellOrders.length; i++) {
                    const order = assetState.sellOrders[i];
                    const basePrice = (order.basePrice.toNumber() / Math.pow(10, 18));

                    if (basePrice < price) {
                        price = basePrice;
                    }
                }

                setPrice(price);
            }

            setAsset(assetState);
        })();
    }, [contract]);

    return(
        <Box display="flex" alignItems="center" justifyContent="left" width="100%" sx={{}}>
            <Box width="33%">
                <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    maxW={{ base: `300px`, lg: `290px`, xl: "275px", xxl: "320px", xxxl: "390px" }} maxH="480px"
                    overflow="hidden"
                    margin={{ base: "2% 0 0 2%", lg: "2% 0 0 2%", xl: "2.5% 0 0 0%", xxl: "2% 0 0 -3%", xxxl: "3% 0 0 -0.5%" }}
                    borderRadius="50%" border="5px solid #7D216B"
                    boxShadow="0 0 30px rgba(0,0,0,0.8) inset"
                    zIndex={300}
                >
                    <Box className="playerWrapper" position="relative" paddingTop="100%" bg="blue.900" zIndex={200}>
                        <ReactPlayer
                            url={url}
                            playing={true}
                            loop={true}
                            width="200%"
                            height="200%"
                            style={{ position: 'absolute', left: `-50%`, top: `-50%`, zIndex: 200 }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box width="33%" d="flex" h="100%" justifyContent="center" alignContent="center">
                <Box p="3%" height="100%" d="flex" alignItems="center" width="100%" color="white" fontFamily="Federal, serif" borderRadius="15px" textAlign="center" sx={{
                    backgroundColor: `rgba(0,0,0,0.5)`,
                    backdropFilter: `blur(2px)`,
                    boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                }}>
                    <Box w="100%">
                        <Heading as="h2" fontSize="1.2vw" mb="1vw" d="inline-flex" fontFamily="Federal, serif" fontWeight="100" textAlign="center" sx={{ position: `relative`, "&:after": { color: `green.600`, opacity: 0.8, content: `"${title}"`, fontFamily: `FederalEighteen, serif`, fontSize: `inherit`, position: `absolute`, top: `2%`, left: `0`, width: `100%`}}}>{title}</Heading>
                        <Heading as="h3" fontSize="1.4vw" mx="auto" fontFamily="Federal, serif" fontWeight="100" textAlign="center" sx={{ position: `relative`, display: `inline-flex`, width: `auto`, "&:after": { color: `green.600`, opacity: 0.8, content: `"${price.toFixed(4)} ETH"`, fontFamily: `FederalEighteen, serif`, fontSize: `inherit`, position: `absolute`, top: `2%`, left: `0`, width: `100%`}}}>{price.toFixed(4)} ETH</Heading>
                        <ButtonGroup
                            size="lg"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            mt="1vw"

                            fontFamily="'Hero', sans-serif"
                            onClick={async e => {
                                if (typeof window.ethereum !== 'undefined') {
                                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                                    const offerPrice = 0.005 // (price ? price : 0.005);

                                    await seaport.wrapEth({
                                        amountInEth: offerPrice,
                                        accountAddress: accounts[0],
                                    })

                                    const offer = await seaport.createBuyOrder({
                                        asset: {
                                            tokenId: (tokenId.toString()),
                                            tokenAddress: contract,
                                        },
                                        accountAddress: accounts[0],
                                        startAmount: offerPrice,
                                    });
                                }
                            }}
                        >
                            <Button width="45%" maxW="120px" pt="5px" fontSize="1vw" colorScheme="purple">BUY</Button>
                            <Button width="45%" maxW="120px" pt="5px" fontSize="1vw" colorScheme="green">BID</Button>
                        </ButtonGroup>
                    </Box>

                </Box>
            </Box>
            <Box width="33%"></Box>
        </Box>
    )
}
