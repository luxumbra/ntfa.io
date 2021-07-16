import React, { useState, useEffect } from "react";
import { Box, Heading, Link, Image, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { css, jsx } from "@emotion/react";
import { OpenSeaPort, Network } from "opensea-js";
import axios from "axios";
import NextLink from 'next/link';
//
import { MetadataComponent } from "../../components/shared/Metadata";
import { SceneBridge } from '../../components/scene/Scene.bridge';
import { SceneBuilding } from '../../components/scene/Scene.building';
import { FooterComponent } from "../../components/shared/Footer";
import { rootCertificates } from "node:tls";

export let getAsset: any;

export function AssetDetails() {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [loading, setLoading] = useState(true);
    const [asset, setAsset] = useState([]);
    const router = useRouter();

    console.log(router);

    const {
        query: { id, token },
    } = router;

    useEffect(() => {
        getAsset = axios
            .get(
                `https://rinkeby-api.opensea.io/api/v1/asset/${id}/${token}`
            )
            .then((response) => {
                console.log('response: ', response);
                // debugger;
                // setGoldAssets(response.data.assets.slice(0, 2));
                // setAssets(response.data.assets.slice(3));
                setAsset(response.data);
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [id, token]);


    return (
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
            id="section2"
        >
            <MetadataComponent title={asset && asset.name} description={asset && asset.name} socialImage={`/assets/${id}-banner.png`} />
            <Box
                className="content"
                position="relative"
                flex={{ base: "0 0 90%", smd: "0 0 98%", lg: "0 0 33%" }}
                width={{ base: "90%", smd: "98%", lg: "33%" }}
                d="flex"
                flexDirection={{ base: "column", smd: "row", lg: "column" }}
                alignItems={{ base: "flex-start", smd: "center", lg: "flex-start" }}
                mt={{ base: 7, lg: "10px", xl: "10px", xxl: "50px" }}
                ml={{ base: "5%", smd: "auto", lg: "auto" }}
                mr={{ base: "5%", smd: "auto", lg: "auto" }}
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
                {loading ? (<p>Loading</p>) : (
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
                            <ReactPlayer
                                url={asset?.animation_url}
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
                            />
                        </Box>

                        <Box
                            width={{ base: "100%", smd: "80%", lg: "100%" }}
                            margin="0"
                            // backgroundColor="rgba(255,255,255,0.6)"
                            // backdropFilter="blur(7px)"
                            z={0}
                        >
                            <Box p={{ base: "15px", smd: "10px", lg: "25px" }}>
                                <Heading as="h3" size={"sm"} color="accent.primary" mb="2">
                                    {asset && asset.name}
                                </Heading>
                                <Box d="flex" flexFlow="column wrap" mb="4" sx={{
                                    "& > span": {
                                        fontSize: { base: "10px", lg: "12px" },
                                        mb: 0,
                                        fontWeight: "100"
                                    }
                                }}>
                                    {/* <span>{asset && goldVids[+id].NFT}</span>
                            <span>{asset && goldVids[+id].vault}</span> */}
                                </Box>
                                <Box fontSize={{ base: "15px", lg: "17px" }}>
                                    <p>{asset && asset.summary}</p>
                                </Box>
                                <Box fontSize={{ base: "12px", lg: "14px" }}>
                                    {asset?.description.replace('<br />', '\n')}
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box position="absolute" width="100%" height={{ base: "10%", xl: "10%" }} maxW={{ base: "25px", lg: "40px", xl: "40px", xxl: "45px", xxxl: "55px" }} bottom={{ base: "220px", smd: "245px", lg: "63%", xxl: "500px", xxxl: "750px" }} left={{ base: "50%", smd: "520px", lg: "165px", xl: "1100px", xxl: "1150px", xxxl: "1450px" }} zIndex={{ base: 1000, smd: 0, lg: 0 }}>
                <NextLink href="/#section1" prefetch passHref>
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
            <FooterComponent />
        </Box>
    );
}

export default AssetDetails;
