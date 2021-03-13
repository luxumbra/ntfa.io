import React from 'react';
import { Box, Link, Heading, chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue,
    HTMLMotionProps
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { MetadataComponent } from '../components/shared/Metadata';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";
import { IndexSceneLeft } from '../components/index/Index.scene.left';
import { IndexSceneRight } from '../components/index/Index.scene.right';
import { StoreSceneLeft } from '../components/index/Store.scene.left';
import { StoreSceneRight } from '../components/index/Store.scene.right';
import { AboutSceneLeft } from '../components/index/About.scene.left';
import { AboutSceneRight } from '../components/index/About.scene.right';
import { MotionBox } from '../components/shared/MotionBox';
import { ShowcaseFeaturedComponent } from '../components/showcase/Showcase.featured';



export function IndexComponent() {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const y3 = useTransform(scrollY, [0, 300], [0, 5]);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: false
    })
    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    }
    console.log(entry);

    return(
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch" overflowX="hidden">
            <MetadataComponent />
            <Box id="section1" className="industrial" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh" background="url(/assets/scenes/dollar-bill-yo.jpg) 50% no-repeat" backgroundSize="100% 100%">

                <StoreSceneLeft className="scene__left" minW="10%" />

                <Box className="scene__center" as="main" flex="0 0 80%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer width="100%" height="33%" className="logo">
                        <Box className="spacer" height="80%"/>
                    </AssetContainer>

                    <AssetContainer width="100%" height="33%" d="flex" className="store">
                        <ShowcaseFeaturedComponent url="/preview/seed.card.mp4" title="Meta SEED Card" contract="0x06012c8cf97bead5deae237070f9587f8e7a266d" tokenId={515874}/>
                    </AssetContainer>

                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="43.5%"></Box>
                        <Building buildingName="sign1" width="80%" height="40%" margin="0 0 0 10%"  img="" imgAlt="" z={300}>
                            <Link href="#section2" sx={{
                                color: `transparent`, textShadow: `10px 10px 0 rgba(0,0,0,0)`, fontSize: `3.4vw`, fontFamily: `Federal, serif`, textTransform: `uppercase`, position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, textAlign: `center`,
                                backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `6.5vw`, backgroundPosition: `90%`, transform: `scaleX(-1)`,
                                "&:hover": { color: `transparent !important`, textShadow: `10px 10px 0 rgba(0,0,0,0)` }
                            }}>Bitcoin & Gold</Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <StoreSceneRight className="scene__right" minW="10%"/>
            </Box>

            <Box id="section2" className="cityScape" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh" pos="relative" background="url(/assets/scenes/bg-scene.png) 50% no-repeat" backgroundSize="100% 100%">

                <IndexSceneLeft className="scene__left" minW="33%" />

                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer height="33%" width="100%" className="spacer"></AssetContainer>
                    <AssetContainer width="100%" height="33%" className="nft-video">
                        {/* <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/> */}
                    </AssetContainer>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="0%"></Box>
                        <Building buildingName="sign1" width="70%" height="60%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={300} position="absolute" top={-3} left={-16} damageY={71} damageX={37} damageH={30} damageW={100}>
                            <Link href="#section3" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>About</Link>
                        </Building>
                    </AssetContainer>
                    <Box pos="absolute" width="100vw" height="20vh" backgroundImage="url(/assets/buildings/bridge.png)" backgroundRepeat="repeat-x" backgroundSize="100% 100%" bottom="0" left="0" zIndex="1000"></Box>
                </Box>
                <IndexSceneRight className="scene__right" minW="33%"/>
            </Box>

            <Box id="section3" className="ntfa" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh"  pos="relative" background="url(/assets/scenes/industrial.jpg) 50% no-repeat" backgroundSize="100% 100%">
                <AboutSceneLeft className="scene__left" minW="33%" />
                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexDirection="column" alignItems="center">
                    <AssetContainer width="100%" height="5%" className="nft-video">
                        {/* <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/> */}
                    </AssetContainer>
                    <AssetContainer height="60%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="100%" height="70%" margin="0" img="" imgAlt="" z={700}>
                            <Box p="5%" margin="3%" sx={{
                                backgroundColor: `rgba(0,0,0,0.6)`,
                                backdropFilter: `blur(3px)`,
                                boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                                color: `white`,
                                borderRadius: `1`,
                                overflow: `hidden`,
                            }}>
                                <Box
                                    p="5%"
                                    sx={{

                                }}>
                                    <Heading as="h2">Never Touch FIAT Again</Heading>
                                    <ol>
                                        <li>Bitcoin is based on cryptographically proven randomness and scarcity over time.</li>
                                        <li>Gold is a rare earth metal used in countless tools, jewelry and as a store of wealth.</li>
                                        <li>NFTs are ownable digital records used to store information.</li>
                                    </ol>

                                    <Heading as="h3">What is your Dollar?</Heading>
                                     <p>NFTs can prove ownership of pretty much anything, like for example gold.</p>

                                    <p>Fiat becomes dirty money when the printers go BRRRRRRRRRRRRRRRR!!!</p>
                                    <p>Where did all that money come from?!</p>

                                    <p>The best way to keep your hands clean is to...</p>

                                    <Heading as="h3">Never Touch FIAT Again</Heading>
                                    <p>Gold and Art are a perfect match. Be rich and look good doing it! While the world crumbles, you can be a golden space cowboy!</p>
                                </Box>
                            </Box>
                        </Building>
                    </AssetContainer>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="60%" height="95%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={300} position="absolute" bottom={5} left={-16} damageY={41} damageX={37} damageH={30} damageW={100}>
                            <Link href="#section2" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>Bitcoin & Gold</Link>
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
