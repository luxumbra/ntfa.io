import React from 'react';
import { Box } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { HeaderComponent } from '../components/shared/Header';
import { FooterComponent } from '../components/shared/Footer';
import { IndexStoreComponent } from '../components/index/Index.store';

export function IndexComponent() {
    return(
        <Box>
            <MetadataComponent/>
            <HeaderComponent/>
            <IndexStoreComponent/>
            <FooterComponent/>
        </Box>
    )
}

export default IndexComponent;