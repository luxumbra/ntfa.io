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
import { ShowcaseFeaturedComponent } from '../components/showcase/Showcase.featured';
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

                    <AssetContainer width="100%" height="33%" d="flex" className="store">
                        <ShowcaseFeaturedComponent url="https://cdn.discordapp.com/attachments/778053490098307183/822255346340855838/test_2.mov" title="Meta SEED Card" contract="0x06012c8cf97bead5deae237070f9587f8e7a266d" tokenId={515874}/>
                    </AssetContainer>

                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="30.5%"></Box>
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 10%"  img="" imgAlt="" z={300}>
                            <Link href="#section2" maxW="140px" maxH="140px" sx={{
                                color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, textAlign: `center`,
                                backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `6.5vw`, backgroundPosition: `90%`, transform: `scaleX(1)`, opacity: 0.6,
                                "&:hover": { color: `transparent !important`, opacity: 0.3, }
                            }}>Bitcoin & Gold</Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <StoreSceneRight className="scene__right" minW="10%"/>
            </Box>

            <SceneCore/>

            <Box id="section3" className="ntfa" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh"  pos="relative" background="url(/assets/scenes/industrial.jpg) 50% no-repeat" backgroundSize="100% 100%">
                <AboutSceneLeft className="scene__left" minW="33%" />
                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexDirection="column" alignItems="center">
                    <AssetContainer height="60%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="100%" height="70%" margin="0" img="" imgAlt="" z={700} maxH="70%" overflowY="auto">
                            <Box p="2%" sx={{
                                backgroundColor: `rgba(0,0,0,0.6)`,
                                backdropFilter: `blur(3px)`,
                                boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                                color: `white`,
                                borderRadius: `1`,
                                overflow: `hidden`,
                            }}>
                                <Box
                                    p="5%"
                                    fontSize="0.8vw">
                                <Heading as="h2" fontSize={{ base: `2.5vw`, xl: `1.2vw` }}>Never Touch FIAT Again</Heading>
                                    <ol>
                                        <li>Bitcoin is based on cryptographically proven randomness and scarcity over time.</li>
                                        <li>Gold is a rare earth metal used in countless tools, jewelry and as a store of wealth.</li>
                                        <li>NFTs are ownable digital records used to store information.</li>
                                    </ol>

                                    <Heading as="h3" fontSize={{ base: `2vw`, xl: `1vw` }}>What is your Dollar?</Heading>
                                    <p>NFTs can prove ownership of pretty much anything, like for example gold.</p>

                                    <p>Fiat becomes dirty money when the printers go BRRRRRRRRRRRRRRRR!!!</p>
                                    <p>Where did all that money come from?!</p>

                                    <p>The best way to keep your hands clean is to...</p>

                                    <Heading as="h3" fontSize={{ base: `2vw`, xl: `1vw` }}>Never Touch FIAT Again</Heading>
                                    <p>Gold and Art are a perfect match. Be rich and look good doing it! While the world crumbles, you can be a golden space cowboy!</p>
                                </Box>
                            </Box>
                        </Building>
                    </AssetContainer>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="60%" height="95%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={300} position="absolute" bottom={5} left={-16} damageY={41} damageX={37} damageH={30} damageW={100}>
                            <Link href="#section2" sx={{ color: `white`, fontSize: `1vw`, fontWeight: `bold`,position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, opacity: 0.6,
                                "&:hover": { color: `transparent !important`, opacity: 0.3, }}}>Bitcoin & Gold</Link>
                        </Building>
                    </AssetContainer>
                    <Box pos="absolute" width="100vw" height="20vh" backgroundImage="url(/assets/buildings/bridge.png)" backgroundRepeat="repeat-x" backgroundSize="cover" maxH="8vh" bottom="0" left="0" zIndex="1000"></Box>
                </Box>

                <AboutSceneRight className="scene__right" minW="33%"/>

            </Box>

            {/* <FooterComponent className="scene__right" minW="33%"/> */}
        </Box>
    )
}

export default IndexComponent;
