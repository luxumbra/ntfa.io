import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';

export interface SceneCoreInterface {}

export const SceneCoreComponent: FC<SceneCoreInterface> = () => {

    return (
        <Box position="relative" minHeight="100vh" backgroundImage="url(/assets/bg.1.png);" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="50% 70%">
            <Image
                position="absolute"
                bottom="8%"
                src="/assets/lambo.png"
                width="256px"
            />
        </Box>
    )
}