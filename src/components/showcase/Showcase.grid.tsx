import React, { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Heading,
  SimpleGrid,
  Link,
  Text,
  Button,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export let getCollection: any;

export interface ShowcaseGridInterface {
  collection: string;
}

export interface AssetTypeInterface {
    asset: any;
    id: number;
}

export interface CustomCarouselDotInterface {
    onClick?: any;
    active?: boolean;
    index?: number;
    carouselState?: any;
}

export const CustomCarouselDot: FC<CustomCarouselDotInterface> = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    //   <li key={index}>
      <Button
        backgroundColor={active ? "transparent" : "transparent" }
              onClick={() => onClick()}
              pos="relative" w="30px" h="30px" mx="10px"
          sx={{
              fontSize: "14px",
              fontFamily: "Federal",
              color: "white",
            "&::after": {
                content: "''",
                backgroundImage: "url(/assets/ntfa-logo.png)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                filter: "drop-shadow(0 0 5px rgba(0,0,0,.4))",
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                width: "100%",
                transform: "translate3d(0, 0, 0)",
                opacity: active ? 1 : 0.8,
                transition: "transform 2.4s 0.4s ease-in-out, opacity 0.2s 0.4s ease",
                zIndex: 0
            },
            "&:hover": {
                backgroundColor: "transparent",
                "&::after": {
                    opacity: 1,
                },
            }
        }}
      >{index && index + 1}</Button>
    // </li>
  );
};


export const NFTCard: FC<AssetTypeInterface> = ({ asset, id }) => {
    function truncateString(str = '', n = 0) {
        if (str.length > n) {
            return str.substring(0, n) + "...";
        } else {
            return str;
        }
    }

    return (
        <Box>
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
            paddingTop={{base: `${(207 / 305) * 100}%`, xl: `${78}%`}}
            maxWidth="350px"
            width="100%"
            height="0"
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
            <Box position="absolute" top="0" left="0" w="100%" h="100%">
                <Box
                className="playerWrapper"
                position="relative"
                paddingTop={`${(212 / 373) * 100}%`}
                height="0"
                width="100%"
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
                <Box position="relative" width="100%" p={{base: "4%"}} d={{base: "block", xl: "block"}} h="auto">
                    <Heading as="h3" fontSize={{ base: "10px", xl: "14px", xxxl: "16px" }} color="accent.primary" mb="5px">{asset.title}</Heading>
                    <Box fontSize={{ base: "11px", xl: "12px" }} d={{base: "none", xl: "block"}}>
                        <Text noOfLines={{ base: 2, xl: 4 }}>
                                {truncateString(asset.summary, 200)}
                        </Text>
                    </Box>
                </Box>
            </Box>
            </Link>
        </Box>
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 40
        }
    };

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
        {/* <Button onClick={toggleTurbo} position="absolute" top="-50px" left={0}>Gold Boost {turbo ? 'on' : 'off'}</Button> */}
          <SimpleGrid columns={{ base: 1, xl: 1 }} spacing={0} position="relative" pb="50px" width="100%" sx={{ ".carousel-item-wrapper": {  }}}>
        {(loading && <Heading>Loading...</Heading>) || (
            <Carousel
            additionalTransfrom={0}
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1s linear"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px carousel-item-wrapper"
                      slidesToSlide={1}
                      renderButtonGroupOutside={false}
                      renderDotsOutside={false}
                      customDot={<CustomCarouselDot />}

        >
            {!turbo &&
              goldVids &&
              goldVids.map((asset, i) => (
                <NFTCard asset={asset} id={i} />
              ))}
            {!turbo &&
              goldVids &&
                goldVids.map((asset, i) => (
                <NFTCard asset={asset} id={i} />
              ))}
          </Carousel>
        )}
      </SimpleGrid>
    </>
  );
};
