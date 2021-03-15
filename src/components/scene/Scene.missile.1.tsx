import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';
import { css } from "@emotion/react";

export const SceneMissile1: FC = () => {
    return (
        <Image
            src="/assets/missile.png"
            position="absolute"
            left={{ base: '-40px', lg: '80px' }}
            bottom={{ base: '60px', lg: '250px' }}
            width={{ base: '20px', lg: '40px' }}
            height={{ base: '5px', lg: '12.5px'}}
            css={css`
                @keyframes missileanim {
                    0% { opacity: 0; transform: rotate(-30deg) translate(0); }
                    10% { opacity: 0; }
                    12% { opacity: 1; transform: rotate(-30deg) translate(0); }
                    50% { opacity: 1; transform: rotate(-30deg) translate(150vw, -50vh); }
                    51% { opacity: 0; }
                    100% { opacity: 0; }
                }
                
                animation: missileanim 10s infinite;
                animation-easing: linear;
            `}
        />
    )
}