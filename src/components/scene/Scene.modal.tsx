import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// @ts-ignore
import BurnMechanics from "../../assets/infographic/burn-mechanics.svg";
// @ts-ignore
import NftBackedImg from "../../assets/infographic/nft-backed.svg";
// @ts-ignore
import ExchangeImg from "../../assets/infographic/exchange.svg";
// @ts-ignore
import GoldImg from "../../assets/infographic/gold.svg";
// @ts-ignore
import ConvertImg from "../../assets/infographic/convert.svg";
// @ts-ignore
import VaultedImg from "../../assets/infographic/vaulted.svg";
// @ts-ignore
import AshImg from "../../assets/infographic/ash.svg";
// @ts-ignore
import ArrowImg from "../../assets/infographic/arrow.svg";
// @ts-ignore
import NftBurnedImg from "../../assets/infographic/nft-burned.svg";

export type SceneModalType = {
  setModalOpen: any;
  modalOpen: boolean;
}

export function SceneModal({ setModalOpen, modalOpen }: SceneModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <Modal isOpen={modalOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay backgroundColor="rgba(0,0,0,0.75)" onClick={() => setModalOpen(!modalOpen)} sx={{
          backdropFilter: "blur(3px)",
        }} />
      <ModalContent sx={{
          background: "linear-gradient(to bottom, rgba(62,95,105,0.6) 50%, rgba(178,207,226,0.8) 100%)",
          backdropFilter: "blur(10px)",
        }}>
          <IconButton onClick={() => setModalOpen(!modalOpen)} aria-label="Close modal" size="sm" variant="cta" icon={<CloseIcon />}
            sx={{
              position: "absolute",
              top: 3,
              right: 3,
              backgroundColor: "transparent",
              width: "32px"
            }} />

        <ModalBody d="flex" justifyItems="center" alignContent="flex-start" p={{ base: "15px", lg: "25px", xl: "50px" }} sx={{
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "uppercase",
            "p > em": {
              color: "red",
              fontStyle: "normal"
            }
          }}>
            <Box d="flex" flexFlow="column wrap" alignItems="center" flex="0 0 100%">
              <Box className="infog1" width="33%" flex="0 0 33%" mb={4} sx={{
                "svg": {
                  filter: "drop-shadow(0 0 3px rgba(0, 0, 0, .4))",
                }
              }}>
                <BurnMechanics />
              </Box>
              <Box className="infog2">
                <Box d="flex" flexFlow="row nowrap" alignItems="center" alignContent="center" justifyContent="space-between" sx={{
                  mb: 5,
                  "div": {
                    alignContent: "center",
                    "svg": {
                      width: "auto",
                      height: "auto",
                    }
                  }
                }}>
                  <Box maxW="20%" flex="0 0 20%">
                    <NftBackedImg />
                  </Box>
                  <Box maxW="15%" flex="0 0 15%">
                    <ExchangeImg />
                  </Box>
                  <Box flex="1 0 30%" width="30%" height="100px" alignItems="center">
                    <GoldImg />
                  </Box>
                  <Box maxW="15%" flex="0 0 15%">
                    <ConvertImg />
                  </Box>
                  <Box maxW="20%" flex="0 0 20%">
                    <VaultedImg />
                  </Box>
                </Box>
                <Box as="p" textAlign="center">An asset-backed NFT is exchanged for the underlying asset & a new <em>non-backed</em> NFT called "burned" NFT</Box>
              </Box>
              <Box className="infog3">
                <Box d="flex" flexFlow="row nowrap" alignItems="center" alignContent="center" justifyContent="space-evenly" sx={{
                  my: 8,
                  "div": {
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    "svg": {
                      width: "auto",
                      height: "100%",
                    }
                  }
                }}>
                  <Box maxW="20%" flex="0 0 20%" sx={{
                    "svg": {
                      maxH: "63px",
                      transform: "scale(1.3)"
                    }
                  }}>
                    <AshImg />
                  </Box>
                  <Box maxW="15%" flex="0 0 15%">
                    <ArrowImg />
                  </Box>
                  <Box maxW="20%" flex="0 0 20%" sx={{
                    justifyItems: "center",
                    "svg": {
                      maxH: "63px",
                    }
                  }}>
                    <NftBurnedImg />
                  </Box>
                </Box>
                <Box as="p" textAlign="center">After this redemption is confirmed, the asset & the new <em>non-backed</em> NFT is yours to keep</Box>
              </Box>
          </Box>
          </ModalBody>
        </ModalContent>
    </Modal>
  );
}
