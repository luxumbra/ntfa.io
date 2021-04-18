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
        <Box className={className} flexGrow={1} minW={minW} position="relative">
            <Box className="logo" position="absolute" width="100%" height={{base: "20%", xl: "auto"}} maxW={{base: "65px", xl: "130px"}} top={{ base: "0", xl: "0" }} left={{ base: "10px", xl: "50px"}} z={500} >
                    <Link
                        href="#section1"
                        display="inline-block"
                        position="relative"
                        pt="56.25%"
                        height="0"
                        width="100%"
                        maxW="130px"
                        css={css`
                            @keyframes logo-anim {
                                0% { transform: translateY(25px); }
                                50% { transform: translateY(30px); }
                                100% { transform: translateY(25px); }
                            }

                            animation: logo-anim 7s infinite;
                            /* animation-play-state: paused; */
                        `}
                    >
                        <Image src="/assets/ntfa-logo.png" alt="logo" width="100%" height="100%" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
            </Box>

            <Box position="absolute" bottom={{base: "50%", xl: "30%"}} right={{base: "20%", xl: "-30px"}} height="auto" width="100%" maxW={{base: "100px", xl: "150px"}} className="spacer" transform={{base: "scaleX(-1)", xl: "scaleX(-1)"}} zIndex={1000}>
                <Box position="relative" pt="100%" h="0" w="100%" maxW="200px">
                    <Link href="#section2" w="100%" h="100%" sx={{
                        color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: `0`, top: `0`, textAlign: `center`,
                    backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: { base: `90%`, xl: `fill` }, backgroundPosition: 0, opacity: 0.6, "& > span": { visibility: `hidden`},
                        "&:hover": { color: `transparent !important`, textShadow: `10px 10px 0 rgba(0,0,0,0)`, opacity: 0.3, }}}><span>Bitcoin & Gold</span></Link>
                </Box>
            </Box>
        </Box>
    )
}
