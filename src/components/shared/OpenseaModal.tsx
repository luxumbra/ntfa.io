import { FC, useState, useEffect, useCallback } from 'react';
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
import { newSeaport, useWeb3 } from '../../lib/hooks';

export let seaport: any;
export let provider: any;
export let web3: any;
export let accounts: any;

export type OpenseaModalType = {
  // setModalOpen: any;
  // setBidding: any;
  asset: OpenSeaAsset;
}



export const OpenBidModalButton: FC = () => {
  const {
    bidding,
    modalOpen,
    onClickBidModalOpen,
    onClickBidModalClose
  } = useWeb3();

  return (
    <Button isLoading={bidding} loadingText="Bid in progress..." width="auto" pt="5px" variant="cta" onClick={() => !modalOpen ? onClickBidModalOpen() : onClickBidModalClose()}>{`BID`}</Button>
  )
}

export function OpenseaModal({ asset }: OpenseaModalType) {
  const [isError, setIsError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    address,
    bidding,
    modalOpen,
    onClickBidModalOpen,
    onClickBidModalClose,
    price,
    yourBid,
    isEnded,
    creatingOrder,
    processingOrder,
    storeBid,
    doCreatingOrder,
    doProcessingOrder,
    doSendingOrder,
    sendingOrder,
    priceSetter
  } = useWeb3();

  // asset !== "undefined" ? console.log("🙌 data : ", asset) : console.log("😥 data lost...");

  const placeBid = async (ethAmount: any, tokenId: any, id: any) => {

    console.log("Bid: ", ethAmount, tokenId, id);
    try {

      doCreatingOrder(true);
      const offer = await newSeaport().createBuyOrder({
        asset: {
          tokenId: tokenId,
          tokenAddress: id,
          schemaName: "ERC1155",
        },
        accountAddress: address,
        startAmount: ethAmount,
      });

      const ethWrap = await newSeaport().wrapEth({
        amountInEth: ethAmount,
        accountAddress: address,
      });
      // openSeaPort.addListener(EventType.WrapEth, ({ accountAddress, amount }) => {
      //   console.info({ accountAddress, amount })
      //   dispatch({ type: ActionTypes.WRAP_ETH })
      // })
      offer && console.log("offer: ", offer);
      if (offer) {
        doCreatingOrder(false);
        doSendingOrder(true)
        // storeBid({ null, null, null});
      }
      if (ethWrap) {
        console.log("eth wrap: ", ethWrap);
        doCreatingOrder(false);
        doSendingOrder(false);
        console.log("order: ", ethAmount, tokenId, id, address);
        storeBid(null, null, null);
        priceSetter(+ethAmount);
      }

      return true;
    } catch (error) {
      console.log("placeBid() error: ", error);
      return error;
    }

  }

  return (
    <>
      <OpenBidModalButton />
      <Box>
        <Modal isOpen={modalOpen} onClose={onClose} size={"xl"} isCentered>
          <ModalOverlay backgroundColor="rgba(0,0,0,0.75)" onClick={() => onClickBidModalClose()} sx={{
            backdropFilter: "blur(3px)",
          }} />
          <ModalContent sx={{
            background: "linear-gradient(to bottom, rgba(62,95,105,0.6) 50%, rgba(178,207,226,0.8) 100%)",
            backdropFilter: "blur(10px)",
          }}>
            <IconButton onClick={() => onClickBidModalClose()} aria-label="Close modal" size="sm" variant="cta" icon={<CloseIcon />}
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
              backdropFiler: "blur(0px)"
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
                <Box sx={{ color: "brand.200" }}>
                {creatingOrder && (
                    <p>Creating order...</p>
                )}
                  {sendingOrder && (
                    <p>Bid sent to OpenSea!</p>
                )}
                {isError && (
                  <p>Error in transaction. Try again</p>
                  )}
                </Box>
                {yourBid && (
                  <Box sx={{
                    color: yourBid.amount < price ? `brand.200` : `brand.900`,
                    "span": {
                      fontSize: "20px",
                      "& + span": {
                        fontSize: "14px"
                      }
                    }
                  }}>
                    <p><span>Your bid: {yourBid.amount}</span> <span>{yourBid.amount < price && `Bid over Ξ${price}`}</span></p>
                  </Box>
                )}
                {/* auctionDetails.push(auctionInfo.isActive ? ( */}
                <Box sx={{ marginTop: "20px" }}>
                  <p style={{ margin: 0, marginBottom: "2px" }}>{!price ? "You're the first to bid!" : `Current price: Ξ${price}`}</p>
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
                      <Box sx={{ display: "flex", flexFlow: "column wrap", alignItems: "center", marginTop: "20px" }}>
                        <p style={{ margin: 0, marginRight: "15px" }}>Bid amount in ETH:</p>
                        <NumberInput defaultValue={`Set your bid amount`} value={yourBid && yourBid.amount} onChange={newBid => storeBid(asset.tokenId, newBid, asset.tokenAddress)} style={{ flexGrow: 1 }}>
                          <NumberInputField />
                        </NumberInput>
                      </Box>
                      <Button isLoading={creatingOrder} loadingText={`Placing bid...`} style={{ marginTop: "7px" }} onClick={() => placeBid(yourBid?.amount, yourBid?.asset, yourBid?.assetAddress)} disabled={!yourBid || isEnded || yourBid.amount < price} variant="cta">{!creatingOrder && `Make a bid`}</Button>
                    </Box>
                  )}
                </Box>
                {/* ) : null); */}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
