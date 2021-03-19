import React from 'react';
import { Box } from '@chakra-ui/react';
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
            <HeaderComponent className="scene__left" minW="33%" />
            <Box className="scene__center" as="main" flex="0 0 33%" d="flex" flexFlow="column wrap" alignItems="center">
                <AssetContainer width="100%" height="25%" className="logo">
                    <Box className="spacer" height="80%">
                    </Box>
                    <Building buildingName="sign2" margin="0 0 0 18%" img="" imgAlt="" height="30%" width="35%" color="yellow.400" z={0}>
                        {/* <Link href="/store" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Another link</Link> */}
                    </Building>
                </AssetContainer>
                <AssetContainer width="100%" height="65%" className="store">
                    <Building buildingName="opensea" margin="0" img="" imgAlt="" height="100%" width="100%" color="yellow.700" z={200}>
                        <IndexStoreComponent/>
                    </Building>
                </AssetContainer>
            </Box>
            <FooterComponent className="scene__right" minW="33%" />
        </Box>
    )
}

export default IndexComponent;
