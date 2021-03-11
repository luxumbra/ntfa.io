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
            <HeaderComponent className="scene__left" minW="33%" />
            <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                <AssetContainer height="33%" width="100%" className="spacer"></AssetContainer>
                <AssetContainer width="100%" height="33%" className="nft-video">
                    <ReactPlayer url="/preview/seed.card.gold.mp4" playing={true} loop={true} width="100%" height="100%"/>
                </AssetContainer>
                <AssetContainer height="33%" width="100%" className="spacer">
                    <Box className="spacer" height="10%"></Box>
                    <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="" imgAlt="" color="teal.300" z={300}>
                        <Link href="/about" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>About</Link>
                    </Building>
                </AssetContainer>
            </Box>
            <FooterComponent className="scene__right" minW="33%"/>
        </Box>
    )
}

export default IndexComponent;
