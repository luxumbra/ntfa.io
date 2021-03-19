import React from 'react';
import { Box } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { SceneCore } from '../components/scene/Scene.core';


export function SceneComponent() {
    return(
        <Box>
            <MetadataComponent/>
            <SceneCore/>
        </Box>
    )
}

export default SceneComponent;