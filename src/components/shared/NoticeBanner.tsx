import React, { FC, useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
export interface NoticeBannerInterface {
  children?: React.ReactElement;
  sx?: any;
  color?: string;
}


export const NoticeBanner: FC<NoticeBannerInterface> = ({ children, sx, color }) => {
  const [active, setActive] = useState(true);

  return (
    <>
      <Box
        position="fixed"
        d="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor={color ? color : "rgba(252, 121, 178, 0.8)"}
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
        transistion="opacity 0.3s ease"
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
          <Button variant="cta-inverse" onClick={() => setActive(!active)}>X</Button>
        </Box>
        <Box zIndex="2000">
          {children ? (
            <>
              {children}
            </>
          ) : (
              <Text>Banner</Text>
          )}
        </Box>
      </Box>
    </>
  );
}
