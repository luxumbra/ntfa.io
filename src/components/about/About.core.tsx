import React from 'react';
import {Box, Heading} from '@chakra-ui/react';
//
import {AboutSceneLeft} from './About.scene.left';
import {AboutSceneRight} from './About.scene.right';


export function AboutCore() {
    return (
        <Box id="section2" className="ntfa" d="flex" flexDir="row" alignContent="stretch"
             justifyContent={["center", "unset"]} minH="100vh" pos="relative"
             background="url(/assets/scenes/bg-industrial.png) 50% no-repeat" backgroundSize={["cover", "cover"]}
             overflow="hidden">

            <AboutSceneLeft/>

            <Box className="scene__center" flex={{base: "0 0 98%", smd: "0 0 50%", md: "0 0 45%", xxxl: "0 0 33%"}}
                 ml={["auto", "auto"]} mr={{base: "auto"}} d="flex" flexDirection="column" alignItems="center"
                 zIndex="1000">
                <Box width="100%" height="auto" margin={{base: "50px 0 0", smd: "25px 0 0", lg: "50px 0 0"}}
                     zIndex={1000} maxH={{base: "90%", smd: "85%", md: "90%"}} overflow="hidden" borderRadius="6px"
                     boxShadow="0 0 15px rgba(0,0,0,0.5)" backgroundColor="rgba(0,0,0,0.6)">
                    <Box p="5%" sx={{
                        // backgroundColor: `rgba(0,0,0,0.6)`,
                        // backdropFilter: `blur(3px)`,
                        // boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                        color: `white`,
                        // borderRadius: `6px`,
                        overflowY: `auto`,
                        height: `100%`
                    }}>
                        <Box p={{base: "5%", xxxl: "4%"}} sx={{
                            "p": { fontSize: { base: `10px`, xl: `12px`, xxxl: `14px` } },
                            "ul": {
                                listStyle: "none",
                                pl: "0"
                            },
                            "li": {
                                fontSize: { base: `10px`, xl: `12px`, xxxl: `14px` },
                                mb: 3
                            }
                        }}>
                            <Heading as="h2" fontSize={{base: `9px`, lg: "14px", xl: `16px`, xxxl: `18px`}} sx={{
                                mb: 3
                            }}>Never Touch FIAT Again: Gold bullion with Collectible NFTs</Heading>
                            <p>Never Touch Fiat Again is a pilot NFT project utilizing Mattereum Real World NFT legal
                                contracts to ensure rights of real world assets, such as bars of gold, with NFTs and
                                wrap them in collectible Art NFTs.</p>

                            <p>NTFA Presents a novel idea for an NFT.</p>
                            <ul>
                                <li>Buy the NFT, and you can get your specific real bar of gold and another NFT for turning in the NFT through the Claims Process!</li>
                                <li>NFT owner's have legal rights to the gold, and can request shipping. Exit to gold!</li>
                                <li>We partner with Lohko Inc and Mattereum to ensure a seamless and legal transition of
                                    rights.</li>
                                <li>Matteruem has refined the legal agreement between parties and will act as arbitration in the event of any disputes.</li>
                                <li>Lohko will act as the custodian of the gold asset and handle claiming process.</li>
                            </ul>

                            <p>In a world where people question the value of an NFT, NTFA is pushing the boundary of
                                what an NFT can
                                be.</p>

                            <p>We created a set of unique collectible gold bars that lets you have your NFT and GOLD BAR
                                TOO!</p>
                            <p>The Genesis set offers 3 different sizes of gold and digital tokens; 100 grams, 50 grams
                                and 1 oz of gold.</p>

                            <p>To claim the gold your NFT must be turned in!!!</p>

                            <p>Once turned in and upon confirmation you will receive a "burned" version of the NFT which
                                no longer has rights to the asset!</p>
                            <ul>
                                <li>The minting order of the burned tokens is based on the order of claims.</li>
                                <li>More than just a pretty picture, our NFTs provide multiple utilities.</li>
                                <li>We partner with amazing artists to do exclusive gold back NFTs!</li>
                                <li>Ethereum and NFT empowers us to support artists and creative people like you!</li>
                                <li>Who needs paper money, Never Touch Fiat Again!</li>
                                <li>Thank you for your support!</li>
                            </ul>

                            <p style={{fontWeight: 'bold'}}>NTFA</p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box position="absolute" bottom="0" left="0" background={{
                base: "url(/assets/buildings/building-industrial.png) bottom left no-repeat",
                lg: "url(/assets/buildings/building-industrial.png) bottom left no-repeat"
            }} backgroundSize={{base: "contain", lg: "contain"}} width={{base: "100%", lg: "70%"}} height="0"
                 pt={`${(1722 / 2318) * 100}%`} zIndex="0" pointerEvents="none"></Box>

            <AboutSceneRight/>
        </Box>
    )
}
