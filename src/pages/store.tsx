import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { HeaderComponent } from '../components/shared/Header';
import { FooterComponent } from '../components/shared/Footer';
import { IndexStoreComponent } from '../components/index/Index.store';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";


export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="row" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch">
            <MetadataComponent/>
            <HeaderComponent />
            <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                <AssetContainer width="100%" height="25%" className="logo">
                    <Box className="spacer" height="80%">
                    </Box>
                    <Building buildingName="store" margin="0 0 0 18%" img="" imgAlt="" height="30%" width="35%" sx={{ backgroundColor: `yellow.700` }}>
                        {/* <Link href="/store" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Another link</Link> */}
                    </Building>
                </AssetContainer>
                <AssetContainer width="100%" height="65%" className="store">
                    <Building buildingName="store" margin="0" img="" imgAlt="" height="100%" width="100%" sx={{ backgroundColor: `yellow.700` }}>
                        <IndexStoreComponent/>
                    </Building>
                </AssetContainer>
            </Box>
            <FooterComponent/>
        </Box>
    )
}

export default IndexComponent;
