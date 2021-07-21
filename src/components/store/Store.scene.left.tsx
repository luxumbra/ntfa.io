import React, { FC } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import { css } from "@emotion/react";
import NextLink from 'next/link';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface StoreSceneLeftInterface {
    className: string
    minW: string
    animation?: string
}

export const StoreSceneLeft: FC<StoreSceneLeftInterface> = ({ className, minW, animation }) => {

    return(
        <Box className={className} flexGrow={1} minW={minW} position="relative" zIndex="2000">
            <Box
                className="logo" position="absolute" width="100%" height={{ base: "20%", xl: "auto" }} maxW={{ base: "100px", smd: "60px", xl: "130px" }} top={{ base: "0", xl: "0" }} left={{ base: "10px", xl: "50px" }} z={500} >
                <NextLink href="/#section1" passHref>
                    <Link
                        display="inline-block"
                        position="relative"
                        pt={{base: `${(75 / 44) * 100}%`, smd: "56%"}}
                        filter="drop-shadow(0 0 5px rgba(0,0,0,.4))"
                        height="0"
                        width="200%"
                        maxW={{base: "80px", smd: "60px", xl: "100px"}}
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
                </NextLink>
            </Box>

            <Box
                position="absolute"
                bottom={{ base: "50%", xl: "25%" }}
                right={{ base: "-42%", xl: "-30px" }}
                height="auto"
                width={{base: "200%", xl: "100%"}}
                maxW={{ base: "100px", xl: "150px" }}
                className="spacer"
                transform={{ base: "scaleX(-1)", xl: "scaleX(-1)" }}
                zIndex={1000}>
                <Box
                    position="relative"
                    pt="100%"
                    h="0"
                    w="100%"
                    maxW="200px">
                    <NextLink href="/#section2" passHref>
                        <Link
                        w="100%"
                        h="100%"
                        sx={{
                            color: `white`,
                            fontSize: `0.8vw`,
                            fontWeight: `bold`,
                            position: `absolute`,
                            width: `100%`,
                            height: `100%`,
                            left: `0`,
                            top: `0`,
                            textAlign: `center`,
                            backgroundImage: `url(/assets/effects/fingerprint.png)`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: { base: `90%`, xl: `fill` },
                            backgroundPosition: 0,
                            opacity: 0.6,
                            "& > span": { visibility: `hidden` },
                            "&:hover": {
                                color: `transparent !important`,
                                textShadow: `10px 10px 0 rgba(0,0,0,0)`,
                                opacity: 0.3,
                            }
                        }}>
                        <span>Never Touch Fiat Again</span>
                    </Link>
                    </NextLink>
                </Box>
            </Box>
        </Box>
    )
}
