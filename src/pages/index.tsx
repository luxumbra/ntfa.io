import React from 'react';
import { css, jsx } from "@emotion/react";
import { Box, Link, Heading, Image } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";
import { IndexSceneLeft } from '../components/index/Index.scene.left';
import { IndexSceneRight } from '../components/index/Index.scene.right';
import { StoreSceneLeft } from '../components/index/Store.scene.left';
import { StoreSceneRight } from '../components/index/Store.scene.right';
import { AboutSceneLeft } from '../components/index/About.scene.left';
import { AboutSceneRight } from '../components/index/About.scene.right';
import { ShowcaseGridComponent } from '../components/showcase/Showcase.grid';
import { SceneCore } from '../components/scene/Scene.core';

export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch" overflowX="hidden">
            <MetadataComponent />
            <Box id="section1" className="industrial" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh" background="url(/assets/scenes/dollar-bill-yo.jpg) 50% no-repeat" backgroundSize="100% 100%">
                <StoreSceneLeft className="scene__left" minW="10%"/>

                <Box className="scene__center" flex="0 0 80%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer width="100%" height={["0%", "33%"]} className="logo">
                        <Box className="spacer" height="80%"/>
                    </AssetContainer>

                    <AssetContainer width="75%" height={["66%", "33%"]} d="flex" className="store">
                        <ShowcaseGridComponent collection="100-bees-hexel-collection" />
                    </AssetContainer>

                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="30.5%"></Box>
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 10%"  img="" imgAlt="" z={300}>
                            <Link href="#section2" maxW="160px" maxH="160px" sx={{
                                color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: ["-80px", 0], top: `0`, textAlign: `center`,
                                backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `70%`, backgroundPosition: `90%`, transform: `scaleX(1)`, opacity: 0.6, "& > span": {visibility: `hidden`},
                                "&:hover": { color: `transparent !important`, opacity: 0.3, }
                            }}><span>Bitcoin & Gold</span></Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <StoreSceneRight className="scene__right" minW="10%"/>
            </Box>

            <SceneCore/>

            <Box id="section3" className="ntfa" as="section" d="flex" flexDir="row" alignContent="stretch"
                justifyContent={["center", "unset"]} minH="100vh" pos="relative" background="url(/assets/scenes/bg-industrial.png) 50% no-repeat" backgroundSize={["cover", "cover"]} overflow="hidden">
                <Box className="scene__left" minW={["0", "25%"]} w={["5%", "auto"]} overflowY="hidden">
                    <Box position="absolute" width="100%" height={["10%", "10%"]} maxW={["25px", "100px"]} bottom={["21%","45%"]} left={["62%", "45%"]} img="" imgAlt="" z={100}>
                    <Link
                        href="/#section1"
                        display="inline-block"
                        position="relative"
                        // pt="26.25%"
                        height="0"
                        width="100%"
                            cursor="pointer"
                            // zIndex="3000"
                        css={css`
                            @keyframes logo-anim {
                                0% { transform: translateY(25px); }
                                50% { transform: translateY(35px); }
                                100% { transform: translateY(25px); }
                            }

                            animation: logo-anim 5s infinite;
                            /* animation-play-state: paused; */
                        `}
                    >
                        <Image src="/assets/pig-string.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
                </Box>
                </Box>
                <Box className="scene__center" flex={["0 0 90%", "0 0 33%"]} ml={["auto", "auto"]} d="flex" flexDirection="column" alignItems="center" pointerEvents="none">
                    <AssetContainer height="83%" width={["100%", "120%"]} className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="100%" height="70%" margin="0" img="" imgAlt="" z={700} maxH="90%" overflowY="auto">
                            <Box p="2%" sx={{
                                backgroundColor: `rgba(0,0,0,0.6)`,
                                backdropFilter: `blur(3px)`,
                                boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                                color: `white`,
                                borderRadius: `6px`,
                                overflow: `hidden`,
                                height: `100%`
                            }}>
                                <Box p="5%" sx={{ "p:nth-of-type(even)": {fontSize: { base: `1.6vw`, xl: `0.7vw` }}, "p:nth-of-type(odd)": {mb: `0`}}}>
                                    <Heading as="h2" fontSize={{ base: `2.5vw`, xl: `1.2vw` }}>Never Touch FIAT Again</Heading>
                                    <p>The desire for gold is not for gold. It is for the means of Freedom and Benefit</p>
                                    <p style={{ fontWeight: 'bold' }}>- Ralph Waldo Emerson</p>

                                    <p>With the exception only of the period of the gold standard, practically all governments of history have used their exclusive power to issue money to defraud and plunder the people.</p>
                                    <p style={{ fontWeight: 'bold' }}>- Friedrich August von Hayek </p>

                                    <p>He who bets on governments and government money bets against 6,000 years of recorded human history.</p>
                                    <p style={{ fontWeight: 'bold' }}>- Gary North </p>

                                    <p>Borrowers will default. Markets will collapse. Gold (the ultimate form of safe money) will skyrocket.</p>
                                    <p style={{ fontWeight: 'bold' }}>- Mike Belkin</p>

                                    <p>The history of paper money is an account of abuse, mismanagement, and financial disaster.</p>
                                    <p style={{ fontWeight: 'bold' }}>- Richard Ebeling</p>

                                    <p>Gold and Silver are money ... everything else is credit.</p>
                                    <p style={{ fontWeight: 'bold' }}>- J.P. Morgan</p>
                                </Box>
                            </Box>
                        </Building>
                    </AssetContainer>
                    <Box position="absolute" bottom="0" left="0" background={["url(/assets/buildings/building-industrial.png) 0 100% no-repeat", "url(/assets/buildings/building-industrial.png) 0 110px no-repeat"]} backgroundSize={["contain", "contain"]} width="100%" minW="100vw" minH="100vh" zIndex="200"></Box>
                </Box>

                <Box className="scene__right" minW={["5%", "33%"]}/>
            </Box>
        </Box>
    )
}

export default IndexComponent;
