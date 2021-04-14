import React from 'react';

import { Box, Link, Heading } from '@chakra-ui/react';
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

                <Box className="scene__center" as="main" flex="0 0 80%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer width="100%" height="33%" className="logo">
                        <Box className="spacer" height="80%"/>
                    </AssetContainer>

                    <AssetContainer width="75%" height="33%" d="flex" className="store">
                        <ShowcaseGridComponent collection="100-bees-hexel-collection" />
                    </AssetContainer>

                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="30.5%"></Box>
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 10%"  img="" imgAlt="" z={300}>
                            <Link href="#section2" maxW="160px" maxH="160px" sx={{
                                color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: 0, top: `0`, textAlign: `center`,
                                backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `70%`, backgroundPosition: `90%`, transform: `scaleX(1)`, opacity: 0.6, "& > span": {visibility: `hidden`},
                                "&:hover": { color: `transparent !important`, opacity: 0.3, }
                            }}><span>Bitcoin & Gold</span></Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <StoreSceneRight className="scene__right" minW="10%"/>
            </Box>

            <SceneCore/>

            <Box id="section3" className="ntfa" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh"  pos="relative" background="url(/assets/scenes/industrial.jpg) 50% no-repeat" backgroundSize="100% 100%">
                <AboutSceneLeft className="scene__left" minW="33%" />
                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexDirection="column" alignItems="center">
                    <AssetContainer height="83%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="120%" height="70%" margin="0 0 0 -17%" img="" imgAlt="" z={700} maxH="90%" overflowY="auto">
                            <Box p="2%" sx={{
                                backgroundColor: `rgba(0,0,0,0.6)`,
                                backdropFilter: `blur(3px)`,
                                boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                                color: `white`,
                                borderRadius: `1`,
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

                    <AssetContainer height="13%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="60%" height="95%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={300} position="absolute" bottom={5} left={-16} damageY={41} damageX={37} damageH={30} damageW={100}/>
                    </AssetContainer>
                    <Box pos="absolute" width="100vw" height="20vh" backgroundImage="url(/assets/buildings/bridge.png)" backgroundRepeat="repeat-x" backgroundSize="cover" maxH="8vh" bottom="0" left="0" zIndex="1000"></Box>
                </Box>

                <AboutSceneRight className="scene__right" minW="33%"/>
            </Box>
        </Box>
    )
}

export default IndexComponent;
