import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';

export const SceneBridge: FC = () => {
    return (
        <Image
            src="/assets/buildings/bridge.png"
            position="absolute"
            left="0"
            bottom={["0"]}
            minW="100%"
            zIndex="15"
            height={{ base: '40px', lg: '180px' }}
        />
    )
}
