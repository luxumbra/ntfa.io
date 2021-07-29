import React, { FC, useState, useEffect } from "react";
import { Box, Heading, Link, Image, Button, ButtonGroup, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { css, jsx } from "@emotion/react";
import { OpenSeaPort, Network } from "opensea-js";
import axios from "axios";
import NextLink from 'next/link';
import ReactMarkdown from "react-markdown";
import SimpleBar from 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
//
import { MetadataComponent } from "../../components/shared/Metadata";
import { SceneBridge } from '../../components/scene/Scene.bridge';
import { SceneBuilding } from '../../components/scene/Scene.building';
import { FooterComponent } from "../../components/shared/Footer";
import { Loading } from '../../components/shared/Loading';
import { NoticeBanner } from '../../components/shared/NoticeBanner';

import { ExternalLinkIcon, ChevronLeftIcon, ArrowBackIcon } from '@chakra-ui/icons';
import 'simplebar/dist/simplebar.css';
import { isJSDocAugmentsTag } from "typescript";
import { AssetMeta } from "../../components/detail/AssetMeta";
import { OpenSeaAsset } from "opensea-js/lib/types";
import { connectWallet } from "../../constants";
import ConnectWallet from "../../components/detail/ConnectWallet";


declare const window: any;
export let getAsset: any;
export let seaport: any;
export let provider: any;
export let web3: any;
export let accounts: any;


export interface AssetDetailsInterface {
    name: string;
    description: string;
    animation_url: string;
    image_preview_url: string;
    traits: Array<{}>;
    permalink: string;
    external_link: string;
}

export const openseaRootUrl = "https://opensea.io";

export function AssetDetails() {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [asset, setAsset] = useState({} as AssetDetailsInterface);
    const [osAsset, setOsAsset] = useState({} as OpenSeaAsset);
    const [price, setPrice] = useState(0);
    const [creatingOrder, setCreatingOrder] = useState(false);
    const [userAccount, setUserAccount] = useState();
    const router = useRouter();
    const {
        query: { id, tokenId },
    } = router;



    // set the current users account address so we can check it against the highest bidder address
    const getSetUserAccount = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        !accounts && console.log("Getting accounts...");

        setUserAccount(accounts[0]);
    }

    interface BuyActionProps {
        id: string;
        tokenId: string;
    }

    const bidAction = async (id: string, tokenId: any) => {
        if (typeof window.ethereum !== 'undefined') {
            console.log(window.ethereum);

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Accounts: ", accounts);
            if (!accounts[0]) {
                await connectWallet();
            }

            const offerPrice = price ? price + 0.01 : 0.055;

            const ethWrap = await seaport.wrapEth({
                amountInEth: offerPrice,
                accountAddress: accounts[0],
            });

            !ethWrap && setCreatingOrder(true);
            ethWrap && console.log("eth wrap: ", ethWrap);

            setCreatingOrder(false);

            const offer = await seaport.createBuyOrder({
                asset: {
                    tokenId: (tokenId?.toString()),
                    tokenAddress: id,
                    schemaName: "ERC1155",
                },
                accountAddress: accounts[0],
                startAmount: offerPrice,
            });
            !offer && setCreatingOrder(true);

            //  }
            console.log("offer: ", offer);
            offer && setCreatingOrder(false);
            // debugger;
        }
    }

    // const placeBid = async (props: any) => {
    //     const { order, accountAddress } = props;
    //     const provider = await web3Modal.connect();
    //     if (!accountAddress) {
    //         provider.on()
    //     }
    // }


    useEffect(() => {
        (async () => {
            seaport = new OpenSeaPort(window.ethereum, { networkName: Network.Rinkeby })
            console.log("seaport: ", seaport);
            const assetState: OpenSeaAsset = await seaport.api.getAsset({ tokenAddress: id, tokenId })
            assetState && setOsAsset(assetState);
            console.log("Assetstate: ", osAsset);
            // debugger;


            if (osAsset.sellOrders && osAsset.sellOrders.length > 0) {
                let price = 9999;

                for (let i = 0; i < osAsset.sellOrders.length; i++) {
                    const order = osAsset.sellOrders[0];
                    const basePrice = (order.basePrice.toNumber() / Math.pow(10, 18));

                    if (basePrice < price) {
                        price = basePrice;
                    }
                }
                setPrice(price);
            }

            if (osAsset.buyOrders && osAsset.buyOrders.length > 0) {
                const buyOrder: any = osAsset.buyOrders[0];
                // const buyOrder = osAsset.buyOrders[0];
                const currentPrice = (buyOrder.currentPrice.toNumber() / Math.pow(10, 18));
                typeof currentPrice !== "undefined" && setPrice(currentPrice);
            }


            osAsset && setLoading(false);
        })();

    }, [id, tokenId, accounts, provider]);

    return (
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
            id="section"
        >
            <MetadataComponent title={osAsset?.name} description={osAsset?.description} socialImage={osAsset?.imagePreviewUrl} />
            <Box
                className="content"
                position="relative"
                flex={{ base: "0 0 90%", smd: "0 0 98%", lg: "0 0 45%", xxxl: "0 0 33%" }}
                width={{ base: "98%", smd: "98%", lg: "45%", xxxl: "33%" }}
                maxH={{ base: "83vh", lg: "83vh", xxxl: "75vh" }}
                height="100%"
                d="flex"
                flexDirection={{ base: "column", smd: "row", lg: "column" }}
                alignItems={{ base: "flex-start", smd: "center", lg: "flex-start" }}
                mt={{ base: 7, lg: "10px", xl: "10px", xxl: "50px" }}
                ml={{ base: "auto", smd: "auto", lg: "auto" }}
                mr={{ base: "auto", smd: "auto", lg: "auto" }}
                px="0"
                boxShadow="0 0 10px rgba(0,0,0,.6)"
                borderRadius="6px"
                overflow="hidden"
                zIndex={{ base: 100 }}
                backgroundColor="rgba(255,255,255,0.6)"
                sx={{
                    backdropFilter: "blur(7px)",
                }}
            >
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Box
                            className="playerWrapper"
                            position="relative"
                            paddingTop={{
                                base: `${(356 / 633) * 100}%`,
                                smd: `${31}%`,
                                lg: `${(356 / 633) * 100}%`
                            }}
                            width="100%"
                            height="0"
                            zIndex={200}
                            overflow="hidden"
                        >
                                {/* <ReactPlayer
                                    url={osAsset?.animation_url}
                                playing={true}
                                volume={0}
                                muted={true}
                                loop={true}
                                controls={true}
                                width="100%"
                                height="auto"
                                style={{
                                    position: "absolute",
                                    left: `0`,
                                    top: `0`,
                                    zIndex: 0,
                                }}
                                /> */}
                                <Image src={osAsset.imageUrl} alt={osAsset.name} width="100%" height="100%" objectFit="cover" style={{
                                    position: "absolute",
                                    left: `0`,
                                    top: `0`,
                                    zIndex: 0,
                                }} />
                        </Box>

                        <Box
                                // position="relative"
                            width={{ base: "100%", smd: "80%", lg: "100%" }}
                                margin="0"
                                height={{
                                base: `${100 * (356 / 633)}%`,
                                smd: `${100 - 31}%`,
                                lg: `${100 - (356 / 633) - 45}%`
                            }}
                                overflowY="auto"
                            z={0}
                            >
                                <Box position="sticky" top={0} d="flex" justifyContent="center" minW="100%" mb={3} sx={{
                                    "a > svg": {
                                        opacity: 0.5,
                                        transition: "opacity 0.2s ease-in-out"
                                    },
                                    "a:hover": {
                                        ">svg": {
                                            opacity: 1,
                                        }
                                    }
                                }}>
                                    <ButtonGroup isAttached sx={{
                                        backgroundColor: "white",
                                        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                                        overflow: "hidden",
                                        minW: "100%",
                                        justifyContent: "center"
                                    }}>
                                        <NextLink href={osAsset?.openseaLink} passHref>
                                            <Link variant="cta-small" isExternal>Bid on it! <ExternalLinkIcon mx="2px" /></Link>
                                        </NextLink>
                                        <NextLink href={`${openseaRootUrl}/collection/ntfa`} passHref>
                                            <Link variant="cta-small" isExternal>OpenSea Collection <ExternalLinkIcon mx="2px" /></Link>
                                        </NextLink>
                                        <NextLink href={osAsset.externalLink} passHref>
                                            <Link variant="cta-small" isExternal>Mattereum Passport <ExternalLinkIcon mx="2px" /></Link>
                                        </NextLink>
                                    </ButtonGroup>
                                </Box>
                                <Box p={{ base: "15px", smd: "10px", lg: "5px 25px 25px" }} d="flex" flexFlow="column wrap">
                                    <Box className="back-link" position="absolute" top={{ base: 4 }} right={{ base: 4 }} zIndex="200">
                                        <NextLink href={`/#section1`} passHref>
                                            <Link variant="cta"><ArrowBackIcon mr={0} /> Back to NFTs</Link>
                                        </NextLink>
                                    </Box>
                                    <Heading as="h3" size={"sm"} color="accent.primary" mb="4">
                                        {osAsset && osAsset.name}
                                    </Heading>
                                    <Box d="flex" className="asset--meta" flexFlow="column wrap" mb={2} sx={{
                                        "& > span": {
                                            fontSize: { base: "10px", lg: "12px" },
                                            mb: 0,
                                            fontWeight: "100"
                                        }
                                    }}>

                                        {osAsset?.traits && <AssetMeta theAsset={osAsset} />}

                                    </Box>

                                    <Box p="15px 30px" width="100%" d="flex" flexFlow="column wrap" textAlign="center">
                                        <Box sx={{
                                            "h3": {
                                                fontSize: { base: "14px", lg: "16px" },
                                            }
                                        }}>
                                            <h3>Get your hands on the {osAsset.name}</h3>
                                            <Box>
                                                <ConnectWallet userWallet={setUserAccount} />

                                                {userAccount && osAsset && (
                                                    <>
                                                        <Box as="div">
                                                            {`Highest bid: ${price.toFixed(4)} ETH`}
                                                        </Box>
                                                        {/* <Box as="span" sx={{
                                                            fontSize: "10px"
                                                        }}>
                                                            {osAsset.buyOrders.length > 0 && osAsset.buyOrders[0].maker === userAccount ? `(You're the highest bidder)` : `(You're not the highest bidder)`}
                                                        </Box> */}
                                                        {creatingOrder && <Box>Processing ... please wait</Box>}
                                                        <ButtonGroup
                                                            size="sm"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                            width="100%"
                                                        >
                                                            {/* <Button width="120px" pt="5px" colorScheme="purple" onClick={() => bidAction(osAsset.tokenAddress, osAsset.tokenId)}>BUY</Button> */}
                                                            <Button width="120px" pt="5px" colorScheme="green" onClick={() => bidAction(osAsset.tokenAddress, osAsset.tokenId)}>BID</Button>
                                                        </ButtonGroup>
                                                    </>
                                                )}
                                            </Box>
                                        </Box>

                                    </Box>
                                    <Box className="assetDescription" fontSize={{ base: "12px", lg: "14px" }} sx={{
                                        flex: "0 0 33%",
                                        maxH: "33%",
                                        width: "100%",
                                        "h2, h3": {
                                            fontFamily: "Hero, sans-serif",
                                            fontSize: { base: "12px", lg: "16px", xl: "18px" },
                                            fontWeight: "800",
                                            mb: 0
                                        },
                                        "h3": {
                                            fontSize: { base: "10px", lg: "14px", xl: "16px" },
                                        },
                                        "ul": {
                                            pl: "15px",
                                        },
                                        "a": {
                                            color: "brand.300",
                                            position: "relative",
                                            transition: "all 0.2s ease",
                                            _hover: {
                                                color: "brand.200",
                                                _after: {
                                                    width: "100%",
                                                }
                                            },
                                        }
                                    }}>
                                        <ReactMarkdown>
                                            {osAsset?.description}
                                        </ReactMarkdown>
                                    </Box>
                                </Box>

                            </Box>
                    </>
                )}
            </Box>

            <Box position="absolute" width="100%" height={{ base: "10%", xl: "10%" }} maxW={{ base: "25px", lg: "40px", xl: "40px", xxl: "45px", xxxl: "55px" }} bottom={{ base: "220px", smd: "245px", lg: "63%", xxl: "500px", xxxl: "750px" }} left={{ base: "50%", smd: "520px", lg: "165px", xl: "1100px", xxl: "1150px", xxxl: "1450px" }} zIndex={{ base: 0, smd: 0, lg: 0 }}>
                <NextLink href="/#section1" passHref>
                    <Link
                        display="inline-block"
                        position="relative"
                        // pt="26.25%"
                        height="0"
                        width="100%"
                        maxW="100px"
                        css={css`
                        @keyframes logo-anim {
                            0% { transform: translateY(25px); }
                            50% { transform: translateY(35px); }
                            100% { transform: translateY(25px); }
                        }
                        @keyframes pig-release {
                            0% {
                                transform: translateY(-15px) scale(1);
                            }
                            50% { transform: translateY(-400px) translateX(100px) scale(0.5); }
                            100% { transform: translateY(-700px) translateX(200px) scale(0.3); }
                        }
                        /* animation: logo-anim 5s infinite; */
                        /* animation-play-state: paused; */
                    `}
                        sx={{ animation: !toggle1 ? 'logo-anim 5s infinite' : 'pig-release 10s 1' }}
                    >
                        <Image src="/assets/pig-string.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
                </NextLink>
            </Box>

            <SceneBridge />

            <Box onClick={e => setToggle1(!toggle1)}>
                <SceneBuilding
                    src="/assets/buildings/building-4.png"
                    left={{ base: '180px', smd: '520px', lg: '120px', xl: '1050px', xxl: '1100px', xxxl: '1400px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '110px', xxxl: '170px' }}
                />
            </Box>

            <Image
                src="/assets/buildings/building-4.destroyed.png"
                position="absolute"
                left={{ base: '166px', smd: '506px', lg: '96px', xl: '1026px', xxl: '1076px', xxxl: '1361px' }}
                bottom={{ base: '14px', lg: '58px', xxxl: '86px' }}
                width={{ base: '95px', lg: '196px', xxxl: '306px' }}
                opacity={toggle1 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <Box onClick={e => setToggle3(!toggle3)}>
                <SceneBuilding
                    src="/assets/buildings/building-1.png"
                    left={{ base: '140px', smd: '480px', lg: '190px', xl: '970px', xxl: '990px', xxxl: '1250px' }}
                    bottom={{ base: '0', lg: '-25px', xxxl: '0' }}
                    width={{ base: '50px', lg: '120px', xxxl: '180px' }}
                />
            </Box>

            <Box onClick={e => setToggle2(!toggle2)}>
                <SceneBuilding
                    src="/assets/buildings/building-3.png"
                    left={{ base: '230px', smd: '550px', lg: '20px', xl: '1150px', xxl: '1200px', xxxl: '1550px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '120px', xxxl: '180px' }}
                />
            </Box>

            <Image
                src="/assets/effects/b3.png"
                position="absolute"
                left={{ base: '230px', smd: '553px', lg: '23px', xl: '1153px', xxl: '1203px', xxxl: '1553px' }}
                bottom={{ base: '110px', lg: '252px', xxxl: '370px' }}
                width={{ base: '58px', lg: '138px', xxxl: '210px' }}
                opacity={toggle2 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', smd: '420px', lg: '-100px', xl: '950px', xxl: '930px', xxxl: '1150px' }}
                bottom={{ base: '-2px', lg: '-20px', xxxl: '-20px' }}
                width={{ base: '200px', lg: '540px', xxl: '540px', xxxl: '640px' }}
            />

            <Image
                src="/assets/effects/fog.png"
                position="absolute"
                left={{ base: '164px', smd: '504px', lg: '250px', xl: '1030px', xxl: '1050px', xxxl: '1300px' }}
                bottom={{ base: '100px', lg: '220px', xxxl: '380px' }}
                width={{ base: '140px', lg: '400px', xxxl: '640px' }}
                opacity={toggle3 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />
            <FooterComponent toggler />
            <NoticeBanner />
        </Box>
    );
}

export default AssetDetails;
