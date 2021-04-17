import React, { useState } from 'react';
import { Box, Button, Link, Image } from '@chakra-ui/react';
import { css, jsx } from "@emotion/react";
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
    const [timeoutState, setTimeoutState] = useState(setTimeout(() => {}));
    const [toggleTimeout, setToggleTimeout] = useState(setTimeout(() => {}));
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

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
                right={{ base: "67%", lg: "45px" }}
                bottom={{ base: "23%", lg: "calc(100% - 275px)" }}
                zIndex="2000"
                size="lg"
                colorScheme="green"
                width={{ base: "120px", lg: "225px" }}
                height={{ base: "120px", lg: "225px" }}
                fontSize={{ base: "3.4vw", lg: "1.2vw" }}
                fontWeight="100"
                fontFamily="'Federal', serif"
                whiteSpace="break-spaces"
                borderRadius="50%"
                boxShadow="0 0 5px rgba(0,0,0,0.6)"
                transform="rotate(-20deg)"
                transition="all 0.2s 0.1s ease-in"
                opacity={toggle1 ? 0 : 1}
                sx={{"&:hover": {boxShadow: "0 0 3px rgba(0,0,0,0.6)"}}}
                onClick={e => {
                    if (canReplay) {
                        clearTimeout(timeoutState);
                        setCanReplay(false);
                        setPlayState('running');

                        setToggleTimeout(
                            setTimeout(() => {
                                setToggle1(true);
                                setToggle2(true);
                                setToggle3(true);
                            }, 3 * 1000)
                        )

                        setTimeoutState(
                            setTimeout(() => {
                                setCanReplay(true);
                                setPlayState('paused');
                                setToggle1(false);
                                setToggle2(false);
                                setToggle3(false);
                            }, 10 * 1000)
                        )
                    }
                }}
            >
                Click To Win
            </Button>
            <Box pos="absolute" bottom={["44%", "20%"]} right={["0", "45%"]} height={["200px", "300px"]} width={["200px", "300px"]} zIndex={1000}>
                    <Link href="#section3" maxW="200px" maxH="200px" sx={{
                        color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: 0, top: `0`, textAlign: `center`,
                        backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: [`50px`,`6.5vw`], backgroundPosition: `90%`, transform: `scaleX(1)`, opacity: 0.6, "& > span": {visibility: `hidden`},
                        "&:hover": { color: `transparent !important`, opacity: 0.3, }
                    }}><span>Bitcoin & Gold</span></Link>
                </Box>
                <Box position="absolute" width="100%" height={["10%", "10%"]} maxW={["25px", "60px"]} bottom={["170px","70%"]} left={["calc(50% + 50px)", "64%"]} img="" imgAlt="" z={100}>
                    <Link
                        href="#section1"
                        display="inline-block"
                        position="relative"
                        // pt="26.25%"
                        height="0"
                        width="100%"
                        maxW="100px"
                        css={css`
                            @keyframes logo-anim {
                                0% { transform: translateY(25px); }
                                50% { transform: translateY(35px); }
                                100% { transform: translateY(25px); }
                            }

                            animation: logo-anim 5s infinite;
                            /* animation-play-state: paused; */
                        `}
                    >
                        <Image src="/assets/pig-string.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
                </Box>
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

            <Box onClick={e => setToggle1(!toggle1)}>
                <SceneBuilding
                    src="/assets/buildings/building-4.png"
                    left={{ base: '180px', lg: '1150px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '170px' }}
                />
            </Box>

            <Image
                src="/assets/buildings/building-4.destroyed.png"
                position="absolute"
                left={{ base: '166px', lg: '1111px' }}
                bottom={{ base: '14px', lg: '86px' }}
                width={{ base: '95px', lg: '306px' }}
                opacity={toggle1 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <Box onClick={e => setToggle3(!toggle3)}>
                <SceneBuilding
                    src="/assets/buildings/building-1.png"
                    left={{ base: '130px', lg: '1000px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '180px' }}
                />
            </Box>

            <Box onClick={e => setToggle2(!toggle2)}>
                <SceneBuilding
                    src="/assets/buildings/building-3.png"
                    left={{ base: '230px', lg: '1300px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '180px' }}
                />
            </Box>

            <Image
                src="/assets/effects/b3.png"
                position="absolute"
                left={{ base: '230px', lg: '1300px' }}
                bottom={{ base: '110px', lg: '370px' }}
                width={{ base: '58px', lg: '210px' }}
                opacity={toggle2 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '900px' }}
                bottom={{ base: '-2px', lg: '-20px' }}
                width={{ base: '200px', lg: '640px' }}
            />

            <Image
                src="/assets/effects/fog.png"
                position="absolute"
                left={{ base: '150px', lg: '1050px' }}
                bottom={{ base: '100px', lg: '380px' }}
                width={{ base: '140px', lg: '640px' }}
                opacity={toggle3 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />
        </Box>
    )
}
