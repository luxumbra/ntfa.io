import React, { FC } from "react";
import { Box, Link, ButtonGroup } from "@chakra-ui/react";
import NextLink from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export type OpenseaToolbarType = {
  assetOSUrl: string;
  osUrl: string;
  passport: string;
}

export const OpenseaToolbar: FC<OpenseaToolbarType> = ({ assetOSUrl, osUrl, passport }) => {
  return (
    <Box className="openseaToolbar" position="sticky" top={0} d="flex" justifyContent="center" minW="100%" mb={3} sx={{
      "a > svg": {
        opacity: 0.5,
        transition: "opacity 0.2s ease-in-out"
      },
      "a:hover": {
        ">svg": {
          opacity: 1,
        }
      }
    }}>
      <ButtonGroup isAttached sx={{
        backgroundColor: "white",
        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
        overflow: "hidden",
        minW: "100%",
        justifyContent: "center"
      }}>
        <NextLink href={assetOSUrl} passHref>
          <Link variant="cta-small" isExternal>Bid on it! <ExternalLinkIcon mx="2px" /></Link>
        </NextLink>
        <NextLink href={`${osUrl}/collection/ntfa`} passHref>
          <Link variant="cta-small" isExternal>OpenSea Collection <ExternalLinkIcon mx="2px" /></Link>
        </NextLink>
        <NextLink href={passport} passHref>
          <Link variant="cta-small" isExternal>Mattereum Passport <ExternalLinkIcon mx="2px" /></Link>
        </NextLink>
      </ButtonGroup>
    </Box>
  )
}
