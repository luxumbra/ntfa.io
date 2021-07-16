import React, { FC, useState } from 'react';
import { Box, Link, Image, HStack, VStack, UnorderedList, ListItem, Button, IconButton, Heading } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { css, jsx } from "@emotion/react";
import NextLink from 'next/link'
//

export interface FooterComponentInterface {
    toggler?: boolean;
}

export const FooterComponent: FC<FooterComponentInterface> = ({ toggler }) => {
    const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear())
    const [reveal, setReveal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    console.log(toggler);

    return (
        <Box position="absolute" bottom="0" left="0" width="100vw" height={{ base: "90px", lg: "120px", xl: "150px", xxxl: "160px" }} zIndex={1000} pointerEvents={{ base: showMenu ? "auto" : "none", lg: toggler ? (showMenu ? "auto" : "none") : "auto" }}>
            <IconButton
                position="absolute"
                top={{ base: "-85vh", smd: "-75vh", xl: "-78vh", xxl: "-80vh" }}
                right={{ base: "2vw", xl: `2vw` }}
                onClick={() => setShowMenu(!showMenu)}
                icon={<HamburgerIcon />}
                aria-label="Show/Hide Menu"
                borderRadius="50%"
                backgroundColor={showMenu ? "#fff" : "#fc79b2"}
                color={showMenu ? "#fc79b2" : "#fff"}
                fontSize={{ base: `14px`, xl: `24px` }}
                zIndex={3000}
                transform={`rotate(${showMenu ? "90deg" : 0})`}
                sx={{ "&:active, &:hover, &:focus, &[data-hover]": { backgroundColor: showMenu ? "#fff" : "#fc79b2" }, boxShadow: showMenu ? "0 0 10px rgba(0,0,0,0.6)" : "0 0 15px rgba(0,0,0,0.4)" }}
                display={{ base: "block", lg: toggler ? "block" : "none" }}
                pointerEvents="auto"
            />
            <Box
                d="flex"
                flexFlow="column nowrap"
                w="auto"
                textAlign="center"
                border="5px solid white"
                borderRadius={{base: 0, lg: "15px"}}
                backgroundColor="#01735C"
                boxShadow="0 0 2px rgba(0,0,0,0.5)"
                justifyItems="center"
                pos={{base: "absolute", lg: "relative"}}
                top={{base: showMenu ? "-86.5vh" : "-200vh", smd: showMenu ? "-76vh" : "-200vh",  lg: 0}}
                overflow="hidden"
                alignContent={{ base: "center", xl: "flex-start" }}
                h={{base: "100vh", lg: "100%"}}
                maxH={{ base: "100vh", lg: "300px", xl: "200px" }}
                width="100%"
                maxW="768px"
                m="0 auto"
                py={{ base: 1, xl: 5 }}
                px={{ base: 1, lg: 3 }}
                pt={showMenu ? "150px" : 1}
                opacity={{ base: showMenu ? 1 : 0, lg: toggler ? (showMenu ? 1 : 0) : 1 }}
                transition="all 0.3s ease-in"
                zIndex={2900}
            >
                <HStack
                    spacing={{ base: "30px" }}
                    maxH={{base: "20px", lg: "50px"}}
                    sx={{
                        "a": { color: "white", fontFamily: "Hero", fontSize: { base: "10px", xl: "18px", xxxl: "25px" }, textTransform: "uppercase", fontWeight: "900", py: { base: 0, xl: 2 } }, mx: "auto"
                    }}>
                    <NextLink href="/#section1" prefetch>Home</NextLink>
                    <NextLink href="/#section2" prefetch>About NTFA</NextLink>
                    <NextLink href="/#section3" prefetch>Burn FIAT</NextLink>
                    <NextLink href="/tos" prefetch>Legal</NextLink>
                    <Button as="a" onClick={() => setReveal(!reveal)} sx={{
                        background: "transparent",
                        "&:hover, &:focus": {
                            background: "transparent",
                            color: "yellow.500",
                            cursor: "pointer"
                        },
                        px: 0
                    }}>Mattereum</Button>
                </HStack>
                <HStack
                    spacing={{base: "10px", lg: "30px"}}
                    sx={{
                        "a": {
                            color: "white",
                            "&:hover": {
                                "img": {
                                    animation: "dps-rotate 3s infinite"
                                }
                            },
                        }, color: "white", mx: "auto",
                        mb: { base: 0, lg: 1 }
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
                    <Box d="inline-flex" fontSize={{ base: "10px", lg: "12px" }} alignItems="center">Site from the <span className="heart">💛</span> of <Link href="#" d="inline-flex" alignItems="center"><Image src="/assets/dps-logo.png" width="20px" height="20px" sx={{ ml: "5px", borderRadius: "100%" }} /></Link></Box>
                </HStack>
                <VStack spacing={{base: 1, lg: 3}} color="white" fontSize={{ base: "9px", lg: "12px" }} sx={{ "p": { fontSize: { base: "9px", lg: "12px" }, margin: 0 } }}>
                    <p>Copyright {currentYear} NTFA Limited. All rights reserved. NTFA Limited is a company registered in Hong Kong (Company No. 3048511)</p>
                    <UnorderedList sx={{ display: "inline-flex", listStyle: "none", m: 0, "li": { fontSize: {base: "9px", lg: "12px"}, mx: 3 } }}>
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
                    transition="opacity 0.3s 0.2s ease-in-out"
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
                            <IconButton icon={<CloseIcon />} size="sm" aria-label="Close overlay" onClick={() => setReveal(!reveal)} sx={{
                                background: "transparent",
                                color: "white",
                                "&:hover, &:focus": {
                                    background: "transparent",
                                    // color: "yellow.500",
                                    cursor: "pointer"
                                },
                                position: "absolute",
                                top: "0",
                                left: {base: "25px", smd: "0", lg: "0"},
                                zIndex: 200
                            }}>Mattereum</IconButton>
                            <Heading as="h3" size="md" fontFamily="Hero" fontWeight="900" mb={{ base: 0, lg: 2 }}>Mattereum</Heading>
                            <Box sx={{ "p": { fontSize: { base: "9px", lg: "12px" } } }}>
                                <p>Mattereum is a trading name and registered trademark of MTRM Industries Limited, registered in England company number 10899201. VAT registration number: GB 283834768. Registered office: 69 Kingfisher Heights, Waterside Way, London, England, N17 9GL.</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
