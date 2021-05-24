import React, { useState } from "react";
import { Box, Heading, Link, Image, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { css, jsx } from "@emotion/react";
//
import { MetadataComponent } from "../../components/shared/Metadata";
import { SceneBridge } from '../../components/scene/Scene.bridge';
import { SceneBuilding } from '../../components/scene/Scene.building';
import { FooterComponent } from "../../components/shared/Footer";
import { rootCertificates } from "node:tls";



export function AssetDetails() {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const router = useRouter();

    const {
        query: { id },
    } = router;


    const goldVids = [
        {
            creator: "Never Touch Fiat Again",
            title: "Piggy Banksy",
            path: `/assets/nfts/PiggyBanksy619263_smallcloud.mp4`,
            summary:
                "The Piggy Banksy is the perfect thing to smash on the way out of the country to buy your next drop. Piggy Banksy comes with a matching gold certificate for 1 oz of gold!",
            description:
                "This asset has been paired to the following NFT. \n\n    Possession of this NFT enables the possessor to take custody of the physical bar of 1 oz of gold Stored in a Singaporean Vault. X.",
            NFT: "FILLIN",
            vault: "This asset is securely stored in the following facility: FILLIN",
        },
        {
            creator: "Never Touch Fiat Again",
            title: "Space Cowboy",
            path: `/assets/nfts/Space_Cowboy_8642.mp4`,
            summary:
                "The Space Cowboy blasted off many moons ago and now lives in his street style space suit ready for the next launch. Space Cowboy comes with a matching gold certificate for 50 Grams of gold!",
            description:
                "This asset has been paired to the following NFT. \n\n    Possession of this NFT enables the possessor to take custody of the physical bar of 50Grams of gold Stored in a  Singaporean Vault. X.",
            NFT: "FILLIN",
            vault: "This asset is securely stored in the following facility: FILLIN",
        },
        {
            creator: "Never Touch Fiat Again",
            title: "Vector V777",
            path: `/assets/nfts/Vector150768.mp4`,
            summary:
                "The Vector V777 comes equipped with 100 Grams of pure golden firepower. Make a splash as you enter the party with dual stage rocket launchers and Racer X upgrades. Handmade by time travelers from the year 1955 this car is as much a relic as it is a work of art. The Golden Vector comes with a matching gold certificate for 100 Grams of gold!",
            description:
                "This asset has been paired to the following NFT. \n\n    Possession of this NFT enables the possessor to take custody of the physical bar of 100Grams of gold Stored in a Singaporean Vault. X.",
            NFT: "FILLIN",
            vault: "This asset is securely stored in the following facility: FILLIN",
        },
    ];
    return (
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
            id="section2"
        >
            <MetadataComponent />
            <Box
                className="content"
                flex={{base: "0 0 90%", lg: "0 0 33%"}}
                width={{base: "90%", lg: "33%"}}
                d="flex"
                flexDirection="column"
                alignItems="flex-start"
                mt={{base: 3, lg: "50px"}}
                ml={{base: "5%", lg: "50px"}}
                px="0"
                boxShadow="0 0 10px rgba(0,0,0,.6)"
                borderRadius="6px"
                overflow="hidden"
            >
                <Box
                    className="playerWrapper"
                    position="relative"
                    paddingTop={`${(356 / 633) * 100}%`}
                    width="100%"
                    height="0"
                    zIndex={200}
                    overflow="hidden"
                >
                    <ReactPlayer
                        url={id && goldVids[+id].path}
                        playing={true}
                        volume={0}
                        muted={true}
                        loop={true}
                        controls={true}
                        width="100%"
                        height="auto"
                        style={{
                            position: "absolute",
                            left: `0`,
                            top: `0`,
                            zIndex: 0,
                        }}
                    />
                </Box>

                <Box
                    width="100%"
                    margin="0"
                    backgroundColor="rgba(255,255,255,0.6)"
                    backdropFilter="blur(7px)"
                    z={0}
                >
                    <Box p={{base: "15px", lg: "25px"}}>
                        <Heading as="h3" size={"sm"} color="accent.primary" mb="2">
                            {id && goldVids[+id].title}
                        </Heading>
                        <Box d="flex" flexFlow="column wrap" mb="4" sx={{
                            "& > span": {
                                fontSize: {base: "10px", lg: "12px"},
                                mb: 0,
                                fontWeight: "100"
                        }}}>
                            <span>{id && goldVids[+id].NFT}</span>
                            <span>{id && goldVids[+id].vault}</span>
                        </Box>
                        <Box fontsize={{base: "15px", lg: "17px"}}>
                            <p>{id && goldVids[+id].summary.replace('<br />', '\n')}</p>
                        </Box>
                        <Box fontSize={{base: "12px", lg: "14px"}}>
                            <p>{id && goldVids[+id].description.replace('<br />', '\n')}</p>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box position="absolute" width="100%" height={{base: "10%", xl: "10%"}} maxW={{base: "25px", lg: "40px", xxl: "50px", xxxl: "60px"}} bottom={{base: "220px", lg: "63%", xxl: "500px", xxxl: "750px"}} left={{base: "50%", lg: "830px", xxl: "850px", xxxl: "1200px"}} zIndex={{base: 1000, lg: 0}}>
                <Link
                    href="/#section1"
                    display="inline-block"
                    position="relative"
                    // pt="26.25%"
                    height="0"
                    width="100%"
                    maxW="100px"
                    css={css`
                        @keyframes logo-anim {
                            0% { transform: translateY(25px); }
                            50% { transform: translateY(35px); }
                            100% { transform: translateY(25px); }
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
                    sx={{animation: !toggle1 ? 'logo-anim 5s infinite' : 'pig-release 10s 1'}}
                >
                    <Image src="/assets/pig-string.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                </Link>
            </Box>

            <SceneBridge/>

           <Box onClick={e => setToggle1(!toggle1)}>
                <SceneBuilding
                    src="/assets/buildings/building-4.png"
                    left={{ base: '180px', lg: '800px', xxxl: '1150px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '110px', xxxl: '170px' }}
                />
            </Box>

            <Image
                src="/assets/buildings/building-4.destroyed.png"
                position="absolute"
                left={{ base: '166px', lg: '775px', xxxl: '1111px' }}
                bottom={{ base: '14px', lg: '58px', xxxl: '86px' }}
                width={{ base: '95px', lg: '196px', xxxl: '306px' }}
                opacity={toggle1 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <Box onClick={e => setToggle3(!toggle3)}>
                <SceneBuilding
                    src="/assets/buildings/building-1.png"
                    left={{ base: '130px', lg: '710px', xxxl: '1000px' }}
                    bottom={{ base: '0', lg: '-25px', xxxl: '0' }}
                    width={{ base: '50px', lg: '120px', xxxl: '180px' }}
                />
            </Box>

            <Box onClick={e => setToggle2(!toggle2)}>
                <SceneBuilding
                    src="/assets/buildings/building-3.png"
                    left={{ base: '230px', lg: '900px', xxxl: '1300px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '120px', xxxl: '180px' }}
                />
            </Box>

            <Image
                src="/assets/effects/b3.png"
                position="absolute"
                left={{ base: '230px', lg: '903px', xxxl: '1300px' }}
                bottom={{ base: '110px', lg: '252px', xxxl: '370px' }}
                width={{ base: '58px', lg: '138px', xxxl: '210px' }}
                opacity={toggle2 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '650px', xxl: '650px', xxxl: '900px' }}
                bottom={{ base: '-2px', lg: '-20px', xxxl: '-20px' }}
                width={{ base: '200px', lg: '540px', xxl: '540px', xxxl: '640px' }}
            />

            <Image
                src="/assets/effects/fog.png"
                position="absolute"
                left={{ base: '150px', lg: '770px', xxxl: '1050px' }}
                bottom={{ base: '100px', lg: '220px', xxxl: '380px' }}
                width={{ base: '140px', lg: '400px', xxxl: '640px' }}
                opacity={toggle3 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />
            <FooterComponent />
        </Box>
    );
}

export default AssetDetails;
