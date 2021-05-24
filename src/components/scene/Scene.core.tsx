import React, { useState } from 'react';
import { Box, Button, Link, Image } from '@chakra-ui/react';
import { css, jsx } from "@emotion/react";
import { SceneBridge } from './Scene.bridge';
import { SceneLambo } from './Scene.lambo';
import { SceneMissile } from './Scene.missile';
import { SceneBuilding } from './Scene.building';
import { SceneCopy } from './Scene.copy';
import { FooterComponent } from '../shared/Footer';

export const missiles = [
    {
        left: { base: '-25px', lg: '-20px', xxxl: '80px' },
        translation: `translate(150vw, -50vh)`,
        delay: '0s',
    },
    {
        left: { base: '-15px', lg: '80px', xxl: '180px' },
        translation: `translate(150vw, -30vh)`,
        delay: '0.15s',
    },
    {
        left: { base: '-5px', lg: '180px', xxxl: '280px' },
        translation: `translate(150vw, -40vh)`,
        delay: '0.3s',
    },
    {
        left: { base: '5px', lg: '280px', xxxl: '380px' },
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
    const [pigAnchored, setPigAnchored] = useState(true);

    return(
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
            id="section3"
        >
            <SceneCopy />

            <Button
                position="absolute"
                display={{base: "none", sm: "block"}}
                right={{ base: "70%", md: "67%", lg: "45px" }}
                bottom={{ base: "20%", md: "18%", lg: "calc(100% - 275px)" }}
                zIndex="2000"
                size="lg"
                backgroundColor="#01735C"
                colorScheme="green"
                width={{ base: "80px", sm: "120px", md: "120px", lg: "170px", xxxl: "225px" }}
                height={{ base: "80px", sm: "120px", md: "120px", lg: "170px", xxxl: "225px" }}
                fontSize={{ base: "10px", md: "16px", lg: "16px", xxxl: "1.2vw" }}
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
                                setPigAnchored(false);
                            }, 3 * 1000)
                        )

                        setTimeoutState(
                            setTimeout(() => {
                                setCanReplay(true);
                                setPlayState('paused');
                                setToggle1(false);
                                setToggle2(false);
                                setToggle3(false);
                                setPigAnchored(true);
                            }, 10 * 1000)
                        )
                    }
                }}
            >
                Click To Win
            </Button>

            <Box
                pos="absolute"
                bottom={{ base: "44%", lg: "70%", xxxl: "70%" }}
                right={{ base: "0", lg: "50%", xxxl: "50%" }}
                height={{ base: "200px", lg: "300px", xxxl: "300px" }}
                width={{ base: "200px", lg: "100px", xxxl: "300px" }}
                zIndex={1000}>
                <Link
                    href="#section2"
                    w="100%"
                    h="100%"
                    sx={{
                        color: `white`,
                        fontSize: `0.8vw`,
                        fontWeight: `bold`,
                        position: `absolute`,
                        width: `100%`,
                        height: `100%`,
                        left: 0, top: `0`,
                        textAlign: `center`,
                        backgroundImage: `url(/assets/effects/fingerprint.png)`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: { base: `50px`, lg: `100%`, xxxl: `6.5vw` },
                        backgroundPosition: `90%`,
                        transform: `scaleX(1)`,
                        opacity: 0.6,
                        "& > span": { visibility: `hidden` },
                        "&:hover": { color: `transparent !important`, opacity: 0.3, }
                    }}>
                    <span>Never Touch Fiat Again</span>
                </Link>
            </Box>

            <Box position="absolute" width="100%" height={{base: "10%", xl: "10%"}} maxW={{base: "25px", lg: "40px", xxl: "60px", xxxl: "60px"}} bottom={{base: "220px", lg: "63%", xxl: "500px", xxxl: "750px"}} left={{base: "50%", lg: "830px", xxl: "850px", xxxl: "1200px"}} zIndex={1000}>
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
                        @keyframes pig-release {
                            0% {
                                transform: translateY(-15px) scale(1);
                            }
                            50% { transform: translateY(-400px) translateX(100px) scale(0.5); }
                            100% { transform: translateY(-700px) translateX(200px) scale(0.3); }
                        }
                        /* animation: logo-anim 5s infinite; */
                        /* animation-play-state: paused; */
                    `}
                    sx={{animation: pigAnchored ? 'logo-anim 5s infinite' : 'pig-release 10s 1'}}
                >
                    <Image src="/assets/pig-string.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                </Link>
            </Box>

            <SceneBridge />

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
                    left={{ base: '180px', lg: '800px', xxxl: '1150px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '110px', xxxl: '170px' }}
                />
            </Box>

            <Image
                src="/assets/buildings/building-4.destroyed.png"
                position="absolute"
                left={{ base: '166px', lg: '775px', xxxl: '1111px' }}
                bottom={{ base: '14px', lg: '58px', xxxl: '86px' }}
                width={{ base: '95px', lg: '196px', xxxl: '306px' }}
                opacity={toggle1 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <Box onClick={e => setToggle3(!toggle3)}>
                <SceneBuilding
                    src="/assets/buildings/building-1.png"
                    left={{ base: '130px', lg: '710px', xxxl: '1000px' }}
                    bottom={{ base: '0', lg: '-25px', xxxl: '0' }}
                    width={{ base: '50px', lg: '120px', xxxl: '180px' }}
                />
            </Box>

            <Box onClick={e => setToggle2(!toggle2)}>
                <SceneBuilding
                    src="/assets/buildings/building-3.png"
                    left={{ base: '230px', lg: '900px', xxxl: '1300px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '120px', xxxl: '180px' }}
                />
            </Box>

            <Image
                src="/assets/effects/b3.png"
                position="absolute"
                left={{ base: '230px', lg: '903px', xxxl: '1300px' }}
                bottom={{ base: '110px', lg: '252px', xxxl: '370px' }}
                width={{ base: '58px', lg: '138px', xxxl: '210px' }}
                opacity={toggle2 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '750px', xxxl: '900px' }}
                bottom={{ base: '-2px', lg: '-20px', xxxl: '-20px' }}
                width={{ base: '200px', lg: '640px', xxxl: '640px' }}
            />

            <Image
                src="/assets/effects/fog.png"
                position="absolute"
                left={{ base: '150px', lg: '770px', xxxl: '1050px' }}
                bottom={{ base: '100px', lg: '220px', xxxl: '380px' }}
                width={{ base: '140px', lg: '400px', xxxl: '640px' }}
                opacity={toggle3 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />
            <FooterComponent />
        </Box>
    )
}
