import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
//
import { MetadataComponent } from '../components/shared/Metadata';
import { HeaderComponent } from '../components/shared/Header';
import { FooterComponent } from '../components/shared/Footer';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";

export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="row" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch">
            <MetadataComponent/>
            <HeaderComponent className="scene__left" sx={{ minW: `33%`}} />
            <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexDirection="column" alignItems="center">
                <AssetContainer height="5%" width="100%" className="spacer" sx={{}}></AssetContainer>
                <AssetContainer width="100%" height="33%" className="nft-video">
                    <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                </AssetContainer>
                <AssetContainer height="60%" width="100%" className="spacer" sx={{}}>
                    <Box className="spacer" height="10%"></Box>
                    <Building buildingName="sign1" width="100%" height="70%" margin="0" img="" imgAlt="" sx={{
                        backgroundColor: `blue.300`, zIndex: 0, "&:hover": {
                        backgroundColor: `pink.600`, cursor: `pointer`
                    } }}>
                        <>
                        <h3>About NTFA</h3>
                        <p>Sed in libero ut nibh placerat accumsan. Phasellus magna. In hac habitasse platea dictumst. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Quisque ut nisi.</p>

                        <p>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi vestibulum volutpat enim. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam feugiat lorem non metus. Donec id justo.</p>

                        <p>Nam eget dui. Morbi ac felis. Aliquam erat volutpat. Fusce a quam. Phasellus blandit leo ut odio.</p>
                            </>
                    </Building>
                </AssetContainer>
            </Box>
            <FooterComponent className="scene__right" sx={{ minW: `33%`}}/>
        </Box>
    )
}

export default IndexComponent;
