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
            // console.log(assetState);

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
        <Box display="flex" alignItems="center" alignContent="center" justifyContent="left" width="100%">
            <Box width="33%">
                <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    maxW={{ base: `300px`, lg: `290px`, xl: "275px", xxl: "320px", xxxl: "390px" }} maxH="480px"
                    overflow="hidden"
                    margin={{ base: "2% 0 0 2%", lg: "2% 0 0 2%", xl: "2.5% 0 0 0%", xxl: "2% 0 0 -3%", xxxl: "3% 0 0 -0.5%" }}
                    zIndex={300}
                >
                    <Box
                        className="playerWrapper"
                        position="relative"
                        paddingTop="100%"
                        zIndex={200}
                    >
                        <ReactPlayer
                            url={url}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', left: `0`, top: `0`, zIndex: 200 }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box width="33%">
                <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    maxW={{ base: `300px`, lg: `290px`, xl: "275px", xxl: "320px", xxxl: "390px" }} maxH="480px"
                    overflow="hidden"
                    margin={{ base: "2% 0 0 2%", lg: "2% 0 0 2%", xl: "2.5% 0 0 0%", xxl: "2% 0 0 -3%", xxxl: "3% 0 0 -0.5%" }}
                    zIndex={300}
                >
                    <Box className="playerWrapper" position="relative" paddingTop="100%" zIndex={200}>
                        <ReactPlayer
                            url={url}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', left: `0`, top: `0`, zIndex: 200 }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box width="33%">
                <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    maxW={{ base: `300px`, lg: `290px`, xl: "275px", xxl: "320px", xxxl: "390px" }} maxH="480px"
                    overflow="hidden"
                    margin={{ base: "2% 0 0 2%", lg: "2% 0 0 2%", xl: "2.5% 0 0 0%", xxl: "2% 0 0 -3%", xxxl: "3% 0 0 -0.5%" }}
                    zIndex={300}
                >
                    <Box className="playerWrapper" position="relative" paddingTop="100%" zIndex={200}>
                        <ReactPlayer
                            url={url}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', left: `0`, top: `0`, zIndex: 200 }}
                        />
                    </Box>
                    <Box p="30px" width="420px" backgroundColor="rgba(255, 255, 255, 0.5)" borderRadius="15px">
                        <Heading size="xl" mb="15px" textAlign="center">{title}</Heading>
                        <Heading size="lg" mb="15px" textAlign="center">{price.toFixed(4)} ETH</Heading>
                        <ButtonGroup
                            size="lg"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
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
                            <Button width="120px" pt="5px" colorScheme="purple">BUY</Button>
                            <Button width="120px" pt="5px" colorScheme="green">BID</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
