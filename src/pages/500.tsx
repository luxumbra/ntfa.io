import React, { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { Box, Heading, Link, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { css, jsx } from "@emotion/react";
//
import { MetadataComponent } from "../components/shared/Metadata";
import { SceneBridge } from '../components/scene/Scene.bridge';
import { SceneBuilding } from '../components/scene/Scene.building';
import { FooterComponent } from "../components/shared/Footer";
import { Loading } from '../components/shared/Loading';
import { NoticeBanner } from '../components/shared/NoticeBanner';

export function Custom404() {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    // const router = useRouter();
    // const {
    //     query: { tokenAddress },
    // } = router;

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
            <MetadataComponent title={`Error 404`} description={`Error`} />
            <Box
                className="content"
                position="relative"
                flex={{ base: "0 0 90%", smd: "0 0 98%", lg: "0 0 45%", xxxl: "0 0 33%" }}
                width={{ base: "98%", smd: "98%", lg: "45%", xxxl: "33%" }}
                maxH={{ base: "83vh", lg: "83vh", xxxl: "75vh" }}
                height="100%"
                d="flex"
                flexDirection={{ base: "column", smd: "row", lg: "column" }}
                alignItems={{ base: "flex-start", smd: "center", lg: "center" }}
                justifyContent={{ base: "center" }}
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

                <Box p={{ base: "15px", smd: "10px", lg: "50px 25px 25px" }} d="flex" flexFlow="column wrap">
                    <Box className="back-link" position="absolute" top={{ base: 4 }} right={{ base: 4 }} zIndex="200">
                        <NextLink href={`/#section1`} passHref>
                            <Link variant="cta"><ArrowBackIcon mr={0} /> Back to burning FIAT</Link>
                        </NextLink>
                    </Box>
                    <Box height="100%" maxW="66%" mx="auto">
                        <Heading as="h3" size={"sm"} color="accent.primary" mb="1">
                            ERROR 404. 😞
                        </Heading>
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
                        }}>
                            <h3>Something's not right!.</h3>
                            <p>The server threw an error on this page. 🤷‍♂️ Click the 🐷... or the home button 👇 </p>
                            <Box>
                                <NextLink href={`/#section1`} passHref>
                                    <Link variant="cta">HOME</Link>
                                </NextLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>

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
        </Box >
    )
}

export default Custom404;
