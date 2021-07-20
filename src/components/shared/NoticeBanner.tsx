import React, { FC, useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
export interface NoticeBannerInterface {
  children?: React.ReactElement;
  sx?: any;
  color?: string;
}

export const get = (key: string): string | null =>
  typeof window === 'undefined' ? null : localStorage.getItem(key);

export const set = (key: string, value: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value);
};
export const remove = (key: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(key);
};

export const NoticeBanner: FC<NoticeBannerInterface> = ({ children, sx, color }) => {
  const [active, setActive] = useState(false);

  const handleCloseClick = async () => {
    setActive(false);
    set("ntfa-banner", "false");
  }

  useEffect(() => {
    (async () => {
      const showBanner = await get("ntfa-banner");
      console.log("showb: ", showBanner);

      if (showBanner === null) {
        await set("ntfa-banner", "true");
        setActive(true);
      } else if (showBanner === "true") {
        setActive(true);
      } else if (showBanner === "false") {
        setActive(false);
      }

    })();

  }, [active, setActive]);

  return (
    <>
      <Box
        position="fixed"
        d="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor={color ? color : "brand.300"}
        backdropFilter="blur(7px)"
        boxShadow="2px 0 5px 3px rgba(0, 0, 0, 0.6)"
        width="100%"
        minW="100vw"
        height="25px"
        bottom="100%"
        transform="translateY(25px)"
        left="0"
        zIndex="2000"
        overflow="hidden"
        transition="opacity 0.5s 0.2s ease, visibility 0.1s 0.6s ease"
        visibility={active ? "visible" : "hidden"}
        opacity={active ? 1 : 0}
        sx={{
          "p": {
            color: "white",
            fontWeight: "800",
            mb: 0
          }
        }}
      >
        <Box position="absolute" display="flex" alignItems="center" top="0" right="2vw" height="25px">
          <Button variant="cta-inverse" onClick={() => handleCloseClick()}>X</Button>
        </Box>
        <Box zIndex="2000">
          {children ? (
            <>
              {children}
            </>
          ) : (
              <Text>Rinkeby testnet. Mainnet NFTs dropping soon!! 😱</Text>
          )}
        </Box>
      </Box>
    </>
  );
}
