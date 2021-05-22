import React, { FC } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";


export interface NFTCardInterface {
    asset: any;
    id: number;
}

export const NFTCard: FC<NFTCardInterface> = ({ asset, id }) => {
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
            boxShadow="0 0 10px rgba(0,0,0,0.7)"
            position="relative"
            paddingTop={{base: `${(207 / 305) * 100}%`, xl: "83%", xxl: "81%", xxxl: "81%"}}
            maxWidth={{base: "280px", xl: "260px", xxl: "290px", xxxl: "400px"}}
            width="100%"
                height="0"
            overflow="hidden"
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
                    transition: "transform 2.4s 0.4s ease-in-out, opacity 0.2s 0.4s ease",
                    zIndex: 300
                },
                "&:hover": {
                    boxShadow: `0 0 5px rgba(0,0,0,0.4)`,
                    color: "initial",
                    "&::after": {
                        transform: "translate3d(0, -400%, 0)",
                        opacity: 1
                    },
                    "&::before": {
                        color: "accent.primary",
                        opacity: 1
                    }
                },
                "&::before": {
                    content: `'View ${asset.title}'`,
                    color: "accent.primary",
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 0,
                    right: 0,
                    height: `${100 - (212 / 373) * 100}%`,
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(5px)",
                    textAlign: "center",
                    // transform: `translate3d(0, ${100 - (212 / 373)}%, 0)`,
                    opacity: 0,
                    transition: "all 0.2s ease-in-out",
                    zIndex: 200
                }
            }}
        >
            <Box position="absolute" top="0" left="0" w="100%" h="100%">
                <Box
                className="playerWrapper"
                position="relative"
                paddingTop={`${(212 / 373) * 100}%`}
                height="0"
                width="100%"
                zIndex={400}
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
                        zIndex: 410,
                        }}
                    />
                </Box>
                <Box position="relative" width="100%" p={{base: "4%"}} d={{base: "block", xl: "block"}} h="auto">
                    <Heading as="h3" fontSize={{ base: "10px", xl: "14px", xxxl: "16px" }} color="accent.primary" mb="5px">{asset.title}</Heading>
                    <Box d={{base: "none", xl: "block"}}>
                        <Text noOfLines={{ base: 2, xl: 3 }}>
                                {truncateString(asset.summary, 200)}
                        </Text>
                    </Box>
                </Box>
            </Box>
            </Link>
        </Box>
    )
}