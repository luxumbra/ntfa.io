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
import { StoreCore } from '../components/store/Store.core';

export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch" overflowX="hidden">
            <MetadataComponent />

            <StoreCore />

            <SceneCore/>

            <Box id="section3" className="ntfa" d="flex" flexDir="row" alignContent="stretch"
                justifyContent={["center", "unset"]} minH="100vh" pos="relative" background="url(/assets/scenes/bg-industrial.png) 50% no-repeat" backgroundSize={["cover", "cover"]} overflow="hidden">
                <Box className="scene__left" minW={["0", "25%"]} w={["5%", "auto"]} overflowY="hidden">
                    <Box position="absolute" width="100%" height={["10%", "10%"]} maxW={["25px", "75px"]} bottom={["21%","43%"]} left={["62%", "23%"]} img="" imgAlt="" z={100}>
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
                <Box className="scene__center" flex={["0 0 90%", "0 0 33%"]} ml={["auto", "auto"]} d="flex" flexDirection="column" alignItems="center">
                    <AssetContainer height="auto" width={["100%", "120%"]} className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="100%" height="auto" margin="0" img="" imgAlt="" z={700} maxH="90%">
                            <Box p="2%" sx={{
                                backgroundColor: `rgba(0,0,0,0.6)`,
                                backdropFilter: `blur(3px)`,
                                boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                                color: `white`,
                                borderRadius: `6px`,
                                overflow: `hidden`,
                                height: `100%`
                            }}>
                                <Box p="5%" sx={{ "p:nth-of-type(even)": {fontSize: { base: `1.6vw`, xl: `1vw` }}, "p:nth-of-type(odd)": {mb: `0`}}}>
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
                </Box>
                    <Box position="absolute" bottom="0" left="0" background={["url(/assets/buildings/building-industrial.png) 0 100% no-repeat", "url(/assets/buildings/building-industrial.png) 0 110px no-repeat"]} backgroundSize={["contain", "contain"]} width="100%" minW="100vw" minH="100vh" zIndex="200" pointerEvents="none"></Box>

                <Box position="relative" className="scene__right" minW={["5%", "33%"]} zIndex="1000">
                    <Box pos="absolute" bottom={["44%", "70%"]} right={["0", "77%"]} height={["200px", "200px"]} width={["200px", "150px"]} zIndex={2000}>
                        <Link href="#section2" maxW="200px" maxH="200px" sx={{
                            color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: 0, top: `0`, textAlign: `center`,
                            backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: [`50px`,`6.5vw`], backgroundPosition: `90%`, transform: `scaleX(1)`, opacity: 0.6, "& > span": {visibility: `hidden`},
                            "&:hover": { color: `transparent !important`, opacity: 0.3, }
                        }}><span>Bitcoin & Gold</span></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default IndexComponent;
