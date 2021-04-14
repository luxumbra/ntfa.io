import React, { FC, useState } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import { css, jsx } from "@emotion/react";
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";
import { SceneBuilding } from '../scene/Scene.building';

export interface AboutSceneLeftInterface {
    className: string
    minW: string
    animation?: string
}

export const AboutSceneLeft: FC<AboutSceneLeftInterface> = ({ className, minW, animation }) => {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    return(
        <Box className={className} as="div" d="flex" flexDirection="column" flexGrow={1} minW={minW}>
            <AssetContainer width={["20%","10%"]} height={["10%", "20%"]} className="logo">
                <Box className="spacer" height="70%">
                </Box>
                <Building buildingName="sign1" width="100%" height={["30%", "20%"]} maxW="100px" margin={["30% 0 0 100%","30% 0 0 500%"]} img="" imgAlt="" z={300}>
                    <Link
                        href="/#section1"
                        display="inline-block"
                        position="relative"
                        // pt="26.25%"
                        height="0"
                        width="100%"
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
                </Building>
            </AssetContainer>

                        <Box onClick={e => setToggle1(!toggle1)}>
                <SceneBuilding
                    src="/assets/buildings/building-4.png"
                    left={{ base: '180px', lg: '259px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '170px' }}
                />
            </Box>

            <Image
                src="/assets/buildings/building-4.destroyed.png"
                position="absolute"
                left={{ base: '160px', lg: '220px' }}
                bottom={{ base: '0', lg: '0' }}
                width={{ base: '110px', lg: '308px' }}
                opacity={toggle1 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <Box onClick={e => setToggle3(!toggle3)}>
                <SceneBuilding
                    src="/assets/buildings/building-1.png"
                    left={{ base: '130px', lg: '360px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '180px' }}
                />
            </Box>

            <Box onClick={e => setToggle2(!toggle2)}>
                <SceneBuilding
                    src="/assets/buildings/building-3.png"
                    left={{ base: '230px', lg: '200px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '180px' }}
                />
            </Box>

            <Image
                src="/assets/effects/b3.png"
                position="absolute"
                left={{ base: '230px', lg: '200px' }}
                bottom={{ base: '110px', lg: '370px' }}
                width={{ base: '58px', lg: '210px' }}
                opacity={toggle2 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '280px' }}
                bottom={{ base: '-10px', lg: '-20px' }}
                width={{ base: '200px', lg: '640px' }}
            />

            <Image
                src="/assets/effects/fog.png"
                position="absolute"
                left={{ base: '150px', lg: '450px' }}
                bottom={{ base: '100px', lg: '380px' }}
                width={{ base: '140px', lg: '640px' }}
                opacity={toggle3 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />
        </Box>
    )
}
