import React from 'react';
import { Box } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { SceneBridge } from '../components/scene/Scene.bridge';
import { SceneLambo } from '../components/scene/Scene.lambo';
import { SceneMissile1 } from '../components/scene/Scene.missile.1';

export function SceneComponent() {
    return(
        <Box
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
        >
            <MetadataComponent/>
            <SceneBridge/>
            <SceneLambo/>
            <SceneMissile1/>
        </Box>
    )
}

export default SceneComponent;