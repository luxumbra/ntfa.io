import React, { FC } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import { css } from "@emotion/react";

import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface StoreSceneLeftInterface {
    className: string
    minW: string
    animation?: string
}

export const StoreSceneLeft: FC<StoreSceneLeftInterface> = ({ className, minW, animation }) => {

    return(
        <Box className={className} as="div" flexGrow={1} d="flex" flexFlow="column wrap" minW={minW}>
            <AssetContainer width="100%" height="20%" className="logo">
                <Building buildingName="sign1" width="100%" height="90%" maxW="300px" margin="0 0 0 75%" img="" imgAlt="" z={300}>
                    <Link
                        href="#section1"
                        display="inline-block"
                        position="relative"
                        pt="56.25%"
                        height="0"
                        width="100%"
                        maxW="300px"
                        css={css`
                            @keyframes logo-anim {
                                0% { transform: translateY(25px); }
                                50% { transform: translateY(50px); }
                                100% { transform: translateY(25px); }
                            }

                            animation: logo-anim 2.5s infinite;
                            animation-play-state: paused;
                        `}
                    >
                        <Image src="/assets/ntfa-logo.png" alt="logo" width="100%" height="100%" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
                </Building>
            </AssetContainer>
        </Box>
    )
}
