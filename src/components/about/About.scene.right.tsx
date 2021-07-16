import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
//

export interface AboutSceneRightInterface {
    // className: string
    // minW: string
}

export const AboutSceneRight: FC<AboutSceneRightInterface> = () => {

    return(
        <Box position="relative" className="scene__right" minW={{base: "5%", lg: "15%", xxxl: "30%"}} zIndex="1000">

            <Box
                pos="absolute"
                bottom={{ base: "44%", lg: "35%" }}
                right={{ base: "0", lg: "77%", xxxl: "89%" }}
                height={{ base: "200px", lg: "200px" }}
                width={{ base: "200px", lg: "150px" }}
                zIndex={2000}>
                <NextLink href="/#section3" prefetch passHref>
                    <Link
                    maxW="200px"
                    maxH="200px"
                    sx={{
                        color: `white`,
                        fontSize: `0.8vw`,
                        fontWeight: `bold`,
                        position: `absolute`,
                        width: `100%`, height: `100%`,
                        left: 0,
                        top: `0`,
                        textAlign: `center`,
                        backgroundImage: `url(/assets/effects/fingerprint.png)`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: { base: `50px`, lg: `75px`, xxxl: `100px` },
                        backgroundPosition: `90%`,
                        transform: `scaleX(1)`,
                        opacity: 0.6,
                        "& > span": { visibility: `hidden` },
                        "&:hover": { color: `transparent !important`, opacity: 0.3, }
                    }}>
                    <span>Bitcoin & Gold</span>
                    </Link>
                </NextLink>
            </Box>

        </Box>
    )
}
