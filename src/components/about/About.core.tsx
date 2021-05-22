import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
//
import { AboutSceneLeft } from './About.scene.left';
import { AboutSceneRight } from './About.scene.right';


export function AboutCore() {
    return(
        <Box id="section2" className="ntfa" d="flex" flexDir="row" alignContent="stretch"
        justifyContent={["center", "unset"]} minH="100vh" pos="relative" background="url(/assets/scenes/bg-industrial.png) 50% no-repeat" backgroundSize={["cover", "cover"]} overflow="hidden">

            <AboutSceneLeft />

            <Box className="scene__center" flex={{base: "0 0 90%", lg: "0 0 45%", xxxl: "0 0 33%"}} ml={["auto", "auto"]} d="flex" flexDirection="column" alignItems="center" zIndex="1000">
                <Box width="100%" height="auto" margin="50px 0 0" zIndex={1000} maxH="90%">
                    <Box p="2%" sx={{
                        backgroundColor: `rgba(0,0,0,0.6)`,
                        backdropFilter: `blur(3px)`,
                        boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                        color: `white`,
                        borderRadius: `6px`,
                        overflow: `hidden`,
                        height: `100%`
                    }}>
                        <Box p={{base: "5%", xxxl: "4%"}} sx={{ "p:nth-of-type(even)": {fontSize: { base: `10px`, xl: `12px`, xxxl: `14px` }}, "p:nth-of-type(odd)": {mb: `0`}}}>
                            <Heading as="h2" fontSize={{ base: `11px`, lg: "14px", xl: `16px`, xxxl: `18px` }} sx={{
                                mb: 2
                            }}>Never Touch FIAT Again</Heading>
                            <p>The desire for gold is not for gold. It is for the means of Freedom and Benefit</p>
                            <p style={{ fontWeight: 'bold' }}>- Ralph Waldo Emerson</p>

                            <p>With the exception only of the period of the gold standard, practically all governments of history have used their exclusive power to issue money to defraud and plunder the people.</p>
                            <p style={{ fontWeight: 'bold' }}>- Friedrich August von Hayek </p>

                            <p>He who bets on governments and government money bets against 6,000 years of recorded human history.</p>
                            <p style={{ fontWeight: 'bold' }}>- Gary North </p>

                            <p>Borrowers will default. Markets will collapse. Gold (the ultimate form of safe money) will skyrocket.</p>
                            <p style={{ fontWeight: 'bold' }}>- Mike Belkin</p>

                            <p>The history of paper money is an account of abuse, mismanagement, and financial disaster.</p>
                            <p style={{ fontWeight: 'bold' }}>- Richard Ebeling</p>

                            <p>Gold and Silver are money ... everything else is credit.</p>
                            <p style={{ fontWeight: 'bold' }}>- J.P. Morgan</p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box position="absolute" bottom="0" left="0" background={{base: "url(/assets/buildings/building-industrial.png) 0 100% no-repeat", lg: "url(/assets/buildings/building-industrial.png) 0 110px no-repeat"}} backgroundSize={{base: "contain", lg: "contain"}} width="100%" minW="100vw" minH="100vh" zIndex="0" pointerEvents="none"></Box>

            <AboutSceneRight />
        </Box>
    )
}
