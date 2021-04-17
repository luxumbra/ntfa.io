import React, { useState } from "react";
import { Box, Heading, Text, Link, Button, Image } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { css, jsx } from "@emotion/react";
//
import { MetadataComponent } from "../../components/shared/Metadata";
import { AboutSceneLeft } from "../../components/index/About.scene.left";
import { FooterComponent } from "../../components/shared/Footer";
import { AssetContainer } from "../../components/shared/AssetContainer";
import { Building } from "../../components/shared/Building";
import { SceneBridge } from '../../components/scene/Scene.bridge';
import { SceneBuilding } from '../../components/scene/Scene.building';

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
            <Box
                className="scene__center"
                flex={["0 0 90%", "0 0 33%"]}
                width={["90%", "33%"]}
                d="flex"
                flexDirection="column"
                alignItems="center"
                mt={[3, "50px"]}
                ml={["5%", "50px"]}
                px="0"
                boxShadow="0 0 10px rgba(0,0,0,.6)"
                borderRadius="6px"
            >
                <Box
                    position="relative"
                    width="100%"
                    maxHeight={`${(212 / 373) * 100}%`}
                    zIndex={300}
                    color="white"
                >
                    <Box
                        className="playerWrapper"
                        position="relative"
                        paddingTop={`${(212 / 373) * 100}%`}
                        width="100%"
                        height="0"
                        // maxWidth="512px"
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
                            height="100%"
                            style={{
                                position: "absolute",
                                left: `0`,
                                top: `0`,
                                zIndex: 0,

                            }}
                        />
                    </Box>
                </Box>
                <AssetContainer height="auto" width="100%" className="spacer">
                    <Box
                        width="100%"
                        margin="0"
                        img=""
                        imgAlt=""
                        backgroundColor="rgba(255,255,255,0.6)"
                        backdropFilter="blur(7px)"
                        borderRadius=" 0 0 6px 6px"
                        overflow="hidden"
                        z={0}
                    >
                        <Box p={["15px", "25px"]}>
                            <Heading as="h3" size={"sm"} color="accent.primary" mb="2">
                                {id && goldVids[+id].title}
                            </Heading>
                            <Box d="flex" flexFlow="column wrap" mb="4" sx={{
                                "& > span": {
                                    fontSize: ["10px", "12px"],
                                    mb: 0,
                                    fontWeight: "100"
                            }}}>
                                <span>{id && goldVids[+id].NFT}</span>
                                <span>{id && goldVids[+id].vault}</span>
                            </Box>
                            <Box fontsize={["15px", "17px"]}>
                                <p>{id && goldVids[+id].summary.replace('<br />', '\n')}</p>
                            </Box>
                            <Box fontSize={["12px", "14px"]}>
                                <p>{id && goldVids[+id].description.replace('<br />', '\n')}</p>
                            </Box>
                        </Box>
                    </Box>
                </AssetContainer>
            </Box>

                <Box position="absolute" width="100%" height={["10%", "10%"]} maxW={["25px", "60px"]} bottom={["34%","70%"]} left={["54%", "60%"]} img="" imgAlt="" zIndex={0}>
                    <Link
                        href="/#section1"
                        display="inline-block"
                        position="relative"
                        height="100%"
                        width="100%"
                    maxW="100px"
                        css={css`
                            @keyframes logo-anim {
                                0% { transform: translateY(25px); }
                                50% { transform: translateY(35px); }
                                100% { transform: translateY(25px); }
                            }

                            animation: logo-anim 5s infinite;
                            /* animation-play-state: paused; */
                        `}
                    >
                        <Image src="/assets/pig-string.png" alt="logo" width="100%" height="auto" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
                </Box>
            <SceneBridge/>

            <Box onClick={e => setToggle1(!toggle1)}>
                <SceneBuilding
                    src="/assets/buildings/building-4.png"
                    left={{ base: '180px', lg: '1150px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '170px' }}
                />
            </Box>

            <Image
                src="/assets/buildings/building-4.destroyed.png"
                position="absolute"
                left={{ base: '166px', lg: '1111px' }}
                bottom={{ base: '14px', lg: '86px' }}
                width={{ base: '95px', lg: '306px' }}
                opacity={toggle1 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <Box onClick={e => setToggle3(!toggle3)}>
                <SceneBuilding
                    src="/assets/buildings/building-1.png"
                    left={{ base: '130px', lg: '1000px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '180px' }}
                />
            </Box>

            <Box onClick={e => setToggle2(!toggle2)}>
                <SceneBuilding
                    src="/assets/buildings/building-3.png"
                    left={{ base: '230px', lg: '1300px' }}
                    bottom={{ base: '0', lg: '0' }}
                    width={{ base: '50px', lg: '180px' }}
                />
            </Box>

            <Image
                src="/assets/effects/b3.png"
                position="absolute"
                left={{ base: '230px', lg: '1300px' }}
                bottom={{ base: '110px', lg: '370px' }}
                width={{ base: '58px', lg: '210px' }}
                opacity={toggle2 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />

            <SceneBuilding
                src="/assets/buildings/building-2.png"
                left={{ base: '100px', lg: '900px' }}
                bottom={{ base: '-2px', lg: '-20px' }}
                width={{ base: '200px', lg: '640px' }}
            />

            <Image
                src="/assets/effects/fog.png"
                position="absolute"
                left={{ base: '150px', lg: '1050px' }}
                bottom={{ base: '100px', lg: '380px' }}
                width={{ base: '140px', lg: '640px' }}
                opacity={toggle3 ? 1 : 0}
                transition="opacity 1s cubic-bezier(0.5, 1, 0.89, 1)"
                pointerEvents="none"
            />
        </Box>
    );
}

export default AssetDetails;
