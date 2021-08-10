import React, { FC, useState } from "react";
import { Box, Link, ButtonGroup } from "@chakra-ui/react";
import NextLink from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useWeb3 } from '../../lib/hooks';

export type OpenseaToolbarType = {
  bid: string | React.ReactElement;
  osUrl: string;
  passport: string;
}

export const OpenseaToolbar: FC<OpenseaToolbarType> = ({ bid, osUrl, passport }) => {
  const {
    price
  } = useWeb3();

  return (
    <>
      {!passport ? (
        <Box>Loading...</Box>
      ) : (
          <Box className="openseaToolbar" position="sticky" top={0} d="flex" justifyContent="center" minW="100%" mb={3} zIndex={2} sx={{
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
              alignItems: "stretch",
              justifyContent: "center",
              "a, button": {
                d: "inline-flex",
                alignItems: "center",
                py: 0
              }
            }}>
              {typeof bid === "string" ? (
                <NextLink href={bid} passHref>
                  <Link variant="cta-small" isExternal>Bid on it! <ExternalLinkIcon ml="2px" /></Link>
                </NextLink>
              ) : (
                bid
              )}
              <NextLink href={`${osUrl}/collection/ntfa`} passHref>
                <Link variant="cta-small" isExternal>OpenSea Collection <ExternalLinkIcon ml="2px" /></Link>
              </NextLink>
              <NextLink href={passport} passHref>
                <Link variant="cta-small" isExternal>Mattereum Passport <ExternalLinkIcon ml="2px" /></Link>
              </NextLink>
            </ButtonGroup>
          </Box>

      )}
    </>
  )
}
