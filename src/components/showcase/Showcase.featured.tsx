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
                </Box>
            </Box>
        </Box>
    )
}
