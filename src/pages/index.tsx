import React from 'react';
import { css, jsx } from "@emotion/react";
import { Box, Link, Heading, Image } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { AssetContainer } from '../components/shared/AssetContainer';
import { Building } from "../components/shared/Building";
import { IndexSceneLeft } from '../components/index/Index.scene.left';
import { IndexSceneRight } from '../components/index/Index.scene.right';
import { StoreSceneLeft } from '../components/index/Store.scene.left';
import { StoreSceneRight } from '../components/index/Store.scene.right';
import { AboutSceneLeft } from '../components/about/About.scene.left';
import { AboutSceneRight } from '../components/index/About.scene.right';
import { ShowcaseGridComponent } from '../components/showcase/Showcase.grid';
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
