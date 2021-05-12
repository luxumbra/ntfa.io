import React, { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Heading,
  SimpleGrid,
  Link,
  Text,
  Button
} from "@chakra-ui/react";
import Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";
import axios from "axios";


export let getCollection: any;

export interface ShowcaseGridInterface {
  collection: string;
}

type AssetType = {
    asset: {
    creator: string;
    title: string;
    path: string;
    summary: string;
    description: string;
    NFT: string;
    vault: string;

    }
}

const NFTCard = (asset: AssetType, id = 0) => {
    function truncateString(str = '', n = 0) {
        if (str.length > n) {
            return str.substring(0, n) + "...";
        } else {
            return str;
        }
    }

    return (
        <Link
            key={id}
            href={`/details/${id}`}
            transition="opacity 0.3s .3s ease-in"
            display="flex"
            flexFlow="column nowrap"
            backgroundColor="rgba(255,255,255,0.8)"
            backdropFilter="blur(3px)"
            borderRadius="6px"
            overflow="hidden"
            boxShadow="0 0 10px rgba(0,0,0,0.7)"
            position="relative"
            sx={{
                "&::after": {
                    content: "''",
                    backgroundImage: "url(/assets/ntfa-logo.png)",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    filter: "drop-shadow(0 0 5px rgba(0,0,0,.4))",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    height: "60px",
                    width: "60px",
                    transform: "translate3d(0, 40px, 0)",
                    opacity: 0,
                    transition: "transform 2.4s 0.4s ease-in-out, opacity 0.2s 0.4s ease"
                },
                "&:hover": {
                    boxShadow: `0 0 5px rgba(0,0,0,0.4)`,
                "&::after": {
                    transform: "translate3d(0, -400%, 0)",
                    opacity: 1
                    },
                "&::before": {
                    transform: "translate3d(0, 10px, 0)",
                    opacity: 1
                }
                },
            }}
        >

            <Box
            className="playerWrapper"
            position="relative"
            paddingTop={`${(212 / 373) * 100}%`}
            height="0"
            width="100%"
            maxWidth="512px"
            zIndex={200}
            overflow="hidden"
            >
                <ReactPlayer
                    url={asset.path}
                    playing={false}
                    loop={true}
                    width="100%"
                    height="auto"
                    controls={true}
                    style={{
                    position: "absolute",
                    left: `0`,
                    top: `0`,
                    zIndex: 200,
                    }}
                />
            </Box>
        <Box position="relative" width="100%" p={{base: "4%"}} d={{base: "flex", xl: "unset"}} flex="0 0 auto">
                <Heading as="h3" fontSize={{base: "10px", xl: "14px", xxxl: "16px"}} color="accent.primary" mb="5px">{asset.title}</Heading>
                <Text fontSize="sm" variant="summary" noOfLines={{ base: 2, xl: 2 }} d={{base: "none", xl: "unset"}}>
                        {truncateString(asset.summary, 100)}
            </Text>
        </Box>
    </Link>
    )
}

export const ShowcaseGridComponent: FC<ShowcaseGridInterface> = ({
  collection,
}) => {
  const [assets, setAssets] = useState([]);
  const [goldAssets, setGoldAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [turbo, setTurbo] = useState(false);

  const toggleTurbo = () => {
    setLoading(true);
    setTurbo(!turbo);
    setLoading(false);
  };

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



  useEffect(() => {
    getCollection = axios
      .get(
        `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${
          !turbo ? 0 : 3
        }&limit=6&collection=${collection}`
      )
      .then((response) => {
        console.log(response);
        setGoldAssets(response.data.assets.slice(0, 2));
        setAssets(response.data.assets.slice(3));
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [collection]);

  return (
    <>
        <Button onClick={toggleTurbo} position="absolute" top="-50px" left={0}>Gold Boost {turbo ? 'on' : 'off'}</Button>
          <SimpleGrid columns={{ base: 1, xl: 3}} spacing={3} width="100%">
        {(loading && <p>Loading...</p>) || (
          <>
            {turbo &&
              goldVids &&
              goldVids.map((asset, i) => (
                  <NFTCard asset={asset} id={i} />
              ))}
            {!turbo &&
              goldVids &&
                goldVids.map((asset, i) => (
                <NFTCard asset={asset} id={i} />
              ))}
          </>
        )}
      </SimpleGrid>
    </>
  );
};
