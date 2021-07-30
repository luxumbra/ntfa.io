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
  Heading, Link, Image, ButtonGroup, Text,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { OpenSeaPort, Network } from "opensea-js";
import { OpenSeaAsset } from "opensea-js/lib/types";
import { utils } from "ethers";
import { NETWORK, connectWallet, toBaseUnitAmount, toUnitAmount } from "../../constants";
import { stringify } from 'querystring';

export type OpenseaModalType = {
  setModalOpen: any;
  modalOpen: boolean;
  setBidding: any;
  bidding: boolean;
  asset: any | undefined;
  seaport: any;
  userAccount: string | undefined;
}

export function OpenseaModal({ setModalOpen, modalOpen, setBidding, bidding, asset, seaport, userAccount }: OpenseaModalType) {
  const [price, setPrice] = useState(0);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [yourBid, setYourBid] = useState<any>();
  const [isEnded, setIsEnded] = useState(false);
  const [yourOffer, setYourOffer] = useState<any | undefined>();
  // const [asset, setasset] = useState<any | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log("Asssset: ", asset);
  // asset && setasset(asset);
  // const startAuction = (tokenUri) => {
  //   return async () => {
  //     // setAuctionToken(tokenUri);
  //     // setModalVisible(true);
  //   }
  // }

  const placeBid = async (ethAmount, tokenId, id) => {

    setCreatingOrder(true);
    const ethWrap = await seaport.wrapEth({
      amountInEth: ethAmount,
      accountAddress: userAccount,
    });

    ethWrap && setProcessingOrder(true);
    ethWrap && console.log("eth wrap: ", ethWrap);

    // setCreatingOrder(true);


    const offer = await seaport.createBuyOrder({
      asset: {
        tokenId: (tokenId?.toString()),
        tokenAddress: id,
        schemaName: "ERC721",
      },
      accountAddress: userAccount,
      startAmount: ethAmount,
    });

    //  }
    offer && console.log("offer: ", offer);
    offer && setYourOffer(offer);
    offer && setProcessingOrder(false);
    offer && setCreatingOrder(false);

    // debugger;

  }

  const completeAuction = (tokenUri) => {
    return async () => {
      // const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(tokenUri));
      // const nftAddress = readContracts.YourCollectible.address;
      // await tx(writeContracts.Auction.executeSale(nftAddress, tokenId));
      // updateYourCollectibles();
    }
  }

  const cancelAuction = (tokenUri) => {
    return async () => {
      // const tokenId = await readContracts.YourCollectible.uriToTokenId(utils.id(tokenUri));
      // const nftAddress = readContracts.YourCollectible.address;
      // await tx(writeContracts.Auction.cancelAution(nftAddress, tokenId));
      // updateYourCollectibles();
    }
  }





  return (
    <Modal isOpen={modalOpen} onClose={onClose} size={"xl"} isCentered>
      <ModalOverlay backgroundColor="rgba(0,0,0,0.75)" onClick={() => setModalOpen(!modalOpen)} sx={{
        backdropFilter: "blur(3px)",
      }} />
      <ModalContent sx={{
        background: "linear-gradient(to bottom, rgba(62,95,105,0.6) 50%, rgba(178,207,226,0.8) 100%)",
        backdropFilter: "blur(10px)",
      }}>
        <IconButton onClick={() => { (setModalOpen(!modalOpen), setBidding(!bidding)) }} aria-label="Close modal" size="sm" variant="cta" icon={<CloseIcon />}
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
          <Box d="flex" flexFlow="column wrap" alignItems="center" flex="0 0 100%" sx={{
            "h3": {
              d: "inline-flex",
              flexFlow: "column wrap",
              textAlign: "center",
              lineHeight: { base: "14px", xxl: "18px" },
              "strong": {
                display: "block",
                textAlign: "center",
                fontSize: { base: "14px", xxl: "25px" },
                fontWeight: "900",
              },
              "span": {
                fontWeight: "100",
              }
            }
          }}>
            <h3><strong>Bidding on</strong> <span>{asset?.name}</span></h3>
            {asset?.buyOrders && (
              <ul>
                <li>{(asset.buyOrders[0].currentPrice.toNumber() / Math.pow(10, 18))}</li>
              </ul>
            )}
            {/* {creatingOrder && (
              <p>Creating order</p>
            )}
            {creatingOrder && processingOrder && (
              <p>Processing order...</p>
            )}
            {yourOffer && (
              <p>Your bid: {(yourOffer?.currentPrice.toNumber() / Math.pow(10, 18))}</p>
            )} */}
            {/* auctionDetails.push(auctionInfo.isActive ? ( */}
            <Box sx={{ marginTop: "20px" }}>
              <p style={{ fontWeight: "bold" }}>Auction is in progress</p>
              {/* {asset && (
                <p style={{ margin: 0, marginBottom: "2px" }}>Current price is {(asset.buyOrders[0].currentPrice.toNumber() / Math.pow(10, 18))}Ξ </p>
              )} */}
              {/* <p style={{ marginTop: 0 }}>{!isEnded ? `Auction ends at ${format(deadline, "MMMM dd, hh:mm:ss")}` : 'Auction has already ended'}</p> */}
              {/* <div>
                {auctionInfo.maxBidUser === constants.AddressZero ? "Highest bid was not made yet" : <div>Highest bid by: <Address
                  address={auctionInfo.maxBidUser}
                  ensProvider={mainnetProvider}
                  blockExplorer={blockExplorer}
                  minimized={true}
                /><p>{utils.formatEther(auctionInfo.maxBid)} ETH</p></div>}
              </div> */}
              {asset && (
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                    <h2>{asset.collection.name}</h2>
                    <p style={{ margin: 0, marginRight: "15px" }}>Your bid in ETH: </p>
                    {/* <NumberInput defaultValue={(asset.buyOrders[0].currentPrice.toNumber() / Math.pow(10, 18))} value={yourBid && yourBid[asset.tokenId]} onChange={newBid => setYourBid({ [asset.tokenId]: newBid })} style={{ flexGrow: 1 }}>
                      <NumberInputField />
                    </NumberInput> */}
                  </Box>
                  {/* <Button style={{ marginTop: "7px" }} onClick={() => placeBid(yourBid[asset.tokenId], asset.tokenId, asset.tokenAddress)} disabled={!yourBid[asset?.tokenId] || isEnded}>{creatingOrder ? `Placing bid...` : `Place a bid`}</Button> */}
                </Box>
              )}
            </Box>
            {/* ) : null); */}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
