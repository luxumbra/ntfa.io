import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';

export interface SceneBuildingInterface {
    src?: string;
}

export const SceneBuilding: FC<SceneBuildingInterface> = ({ src }) => {
    return (
        <Image
            src={src}
            position="absolute"
            left="0"
            bottom="0"
            minW="100%"
            height={{ base: '40px', lg: '180px' }}
        />
    )
}