import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface StoreSceneRightInterface {
    className: string
    minW: string
}

export const StoreSceneRight: FC<StoreSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box position="relative" className={className} as="footer" flexGrow={1} minW={minW}>
            <Box
                position="absolute"
                bottom={{ base: "13%", xl: "50px" }}
                right={{ base: "-20px" }}
                width={{base: "200%", xl: "100%"}}
                maxW={{ base: "100px", xl: "150px" }}
                height={{ base: "auto", xl: "auto" }}
                className="fingerprint">
                <Box
                    position="relative"
                    pt="100%"
                    h="0"
                    w="100%"
                    maxW="200px">
                    <NextLink href="/#section3" passHref>
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
                            backgroundSize: { base: `100%`, xl: `90%` },
                            backgroundPosition: 0,
                            opacity: 0.6,
                            "& > span": { visibility: `hidden` },
                            "&:hover": {
                                color: `transparent !important`,
                                textShadow: `10px 10px 0 rgba(0,0,0,0)`,
                                opacity: 0.3,
                            }
                        }}>
                        <span>About NTFA</span>
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </Box>
    )
}
