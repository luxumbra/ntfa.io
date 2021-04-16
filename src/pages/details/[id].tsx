import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
//
import { MetadataComponent } from "../../components/shared/Metadata";
import { AboutSceneLeft } from "../../components/index/About.scene.left";
import { FooterComponent } from "../../components/shared/Footer";
import { AssetContainer } from "../../components/shared/AssetContainer";
import { Building } from "../../components/shared/Building";

export function AssetDetails() {
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
            className="scene"
            d="flex"
            flexDirection="row"
            minHeight="100vh"
            width="100vw"
            maxW="100%"
            alignContent="stretch"
            backgroundImage="url(/assets/scenes/bg-scene.png)"
            backgroundSize="cover"
            overflow="hidden"
        >
            <MetadataComponent />
            <AboutSceneLeft className="scene__left" minW="33%" />
            <Box
                className="scene__center"
                as="main"
                flex={["0 0 66%", "0 0 33%"]}
                d="flex"
                flexDirection="column"
                alignItems="center"
                pr="25px"
            >
                <AssetContainer
                    height="5%"
                    width="100%"
                    className="spacer"
                ></AssetContainer>
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
                                zIndex: 200,
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
                            <Heading as="h3" size={"sm"} color="accent.primary">
                                {id && goldVids[+id].title}
                            </Heading>
                            <Box d="flex" flexFlow="row wrap" fontSize={["12px", "14px"]}>
                                <p>{id && goldVids[+id].NFT}</p>
                                <p>{id && goldVids[+id].vault}</p>
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
            <Box className="scene__right" minW="33%" display={["none", "initial"]} />
            <Box
                pos="absolute"
                width="100vw"
                maxW="100%"
                height={["20%", "180px"]}
                backgroundImage="url(/assets/buildings/bridge.png)"
                backgroundRepeat="repeat-x"
                backgroundPosition="bottom"
                backgroundSize="contain"
                bottom="0"
                left="0"
                zIndex="1000"
             />
        </Box>
    );
}

export default AssetDetails;
