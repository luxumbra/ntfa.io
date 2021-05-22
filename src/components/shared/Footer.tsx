import React, { FC, useState } from 'react';
import { Box, Link, Image, HStack, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { css, jsx } from "@emotion/react";
//


export const FooterComponent = () => {
    const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear())

    return(
        <Box position="absolute" bottom="0" left="0" width="100vw" height={{base: "90px", lg: "120px", xl: "150px", xxxl: "160px"}} zIndex={300}>
            <Box
                d="flex"
                flexFlow="column nowrap"
                w="auto"
                textAlign="center"
                border="5px solid white"
                borderRadius="15px"
                backgroundColor="#01735C"
                boxShadow="0 0 2px rgba(0,0,0,0.5)"
                justifyItems="center"
                pos="relative"
                overflow="hidden"
                alignContent={{base: "center", xl: "flex-start"}}
                h="100%"
                maxH={{base: "90px", lg: "300px", xl: "200px"}}
                width="auto"
                maxW="768px"
                m="0 auto"
                py={{base: 3, xl: 5}}>
                <HStack
                    spacing="30px"
                    sx={{
                        "a": { color: "white", fontFamily: "Hero", fontSize: { base: "14px", xxl: "18px", xxxl: "25px" }, textTransform: "uppercase", fontWeight: "900", py: { base: 0, xl: 2 } }, mx: "auto"
                    }}>
                    <Link href="/">Home</Link>
                    <Link href="/#section2">About NTFA</Link>
                    <Link href="/#section3">Burn FIAT</Link>
                </HStack>
                <HStack
                    spacing="30px"
                    sx={{
                        "a": {
                            color: "white",
                            "&:hover": {
                                "img": {
                                    animation: "dps-rotate 3s infinite"
                                }
                            },
                        }, color: "white", mx: "auto",
                    }}
                    css={css`
                        @keyframes dps-rotate {
                            0% { transform: rotate(0); }
                            100% { transform: rotate(360deg); }
                        }
                        @keyframes heart-beat {
                            0% {transform: scale(1);}
                            25% {transform: scale(.97);}
                            35% {transform: scale(.9);}
                            45% {transform: scale(1.1);}
                            55% {transform: scale(.9);}
                            65% {transform: scale(1.1);}
                            75% {transform: scale(1.03);}
                            100% {transform: scale(1);}
                        }
                        a {
                            color: white;
                            &:hover {
                                img {
                                    animation: dps-rotate 3s infinite;
                                }
                            }
                        }
                        .heart {
                            filter: drop-shadow(0 0 5px rgba(0,0,0,.4));
                            &:hover {
                                animation: heart-beat 1.6s infinite;
                            }
                        }

                        /* animation-play-state: paused; */
                    `}>
                    <Box d="inline-flex" fontSize={{ base: "12px" }} alignItems="center">Site from the <span className="heart">💛</span> of <Link href="#" d="inline-flex" alignItems="center"><Image src="/assets/dps-logo.png" width="20px" height="20px" sx={{ ml: "5px", borderRadius: "100%" }} /></Link></Box>
                  </HStack>
                    <VStack color="white" fontSize={{base: "12px"}} sx={{"p": {fontSize: {base: "10px", lg: "12px"}, margin: 0}}}>
                        <p>Copyright {currentYear} NTFA Limited, all rights reserved. NTFA Limited is a registed  inHK THIS NEEDSUPDATING</p>
                    <UnorderedList sx={{ display: "inline-flex", listStyle: "none", m: 0, "li": { fontSize: "12px", mx: 3 }}}>
                            <ListItem>Contact: <Link href="mailto:gold@ntfa.io">gold@ntfa.io</Link></ListItem>
                            <ListItem>Report: <Link href="mailto:support@ntfa.io">support@ntfa.io</Link></ListItem>
                        </UnorderedList>
                    </VStack>
            </Box>
        </Box>
    )
}
