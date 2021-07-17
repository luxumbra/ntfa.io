import React, { FC, useState } from 'react';
import { Box, Button, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { css, jsx } from "@emotion/react";


export const Loading = () => {
  return (
    <Box position="absolute" textAlign="center" d="flex" alignItems="center" width="100%" height={{ base: "100%", xl: "30%" }} top="0" zIndex={{ base: 300, lg: 0 }}>
      <NextLink href="/#section1" passHref>
        <Link
          display="inline-block"
          position="relative"
          pt="26.25%"
          height="0"
          width="100%"
          maxW="100px"
          margin="0 auto"
          css={css`
                        @keyframes logo-anim {
                            0% { transform: translateY(25px); opacity: 0.7; }
                            50% { transform: translateY(35px); opacity: 0.2;}
                            100% { transform: translateY(25px); opacity: 0.7; }
                        }
                        @keyframes pig-release {
                            0% {
                                transform: translateY(-15px) scale(1);
                            }
                            50% { transform: translateY(-400px) translateX(100px) scale(0.5); }
                            100% { transform: translateY(-700px) translateX(200px) scale(0.3); }
                        }
                        /* animation: logo-anim 5s infinite; */
                        /* animation-play-state: paused; */
                    `}
          sx={{ animation: 'logo-anim 5s infinite' }}
        >
          <Image src="/assets/ntfa-logo.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
        </Link>
      </NextLink>
    </Box>
  )
}
