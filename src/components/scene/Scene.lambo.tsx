import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';
import { css } from "@emotion/react";

export interface SceneLamboInterface {
    playState: string;
}

export const SceneLambo: FC<SceneLamboInterface> = ({ playState }) => {
    return (
        <Image
            src="/assets/lambo.png"
            position="absolute"
            left="-240px"
            bottom={{ base: '30px', lg: '155px' }}
            width={{ base: '90px', lg: '240px' }}
            zIndex="14"
            css={css`
                @keyframes lamboanim {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(125vw + 480px)); }
                }

                animation: lamboanim 10s infinite;
                animation-easing: linear;
                animation-play-state: ${playState};
            `}
        />
    )
}