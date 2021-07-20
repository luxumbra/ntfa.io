import React, { FC, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export interface NoticeBannerInterface {
  children?: React.ReactElement;
  sx?: any;
}


export const NoticeBanner: FC<NoticeBannerInterface> = ({ children, sx }) => {
  const [active, setActive] = useState(true);

  return (
    <>
      {active ? (
        <Box position="static" width="100%" minW="100vw" height="50px" top="0" left="0" sx={{ sx }}>
          {children ? (
            <>
              {children}
            </>
          ) : (
            <p>Banner</p>
          )}
        </Box>
      ) : (
        <Box position="static" width="100%" minW="100vw" height="50px">
          <p>Closed</p>
        </Box>
      )}
    </>
  );
}
