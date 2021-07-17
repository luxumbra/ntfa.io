import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ReactMarkdown from "react-markdown";
//
import { AboutSceneLeft } from '../about/About.scene.left';
import { AboutSceneRight } from '../about/About.scene.right';


function TosCore({ content }: any) {
    console.log('data: ', content);

    return (
        <Box id="section2" className="ntfa" d="flex" flexDir="row" alignContent="stretch"
            justifyContent={["center", "unset"]} minH="100vh" pos="relative" background="url(/assets/scenes/bg-industrial.png) 50% no-repeat" backgroundSize={["cover", "cover"]} overflow="hidden">

            {/* <AboutSceneLeft /> */}

            <Box className="scene__center" flex={{ base: "0 0 98%", smd: "0 0 50%", md: "0 0 66%", xxxl: "0 0 66%" }} ml={["auto", "auto"]} mr={{ base: "auto" }} d="flex" flexDirection="column" alignItems="center" maxH={{ base: "80vh", lg: "95vh" }} zIndex="1000">
                <Box width="100%" height="auto" margin={{ base: "50px 0 0", smd: "25px 0 0", lg: "50px 0 0" }} zIndex={1000} maxH={{ base: "90%", smd: "85%", md: "100%" }} py="50px" overflow="hidden" borderRadius="6px" boxShadow="0 0 15px rgba(0,0,0,0.5)" backgroundColor="rgba(0,0,0,0.8)" position="relative">
                    <Heading as="h2" fontSize={{ base: `9px`, lg: "14px", xl: `16px`, xxxl: `18px` }} sx={{
                        color: `white`,
                        ml: `5%`,
                        position: 'absolute',
                        top: `25px`,
                        left: `auto`,
                        zIndex: 1100
                    }}>NTFA Terms of Service</Heading>
                    <Box p={{ base: "5%", xl: "2% 5%" }} sx={{
                        color: `white`,
                        overflowY: `scroll`,
                        height: `100%`,
                        textAlign: `center`,
                    }}>
                        <Box p={{ base: "5%", xl: "2% 5%", xxxl: "4%" }} textAlign="left" sx={{
                            "h2": {
                                fontFamily: `'Hero', sans-serif`,
                                fontSize: { base: `12px`, lg: "14px", xl: `18px`, xxxl: `18px` },
                                fontWeight: `900`,
                                mt: 6
                            },
                            "p": {
                                fontSize: {
                                    base: `10px`, lg: "12px", xl: `14px`,
                                },
                            },
                            "ul > li": {
                                ml: 7
                            }
                        }}>
                            <ReactMarkdown>
                                {content}
                            </ReactMarkdown>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box position="absolute" bottom="0" left="0" background={{ base: "url(/assets/buildings/building-industrial.png) bottom left no-repeat", lg: "url(/assets/buildings/building-industrial.png) bottom left no-repeat" }} backgroundSize={{ base: "contain", lg: "contain" }} width={{ base: "100%", lg: "70%" }} height="0" pt={`${(1722 / 2318) * 100}%`} zIndex="0" pointerEvents="none"></Box>
            {/*
            <AboutSceneRight /> */}
        </Box>
    )
}

export default TosCore;
