import React, { FC, useState } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import { css } from "@emotion/react";
//


export interface AboutSceneLeftInterface {
    // className: string
    // minW: string
    // animation?: string
}

export const AboutSceneLeft: FC<AboutSceneLeftInterface> = () => {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    return(
        <Box className="scene__left" minW={{base: "0", lg: "33%", xxl: "25%"}} w={{base: "5%", lg: "auto"}} overflowY="hidden" zIndex={0}>
            <Box position="absolute" width="100%" height={{base: "10%", lg: "10%"}} maxW={{base: "25px", lg: "40px", xl: "45px", xxxl: "55px"}} bottom={{base: "150px", smd: "170px", lg: "320px", xl: "390px", xxl: "420px", xxxl: "530px"}} left={{base: "113px", lg: "225px", xl: "290px", xxl: "310px", xxxl: "415px"}} >
                <Link
                    href="/#section1"
                    display="inline-block"
                    position="relative"
                    // pt="26.25%"
                    height="0"
                    width="100%"
                        cursor="pointer"
                        // zIndex="3000"
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
        </Box>
    )
}
