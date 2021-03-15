import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';
import { css } from "@emotion/react";

export const SceneLambo: FC = () => {
    return (
        <Image
            src="/assets/lambo.png"
            position="absolute"
            left="-240px"
            bottom={{ base: '30px', lg: '140px' }}
            width={{ base: '90px', lg: '240px' }}
            css={css`
                @keyframes lamboanim {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(125vw + 480px)); }
                }

                animation: lamboanim 10s infinite;
                animation-easing: linear;
            `}
        />
    )
}