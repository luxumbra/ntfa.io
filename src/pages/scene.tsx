import React from 'react';
import { Box } from '@chakra-ui/react';
import { MetadataComponent } from '../components/shared/Metadata';
import { SceneBridge } from '../components/scene/Scene.bridge';
import { SceneLambo } from '../components/scene/Scene.lambo';
import { SceneMissile } from '../components/scene/Scene.missile';
import { SceneBuilding } from '../components/scene/Scene.building';

export const missiles = [
    {
        left: { base: '-40px', lg: '80px' },
        translation: `translate(150vw, -50vh)`,
        delay: '0s',
    },
    {
        left: { base: '0px', lg: '180px' },
        translation: `translate(150vw, -30vh)`,
        delay: '0.15s',
    },
    {
        left: { base: '0px', lg: '280px' },
        translation: `translate(150vw, -40vh)`,
        delay: '0.3s',
    },
    {
        left: { base: '0px', lg: '380px' },
        translation: `translate(150vw, -40vh)`,
        delay: '0.45s',
    },
];

export function SceneComponent() {
    return(
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
        >
            <MetadataComponent/>
            <SceneBridge/>
            <SceneLambo/>

            {missiles.map(missile => {
                return(<SceneMissile left={missile.left} translation={missile.translation} delay={missile.delay} />)
            })}

            <SceneBuilding
                src="/assets/buildings/building-4.png"
                left={{ base: '180px', lg: '1150px' }}
                bottom={{ base: '30px', lg: '155px' }}
                width={{ base: '50px', lg: '170px' }}
            />
            <SceneBuilding
                src="/assets/buildings/building-1.png"
                left={{ base: '130px', lg: '1000px' }}
                bottom={{ base: '30px', lg: '155px' }}
                width={{ base: '50px', lg: '180px' }}
            />
            <SceneBuilding
                src="/assets/buildings/building-3.png"
                left={{ base: '230px', lg: '1300px' }}
                bottom={{ base: '30px', lg: '155px' }}
                width={{ base: '50px', lg: '180px' }}
            />
            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '900px' }}
                bottom={{ base: '30px', lg: '155px' }}
                width={{ base: '200px', lg: '640px' }}
            />
        </Box>
    )
}

export default SceneComponent;