import React from 'react';
import { Box } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { SceneCore } from '../components/scene/Scene.core';
import { StoreCore } from '../components/store/Store.core';
import { AboutCore } from '../components/about/About.core';

export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch" overflowX="hidden">
            <MetadataComponent />

            <StoreCore />

            <SceneCore/>

            <AboutCore />
        </Box>
    )
}

export default IndexComponent;
