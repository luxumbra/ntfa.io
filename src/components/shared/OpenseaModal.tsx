import React, { useState, useEffect } from 'react';
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
import { NETWORK, OPENSEA_API_KEY, toUnitAmount, toBaseUnitAmount } from "../../constants";
import { stringify } from 'querystring';

export let seaport: any;
export let provider: any;
export let web3: any;
export let accounts: any;

export type OpenseaModalType = {
  setModalOpen: any;
  modalOpen: boolean;
  setBidding: any;
  bidding: boolean;
  asset: any;
  seaport: any;
  userAccount: string | undefined;
}

export const placeBid = async (ethAmount: any, tokenId: any, id: any, userAccount: any) => {
  let creatingOrder: boolean = false;
  let processingOrder: boolean = false;
  let isError: boolean = false;
  let yourOffer: any | null;

  try {
    // setIsError(false);
    console.log("fhjdfhkskd", seaport);

    !seaport && false;
    creatingOrder = true;
    const ethWrap = await seaport.wrapEth({
      amountInEth: ethAmount,
      accountAddress: userAccount,
    });

    if (ethWrap) {
      processingOrder = true;
      creatingOrder = false;
    }
    ethWrap && console.log("eth wrap: ", ethWrap);

      // setCreatingOrder(true);

    console.log("order: ", ethAmount, tokenId, id);


    const offer = await seaport.createBuyOrder({
      asset: {
        tokenId: (tokenId?.toString()),
        tokenAddress: id,
        schemaName: "ERC1155",
      },
      accountAddress: userAccount,
      startAmount: ethAmount,
    });

    //  }
    offer && console.log("offer: ", offer);
    if (offer) {
      yourOffer = offer;
      processingOrder = false;
      creatingOrder = false;
    }
    return { yourOffer, creatingOrder, processingOrder };
  } catch (error) {
    console.log("placeBid() error: ", error);
    isError = true;
    return [isError, error];
  }

}

export function OpenseaModal({ setModalOpen, modalOpen, setBidding, bidding, asset, seaport, userAccount }: OpenseaModalType) {
  const [isError, setIsError] = useState<any | undefined>();
  const [price, setPrice] = useState(0);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [yourBid, setYourBid] = useState<any>();
  const [isEnded, setIsEnded] = useState(false);
  const [yourOffer, setYourOffer] = useState<any | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();


  asset !== "undefined" ? console.log("🙌 data : ", asset) : console.log("😥 data lost...");

  seaport = seaport;


  const buyOrder = asset?.buyOrders && asset.buyOrders[0];
  buyOrder && setPrice((buyOrder.currentPrice.toNumber() / Math.pow(10, 18)));



  // const completeAuction = (tokenUri) => {
  //   return async () => {
  //   }
  // }

  // const cancelAuction = (tokenUri) => {
  //   return async () => {
  //   }
  // }

  // const setTheState = async (stuff) => {
  //   console.log("set the state: ", stuff.tokenId);
  //   const theAsset = fetchAsset(stuff.tokenAddress, stuff.tokenId)
  //   theAsset ? console.log("🎉 theAsset: ", theAsset) : console.log("😥 theAsset data lost...")
  //   theAsset && setAssetState(theAsset)
  // }



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
          fontFamily: "'Hero', sans-serif",
          textTransform: "uppercase",
          textAlign: "center",
        }}>
          <Box d="flex" flexFlow="column wrap" alignItems="center" flex="0 0 100%" sx={{
            "h3": {
              d: "inline-flex",
              flexFlow: "column wrap",
              textAlign: "center",
              lineHeight: { base: "14px", xxl: "28px" },
              "strong": {
                display: "block",
                textAlign: "center",
                fontSize: { base: "14px", xxl: "28px" },
                fontWeight: "900",
              },
              "span": {
                fontWeight: "100",
                fontSize: { base: "14px", xxl: "32px" },
              }
            },
            "ul li": {
              fontSize: { base: "16px", xxl: "25px" }
            },
            "p": {
              fontSize: { base: "16px", xxl: "25px" }
            },
            backdropFilter: "blur(0)"
          }}>
            <p style={{ fontWeight: "bold" }}>{!isEnded ? `Auction is in progress` : `Auction has finished`}</p>
            <h3><strong>Bidding on</strong> <span>{asset?.name}</span></h3>
            {asset?.buyOrders && (
              <>
                <ul>
                  {asset.buyOrders.length > 0 && asset.buyOrders.map((order: any) => {
                    <li>{toUnitAmount(order.currentPrice)}</li>
                  })}
              </ul>
              </>
            )}
            {creatingOrder && (
              <p>Creating order</p>
            )}
            {creatingOrder && processingOrder && (
              <p>Processing order...</p>
            )}
            {isError && (
              <p>Error in transaction. Try again</p>
            )}
            {yourOffer && (
              <p>Your bid: {(yourOffer?.currentPrice.toNumber() / Math.pow(10, 18))}</p>
            )}
            {/* auctionDetails.push(auctionInfo.isActive ? ( */}
            <Box sx={{ marginTop: "20px" }}>
              <p style={{ margin: 0, marginBottom: "2px" }}>{!price ? "You're the first to bid!" : `Current price: Ξ${(buyOrder?.currentPrice.toNumber() / Math.pow(10, 18))}`}</p>
              {/* <p style={{ marginTop: 0 }}>{!isEnded ? `Auction ends at ${format(deadline, "MMMM dd, hh:mm:ss")}` : 'Auction has already ended'}</p> */}
              {/* <div>
                {auctionInfo.maxBidUser === constants.AddressZero ? "Highest bid was not made yet" : <div>Highest bid by: <Address
                  address={auctionInfo.maxBidUser}
                  ensProvider={mainnetProvider}
                  blockExplorer={blockExplorer}
                  minimized={true}
                /><p>{utils.formatEther(auctionInfo.maxBid)} ETH</p></div>}
              </div> */}
              {/* {data && (
                <Box>
                  <Box sx={{ display: "flex", flexFlow: "column wrap", alignItems: "center", marginTop: "20px" }}>
                    <p style={{ margin: 0, marginRight: "15px" }}>Bid amount in ETH:</p>
                    <NumberInput defaultValue={`Set your bid amount`} value={yourBid && yourBid[data.tokenId]} onChange={newBid => setYourBid({ [data.tokenId]: newBid })} style={{ flexGrow: 1 }}>
                      <NumberInputField />
                    </NumberInput>
                  </Box>
                  <Button isLoading={creatingOrder} loadingText={`Placing bid...`} style={{ marginTop: "7px" }} onClick={() => placeBid(yourBid[data.tokenId], data.tokenId, data.tokenAddress, userAccount)} disabled={!yourBid || isEnded}>{!creatingOrder && `Make a bid`}</Button>
                </Box>
              )} */}
            </Box>
            {/* ) : null); */}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
