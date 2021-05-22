import React, { FC } from "react";
import {
    Box,
    Button,
    Image
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
      <li key={index}>
      <Button
        backgroundColor={active ? "transparent" : "transparent" }
              onClick={() => onClick()}
              w="100%" pt="100%" maxW="10px" maxH="10px" mr={{base: "0"}} overflowY="visible"
          sx={{
              fontSize: "14px",
              fontFamily: "Federal",
              color: "white",
              position: "relative",
            // "&::after": {
            //     content: "''",
            //     backgroundImage: "url(/assets/ntfa-logo.png)",
            //     backgroundSize: "contain",
            //     backgroundRepeat: "no-repeat",
            //     filter: "drop-shadow(0 0 5px rgba(0,0,0,.4))",
            //     position: "absolute",
            //     top: 0,
            //     right: 0,
            //     height: "100%",
            //     width: "100%",
            //     transform: `translate3d(0, 0, 0) scale(${active ? 1.2 : 1})`,
            //     opacity: active ? 1 : 0.8,
            //     transition: "transform 1s 0.4s ease-in-out, opacity 0.2s 0.4s ease",
            //     zIndex: 0
            // },
            "&:hover": {
                backgroundColor: "transparent",
                "&::after, img": {
                    opacity: 0.8,
                },
            },
              "&:focus": {
                backgroundColor: "transparent",
                boxShadow: "unset",
              },
            "&:active": {
                backgroundColor: "transparent"
            },
          }}>
          <Image src="/assets/100g.png" sx={{
                filter: "drop-shadow(0 0 5px rgba(0,0,0,.4))",
                position: "absolute",
                top: 0,
                right: 0,
                minHeight: "100%",
                maxWidth: "30px",
                width: "100%",
                transform: `translate3d(0, 0, 0) scale(${active ? 1.2 : 1})`,
                opacity: active ? 1 : 0.6,
                transition: "transform 1s 0.4s ease-in-out, opacity 0.2s 0.4s ease",
                objectFit: "contain"
          }} />
        </Button>
     </li>
  );
};
