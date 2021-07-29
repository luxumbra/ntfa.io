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

import { NFTCard } from "./NFTCard"
import { CustomCarouselDot } from "./CustomCarouselDot";
//

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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
            partialVisibilityGutter: 30
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 10
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 10
        }
    };

  useEffect(() => {
    getCollection = axios
      .get(
        `https://api.opensea.io/api/v1/assets?order_direction=asc&collection=${collection}`
      )
      .then((response) => {
        console.log(response);
        // setGoldAssets(response.data.assets.slice(0, 2));
        // setAssets(response.data.assets.slice(3));
        setGoldAssets(response.data.assets);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [collection]);

  return (
    <>
        {/* <Button onClick={toggleTurbo} position="absolute" top="-50px" left={0}>Gold Boost {turbo ? 'on' : 'off'}</Button> */}
          <SimpleGrid columns={{ base: 1, xl: 1 }} rows={2} spacing={0} position="relative" width="100%" sx={{ ".custom-dot-list-style": { maxH: "15px" }}}>
              {(loading && <Heading sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "rgba(255,255,255,0.6)",
                  textShadow: "0 0 5px rgba(0,0,0,0.6)"}}>Burning FIAT...</Heading>) || (
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
            partialVisible
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            customDot={<CustomCarouselDot />}
        >
            {/* {!turbo &&
              goldVids &&
              goldVids.map((asset, i) => (
                <NFTCard asset={asset} id={i} />
              ))} */}
            {goldAssets &&
              goldAssets.map((asset, i) => (
                <NFTCard asset={asset} id={i} />
              ))}
          </Carousel>
        )}
      </SimpleGrid>
    </>
  );
};
