import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useRouter } from "next/router"
//
import { MetadataComponent } from '../../components/shared/Metadata';
import { AboutSceneLeft } from '../../components/index/About.scene.left';
import { FooterComponent } from '../../components/shared/Footer';
import { AssetContainer } from '../../components/shared/AssetContainer';
import { Building } from "../../components/shared/Building";

export function AssetDetails() {
    const router = useRouter()
    const {
        query: { id },
    } = router
    const item = +id;
    const goldVids = [
        {
            name: "Piggy Banksy 1oz",
            path: `/assets/nfts/PiggyBanksy619262.mp4`,
        },
        {
            name: "Space Cowboy 50g",
            path: `/assets/nfts/Space_Cowboy_8642.mp4`,
        },
        {
            name: "Vector 777 100g",
            path: `/assets/nfts/Vector150768.mp4`,
        },
    ];
    return (
        <Box className="scene" d="flex" flexDirection="row" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch" backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover">
            <MetadataComponent />
            <AboutSceneLeft className="scene__left" minW="33%" />
            <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexDirection="column" alignItems="center">
                <AssetContainer height="5%" width="100%" className="spacer"></AssetContainer>
                <AssetContainer width="100%" height="33%" className="nft-video">
                    <ReactPlayer url={goldVids[item].path} playing={true} volume={0} muted={true} loop={true} controls={true} width="100%" height="100%" />
                </AssetContainer>
                <AssetContainer height="60%" width="100%" className="spacer">
                    <Box width="100%" height="70%" margin="0" img="" imgAlt="" backgroundColor="rgba(255,255,255,0.6)"
                        backdropFilter="blur(7px)"
                        borderRadius=" 0 0 6px 6px"
                        overflow="hidden" z={0}>
                        <Box p="25px">
                            <Heading as="h3" size="sm" color="accent.primary">{goldVids[item].name}</Heading>
                            <p>Sed in libero ut nibh placerat accumsan. Phasellus magna. In hac habitasse platea dictumst. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Quisque ut nisi.</p>

                            <p>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi vestibulum volutpat enim. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam feugiat lorem non metus. Donec id justo.</p>

                            <p>Nam eget dui. Morbi ac felis. Aliquam erat volutpat. Fusce a quam. Phasellus blandit leo ut odio.</p>
                        </Box>
                    </Box>
                </AssetContainer>
            </Box>
            <Box className="scene__right" minW="33%" />
            <Box pos="absolute" width="100vw" height="20vh" backgroundImage="url(/assets/buildings/bridge.png)" backgroundRepeat="repeat-x" backgroundSize="cover" maxH="8vh" bottom="0" left="0" zIndex="1000"></Box>
        </Box>
    )
}

export default AssetDetails;
