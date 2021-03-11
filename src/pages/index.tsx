import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
//

import { MetadataComponent } from '../components/shared/Metadata';
// import { HeaderComponent } from '../components/shared/Header';
// import { FooterComponent } from '../components/shared/Footer';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";
import { IndexSceneLeft } from '../components/index/Index.scene.left';
import { IndexSceneRight } from '../components/index/Index.scene.right';
// import { IndexStoreComponent } from '../components/index/Index.store';



export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch">
            <MetadataComponent />
            <Box id="section1" className="industrial" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh">
                <IndexSceneLeft className="scene__left" minW="33%" />

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
                            <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                        </Box>
                        <Box width="49%" className="nft-video" mb={5}>
                            <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                         </Box>
                        <Box width="49%" className="nft-video" mb={5}>
                            <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                        </Box>
                    </Box>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="" imgAlt="" color="teal.300" z={300}>
                            <Link href="#section2" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>Bitcoin & Gold</Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <IndexSceneRight className="scene__right" minW="33%"/>
            </Box>

            <Box id="section2" className="cityScape" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh">
                <IndexSceneLeft className="scene__left" minW="33%" />
                <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                    <AssetContainer height="33%" width="100%" className="spacer"></AssetContainer>
                    <AssetContainer width="100%" height="33%" className="nft-video">
                        <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                    </AssetContainer>
                    <AssetContainer height="33%" width="100%" className="spacer">
                        <Box className="spacer" height="10%"></Box>
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="" imgAlt="" color="teal.300" z={300}>
                            <Link href="#section3" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>About</Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <IndexSceneRight className="scene__right" minW="33%"/>
            </Box>

            <Box id="section3" className="ntfa" as="section" d="flex" flexDir="row" alignContent="stretch" minH="100vh">
                <IndexSceneLeft className="scene__left" minW="33%" />
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
                        <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="" imgAlt="" color="teal.300" z={300}>
                            <Link href="#section2" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>Bitcoin & Gold</Link>
                        </Building>
                    </AssetContainer>
                </Box>
                <IndexSceneRight className="scene__right" minW="33%"/>

            </Box>

            {/* <FooterComponent className="scene__right" minW="33%"/> */}
        </Box>
    )
}

export default IndexComponent;
