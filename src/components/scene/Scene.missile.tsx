import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';
import { css } from "@emotion/react";

export interface SceneMissileInterface {
    left: any;
    translation: string;
    delay: string;
    playState: string;
}

export const SceneMissile: FC<SceneMissileInterface> = ({ left, translation, delay, playState }) => {
    return (
        <Image
            src="/assets/missile.png"
            position="absolute"
            left={left}
            bottom={{ base: '60px', lg: '160px', xxxl: '250px' }}
            width={{ base: '15px', lg: '30px', xxxl: '40px' }}
            height={{ base: '5px', lg: '9px', xxxl: '12.5px'}}
            opacity="0"
            zIndex="20"
            css={css`
                @keyframes missileanim {
                    0% { opacity: 0; transform: rotate(-10deg) translate(0); }
                    10% { opacity: 0; }
                    12% { opacity: 1; transform: rotate(-10deg) translate(0); }
                    50% { opacity: 1; transform: rotate(-10deg) ${translation}; }
                    51% { opacity: 0; }
                    100% { opacity: 0; }
                }

                animation: missileanim 10s infinite;
                animation-easing: linear;
                animation-delay: ${delay};
                animation-play-state: ${playState};
            `}
        />
    )
}
