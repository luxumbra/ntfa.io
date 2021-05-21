import React, { FC } from "react";
import {
  Box,
  Button,

} from "@chakra-ui/react";


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
              pos="relative" w="30px" h="30px" mx="10px" overflowY="visible"
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
                transform: `translate3d(0, 0, 0) scale(${active ? 1.2 : 1})`,
                opacity: active ? 1 : 0.8,
                transition: "transform 1s 0.4s ease-in-out, opacity 0.2s 0.4s ease",
                zIndex: 0
            },
            "&:hover": {
                backgroundColor: "transparent",
                "&::after": {
                    opacity: 1,
                },
            },
            "&:focus": {
                boxShadow: "unset"
            },
          }}>
          <Box as="span" pos="absolute" color="accent.primary" bottom="-30px" left="auto" zIndex="200">{ index && index + 1 }</Box>
        </Button>
    // </li>
  );
};
