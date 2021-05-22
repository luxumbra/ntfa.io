import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

export const SceneCopy: FC = () => {
    return (
        <Box pos="absolute" width={{ base: `90%`, xl: `45%` }} left={{base: `5%`, xl: `2.5%`}} top={`5%`} maxH="70%" zIndex="200">
                <Box p="2%" sx={{
                    backgroundColor: `rgba(0,0,0,0.75)`,
                    // backdropFilter: `blur(3px)`,
                    boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                    color: `white`,
                    borderRadius: `6px`,
                overflow: `hidden`,
                    zIndex: 0
                }}>
                <Box p="5%" sx={{
                    zIndex: 200,
                    "ul": {
                        mb: 5,
                        "li": {
                        paddingLeft: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyItems: "left",
                        "&::before": {
                            content: "''",
                            width: "20px",
                            height: "30px",
                            maxHeight: "30px",
                            display: "block",
                            mr: 2,
                            backgroundImage: "url(/assets/100g.png)",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat"

                        }
                        }
                    }
                    }}>
                      <Heading as="h2" fontSize={{ base: `2.5vw`, xl: `1.2vw` }}>Bitcoin & Gold</Heading>
                        <ul>
                            <li>Bitcoin is based on cryptographically proven randomness and scarcity over time.</li>
                            <li>Gold is a rare earth metal used in countless tools, jewelry and as a store of wealth.</li>
                            <li>NFTs are ownable digital records used to store information.</li>
                        </ul>

                        <Heading as="h3" fontSize={{ base: `2vw`, xl: `1vw` }}>What is your Dollar?</Heading>
                          <p>NFTs can prove ownership of pretty much anything, like for example gold.</p>

                        <p>Fiat becomes dirty money when the printers go BRRRRRRRRRRRRRRRR!!!</p>
                        <p>Where did all that money come from?!</p>

                        <p>The best way to keep your hands clean is to...</p>

                        <Heading as="h3" fontSize={{ base: `2vw`, xl: `1vw` }}>Never Touch FIAT Again</Heading>
                        <p>Gold and Art are a perfect match. Be rich and look good doing it! While the world crumbles, you can be a golden space cowboy!</p>
                    </Box>
                </Box>
            </Box>
    )
}
