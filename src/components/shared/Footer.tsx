import React, { FC, useState } from 'react';
import { Box, Link, Image, HStack, VStack, UnorderedList, ListItem, Button, IconButton, Heading } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';
import { css, jsx } from "@emotion/react";
//


export const FooterComponent = () => {
    const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear())
    const [reveal, setReveal] = useState(false);

    return (
        <Box position="absolute" bottom="0" left="0" width="100vw" height={{ base: "90px", lg: "120px", xl: "150px", xxxl: "160px" }} zIndex={300}>
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
                alignContent={{ base: "center", xl: "flex-start" }}
                h="100%"
                maxH={{ base: "90px", lg: "300px", xl: "200px" }}
                width="auto"
                maxW="768px"
                m="0 auto"
                py={{ base: 3, xl: 5 }}>
                <HStack
                    spacing="30px"
                    sx={{
                        "a": { color: "white", fontFamily: "Hero", fontSize: { base: "14px", xxl: "18px", xxxl: "25px" }, textTransform: "uppercase", fontWeight: "900", py: { base: 0, xl: 2 } }, mx: "auto"
                    }}>
                    <Link href="/">Home</Link>
                    <Link href="/#section2">About NTFA</Link>
                    <Link href="/#section3">Burn FIAT</Link>
                    <Button as="a" onClick={() => setReveal(!reveal)} sx={{
                        background: "transparent",
                        "&:hover, &:focus": {
                            background: "transparent",
                            color: "yellow.500",
                            cursor: "pointer"
                        }
                    }}>Mattereum</Button>
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
                <VStack color="white" fontSize={{ base: "12px" }} sx={{ "p": { fontSize: { base: "10px", lg: "12px" }, margin: 0 } }}>
                    <p>Copyright {currentYear} NTFA Limited, all rights reserved. NTFA Limited is a registed  inHK THIS NEEDSUPDATING</p>
                    <UnorderedList sx={{ display: "inline-flex", listStyle: "none", m: 0, "li": { fontSize: "12px", mx: 3 } }}>
                        <ListItem>Contact: <Link href="mailto:gold@ntfa.io">gold@ntfa.io</Link></ListItem>
                        <ListItem>Report: <Link href="mailto:support@ntfa.io">support@ntfa.io</Link></ListItem>
                    </UnorderedList>
                </VStack>
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    className="content"
                    flex={{ base: "0 0 100%", lg: "0 0 100%" }}
                    width={{ base: "100%", lg: "100%" }}
                    height="100%"
                    d="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={0}
                    ml={0}
                    px="0"
                    borderRadius="6px"
                    overflow="hidden"
                    opacity={reveal ? 1 : 0}
                    // transform={`translate3d(${reveal ? '100%, -500px, 0' : '-400px, -500px, 0'})`}
                    transition="all 0.2s ease-in-out, opacity 0.3s 0.2s ease-in-out"
                    zIndex={reveal ? "200" : -20}
                >

                    <Box
                        position="relative"
                        display="flex"
                        alignItems="center"
                        width="100%"
                        height="100%"
                        margin="0"
                        backgroundColor="#01735C"
                        color="white"
                        z={0}
                    >
                        <Box p={{ base: "15px", lg: "25px" }}>
                            <IconButton icon={<CloseIcon />} aria-label="Close overlay" onClick={() => setReveal(!reveal)} sx={{
                                background: "transparent",
                                "&:hover, &:focus": {
                                    background: "transparent",
                                    color: "yellow.500",
                                    cursor: "pointer"
                                },
                                position: "absolute",
                                top: "0",
                                right: "0",
                                zIndex: 200
                            }}>Mattereum</IconButton>
                            <Heading as="h3" size="md" fontFamily="Hero" fontWeight="900" mb={2}>Mattereum</Heading>
                            <Box sx={{ "p": { fontSize: { base: "12px", lg: "12px" } } }}>
                                <p>Mattereum is a trading name and registered trademark of MTRM Industries Limited, registered in England company number 10899201. VAT registration number: GB 283834768. Registered office: 69 Kingfisher Heights, Waterside Way, London, England, N17 9GL.</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
