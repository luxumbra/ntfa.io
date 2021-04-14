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
} from "@chakra-ui/react";
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
      path: `/assets/nfts/PiggyBanksy619262.mp4`,
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
      <SimpleGrid columns={3} spacing={3} width="100%">
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
                <Box
                  key={i}
                  opacity={turbo ? 0 : 1}
                  transition="opacity 0.3s .3s ease-in"
                  alignItems="center"
                  display="flex"
                >
                  <Box
                    position="relative"
                    width="100%"
                    height={`${(212 / 373) * 100}%`}
                    zIndex={300}
                          color="white"
                          borderRadius="6px"
                          overflow="hidden"
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
                </Box>
              ))}
          </>
        )}
      </SimpleGrid>
    </>
  );
};
