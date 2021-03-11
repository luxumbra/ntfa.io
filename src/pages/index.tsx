import React from 'react';
import { Box, Link, chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue,
    HTMLMotionProps
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//

import { MetadataComponent } from '../components/shared/Metadata';
// import { HeaderComponent } from '../components/shared/Header';
// import { FooterComponent } from '../components/shared/Footer';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";
import { IndexSceneLeft } from '../components/index/Index.scene.left';
import { IndexSceneRight } from '../components/index/Index.scene.right';
import { StoreSceneLeft } from '../components/index/Store.scene.left';
import { StoreSceneRight } from '../components/index/Store.scene.right';
import { AboutSceneLeft } from '../components/index/About.scene.left';
import { AboutSceneRight } from '../components/index/About.scene.right';
import { MotionBox } from '../components/shared/MotionBox';



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
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch">
            <MetadataComponent />
            <Box id="section1" className="industrial" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh" background="url(/assets/scenes/dollar-bill-yo.jpg) 50% no-repeat" backgroundSize="100% 100%">

                <StoreSceneLeft className="scene__left" minW="33%" />

                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer width="100%" height="25%" className="logo">
                        <Box className="spacer" height="80%">
                        </Box>
                        <Building buildingName="sign2" margin="0 0 0 18%" img="" imgAlt="" height="30%" width="35%" color="yellow.400" z={0}>
                            {/* <Link href="/store" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Another link</Link> */}
                        </Building>
                    </AssetContainer>
                    <Box width="100%" height="65%" d="flex" flexFlow="row wrap" alignContent="center" justifyContent="space-between" className="store">
                        <Box width="49%" className="nft-video" mb={5}>
                            <MotionBox
                                className="box"
                                style={{ y: y2, x: 0 }}
                            >
                                <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                            </MotionBox>
                        </Box>
                        <Box width="49%" className="nft-video" mb={5}>
                            <MotionBox
                                className="box"
                                style={{ y: y2, x: 0 }}
                            >
                                <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                            </MotionBox>
                         </Box>
                        <Box width="49%" className="nft-video" mb={5}>
                             <MotionBox
                                className="box"
                                style={{ y: y2, x: 0 }}
                            >
                                <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                            </MotionBox>
                        </Box>
                    </Box>
                    <AssetContainer height="33%" width="100%" className="spacer">

                        <Box className="spacer" height="10%"></Box>

                        <Building buildingName="sign1" width="20%" height="40%" margin="15% 0 0 65%"  img="/assets/signs/bitcoin-logo.jpg" imgAlt="/assets/signs/bitcoin-logo.jpg" z={300}>
                            <Link href="#section2" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>Bitcoin & Gold</Link>
                        </Building>

                    </AssetContainer>
                </Box>
                <StoreSceneRight className="scene__right" minW="33%"/>
            </Box>

            <Box id="section2" className="cityScape" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh" background="url(/assets/scenes/cityscape.jpg) 50% no-repeat" backgroundSize="100% 100%">

                <IndexSceneLeft className="scene__left" minW="33%" />

                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer height="33%" width="100%" className="spacer"></AssetContainer>
                    <AssetContainer width="100%" height="33%" className="nft-video">
                        <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                    </AssetContainer>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="70%" height="40%" margin="22% 0 0 50%" img="/assets/buildings/building-2.png" imgAlt="/assets/buildings/building-2.png" z={300}>
                            <Link href="#section3" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>About</Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <IndexSceneRight className="scene__right" minW="33%"/>
            </Box>

            <Box id="section3" className="ntfa" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh" background="url(/assets/scenes/industrial.jpg) 50% no-repeat" backgroundSize="100% 100%">
                <AboutSceneLeft className="scene__left" minW="33%" />
                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexDirection="column" alignItems="center">
                    <AssetContainer height="5%" width="100%" className="spacer"></AssetContainer>
                    <AssetContainer width="100%" height="33%" className="nft-video">
                        <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                    </AssetContainer>
                    <AssetContainer height="60%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="100%" height="70%" margin="0" img="" imgAlt="" color="blue.300"  z={0}>
                            <>
                            <h3>About NTFA</h3>
                            <p>Sed in libero ut nibh placerat accumsan. Phasellus magna. In hac habitasse platea dictumst. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Quisque ut nisi.</p>

                            <p>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi vestibulum volutpat enim. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam feugiat lorem non metus. Donec id justo.</p>

                            <p>Nam eget dui. Morbi ac felis. Aliquam erat volutpat. Fusce a quam. Phasellus blandit leo ut odio.</p>
                                </>
                        </Building>
                    </AssetContainer>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="/assets/buildings/building-2.png" imgAlt="/assets/buildings/building-2.png" z={300}>
                            <Link href="#section2" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>Bitcoin & Gold</Link>
                        </Building>
                    </AssetContainer>
                </Box>

                <AboutSceneRight className="scene__right" minW="33%"/>

            </Box>

            {/* <FooterComponent className="scene__right" minW="33%"/> */}
        </Box>
    )
}

export default IndexComponent;
