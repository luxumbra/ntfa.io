import React, { useState } from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { SceneBridge } from './Scene.bridge';
import { SceneLambo } from './Scene.lambo';
import { SceneMissile } from './Scene.missile';
import { SceneBuilding } from './Scene.building';
import { SceneCopy } from './Scene.copy';

export const missiles = [
    {
        left: { base: '-60px', lg: '80px' },
        translation: `translate(150vw, -50vh)`,
        delay: '0s',
    },
    {
        left: { base: '-50px', lg: '180px' },
        translation: `translate(150vw, -30vh)`,
        delay: '0.15s',
    },
    {
        left: { base: '-40px', lg: '280px' },
        translation: `translate(150vw, -40vh)`,
        delay: '0.3s',
    },
    {
        left: { base: '-30px', lg: '380px' },
        translation: `translate(150vw, -40vh)`,
        delay: '0.45s',
    },
];

export function SceneCore() {
    const [playState, setPlayState] = useState('paused');
    const [canReplay, setCanReplay] = useState(true);
    const [timeoutState, setTimeoutState] = useState(setTimeout(() => {}, 0));

    return(
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
            id="section2"
        >
            <SceneCopy />

            <Button
                position="absolute"
                right={{ base: "calc(50% - 120px)", lg: "45px" }}
                bottom={{ base: "40%", lg: "45px" }}
                zIndex="21"
                size="lg"
                colorScheme="green"
                width={{ base: "240px", lg: "420px" }}
                height={{ base: "40px", lg: "90px" }}
                fontSize={{ base: "3.4vw", lg: "1.4vw" }}
                fontFamily="'Federal', serif"
                onClick={e => {
                    if (canReplay) {
                        clearTimeout(timeoutState);
                        setCanReplay(false);
                        setPlayState('running');
                        setTimeoutState(
                            setTimeout(() => {
                                setCanReplay(true);
                                setPlayState('paused');
                            }, 10 * 1000)
                        )
                    }
                }}
            >
                Click To Win
            </Button>

            <SceneBridge/>
            <SceneLambo playState={playState}/>

            {missiles.map(missile => {
                return(
                    <SceneMissile
                        left={missile.left}
                        translation={missile.translation}
                        delay={missile.delay}
                        playState={playState}
                    />
                )
            })}
            <SceneBuilding
                src="/assets/buildings/building-4.png"
                left={{ base: '180px', lg: '1150px' }}
                bottom={{ base: '0', lg: '0' }}
                width={{ base: '50px', lg: '170px' }}
            />
            <SceneBuilding
                src="/assets/buildings/building-1.png"
                left={{ base: '130px', lg: '1000px' }}
                bottom={{ base: '0', lg: '0' }}
                width={{ base: '50px', lg: '180px' }}
            />
            <SceneBuilding
                src="/assets/buildings/building-3.png"
                left={{ base: '230px', lg: '1300px' }}
                bottom={{ base: '0', lg: '0' }}
                width={{ base: '50px', lg: '180px' }}
            />
            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '900px' }}
                bottom={{ base: '-10px', lg: '-20px' }}
                width={{ base: '200px', lg: '640px' }}
            />
        </Box>
    )
}
