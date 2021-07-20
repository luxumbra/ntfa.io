import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { SceneCore } from '../components/scene/Scene.core';
import { StoreCore } from '../components/store/Store.core';
import { AboutCore } from '../components/about/About.core';
import { NoticeBanner } from '../components/shared/NoticeBanner';

export function IndexComponent() {
    return(
        <Box className="scene" d="flex" flexDirection="column" minHeight="100vh" width="100vw" maxW="100%" alignContent="stretch" overflowX="hidden">
            <MetadataComponent />

            <StoreCore />

            <AboutCore />

            <SceneCore />
            <NoticeBanner />
        </Box>
    )
}

export default IndexComponent;
