import React, { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Heading,
  ButtonGroup,
  Button,
  Image,
  SimpleGrid,
    IconButton,
  Link,
  transition
} from "@chakra-ui/react";
// import Link from 'next/link';
import Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";
import axios from "axios";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";

export let getCollection: any;

export interface ShowcaseGridInterface {
  collection: string;
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
      name: "Piggy Banksy 1oz",
      path: `/assets/nfts/PiggyBanksy619263_smallcloud.mp4`,
    },
    {
      name: "Space Cowboy 50g",
      path: `/assets/nfts/Space_Cowboy_8642.mp4`,
    },
    {
      name: "Vector 777 100g",
      path: `/assets/nfts/Vector150768.mp4`,
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
      {/* <Button
        className="turboToggle"
        onClick={toggleTurbo}
        position="absolute"
        top="-50px"
      >
        Turbo Gold
      </Button> */}
      <SimpleGrid columns={[1,3]} spacing={3} width="100%">
        {(loading && <p>Loading...</p>) || (
          <>
            {turbo &&
              goldAssets &&
              goldAssets.map((asset, i) => (
                <Box
                  key={i}
                  opacity={turbo ? 1 : 0}
                  transition="opacity 0.3s .3s ease-in"
                  alignContent="center"
                  display="flex"
                >
                  <Box
                    position="relative"
                    width="100%"
                    height="auto"
                    zIndex={300}
                    color="white"
                  >
                    <Box
                      className="playerWrapper"
                      position="relative"
                      paddingTop={`${(212 / 373) * 100}%`}
                      width="100%"
                      maxWidth="512px"
                      zIndex={200}
                      overflow="hidden"
                      flex="1 0 100%"
                      boxShadow="0 0 8px rgba(0,0,0,0.8)"
                    >
                      <ReactPlayer
                        url={goldVids[i].path}
                        playing={false}
                        loop={true}
                        width="100%"
                        height="100%"
                        controls={true}
                        style={{
                          position: "absolute",
                          left: `0`,
                          top: `0`,
                          zIndex: 200,
                        }}
                      />
                    </Box>
                    {/* <Box p="10px">
                                    <h3>{asset.name}</h3>
                                </Box> */}
                  </Box>
                </Box>
              ))}
            {!turbo &&
              assets &&
              assets.map((asset, i) => (
                <Link
                      key={i}
                      href={`/details/${i}`}
                      opacity={turbo ? 0 : 1}
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
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              height: "60px",
                              width: "60px",
                              transform: "translate3d(0, 40px, 0)",
                              opacity: 0,
                              transition: "transform 2.4s 0.4s ease-in-out, opacity 0.2s 0.4s ease"
                          },
                        //   "&::before": {
                        //       content: "'Get the low down'",
                        //       display: "inline-flex",
                        //       alignItems: "center",
                        //       justifyContent: "center",
                        //       position: "absolute",
                        //       color: "white",
                        //       backgroundColor: "accent.primary",
                        //       width: "100%",
                        //       height: "50px",
                        //     bottom: 0,
                        //       right: 0,
                        //       opacity: 0,
                        //       transform: "translate3d(0, 40px, 0)",
                        //       transition: "transform 0.5s ease-in, opacity 0.2s ease-in"
                        //   },
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
                    position="relative"
                    width="100%"
                          maxHeight={`233px`}
                          height="100%"
                    zIndex={300}
                    color="white"
                    flex="0 1 auto"
                  >
                    <Box
                      className="playerWrapper"
                      position="relative"
                      paddingTop={`${(212 / 373) * 100}%`}
                      width="100%"
                      maxWidth="512px"
                      zIndex={200}
                      overflow="hidden"

                    >
                      <ReactPlayer
                        url={goldVids[i].path}
                        playing={false}
                        loop={true}
                        width="100%"
                        height="100%"
                        controls={true}
                        style={{
                          position: "absolute",
                          left: `0`,
                          top: `0`,
                          zIndex: 200,
                        }}
                      />
                    </Box>
                  </Box>
                      <Box position="relative" width="100%" p={["1% 2%", "20px 15px 15px"]} display="flex" flexFlow="column nowrap">
                          <Heading as="h3" fontSize={["10px", "16px"]} color="accent.primary">{goldVids[i].name}</Heading>
                          <Box fontSize={["10px", "0.7vw"]} color="black.300" display={["none", "block"]}>Curabitur blandit mollis lacus. Curabitur ullamcorper ultricies nisi. Phasellus a est. Aenean commodo ligula eget dolor.</Box>
                      </Box>
                </Link>
              ))}
          </>
        )}
      </SimpleGrid>
    </>
  );
};
