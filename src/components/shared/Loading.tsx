import React, { FC, useState } from 'react';
import { Box, Button, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { css, jsx } from "@emotion/react";


export const Loading = () => {
  return (
    <Box className="loader" position="absolute" d="flex" alignContent="center" justifyContent="center" alignItems="center" flexFlow="row" width="100%" minHeight={{ base: "100%", xl: "100%" }} top="0" zIndex={{ base: 3000, lg: 3000 }}>
      <Box d="flex" flex="0 0 100%" flexFlow="column wrap" height="100%">
        <Box
          display="inline-block"
          position="relative"
          pt="17.25%"
          height="0"
          width="100%"
          maxW="100px"
          margin="0 auto"
          flex="1"
          css={css`
                        @keyframes loading-anim {
                            0% { transform: translateY(25px); opacity: 0.9; }
                            50% { transform: translateY(35px); opacity: 0.2;}
                            100% { transform: translateY(25px); opacity: 0.9; }
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
          sx={{ animation: 'loading-anim 5s infinite' }}
        >
          <Image src="/assets/ntfa-logo.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} priority />
        </Box>
        <Box width="100%" textAlign="center">
          <p>Loading...</p>
        </Box>
      </Box>
    </Box>
  )
}
