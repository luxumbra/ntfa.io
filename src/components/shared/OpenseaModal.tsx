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
import { ConnectButton } from "../detail/ConnectButton";

export let seaport: any;
export let provider: any;
export let web3: any;
export let accounts: any;

export type OpenseaModalType = {
  // setModalOpen: any;
  // setBidding: any;
  asset: any;
}


export const OpenBidModalButton: FC = () => {
  const {
    bidding,
    modalOpen,
    onClickBidModalOpen,
    onClickBidModalClose,
    address
  } = useWeb3();

  return (
    <>
      {address ? (
        <>
          <ConnectButton />
          <Button isLoading={bidding} loadingText="Bid in progress..." width="auto" pt="5px" variant="cta-small" onClick={() => !modalOpen ? onClickBidModalOpen() : onClickBidModalClose()}> {`Bid`}</Button >
        </>
      ) : (
        <ConnectButton />
      )}
    </>
  )
}

export function OpenseaModal({ asset }: OpenseaModalType) {
  const [isError, setIsError] = useState({ state: false, message: "" } as { state: boolean, message: string });
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

  // asset && console.log("🙌 data : ", asset);

  const placeBid = async (ethAmount: any, tokenId: any, id: any) => {

    console.log("Bid: ", ethAmount, tokenId, id);
    try {
      setIsError({ state: false, message: "" });
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

      // const ethWrap = await newSeaport().wrapEth({
      //   amountInEth: ethAmount,
      //   accountAddress: address,
      // });
      // openSeaPort.addListener(EventType.WrapEth, ({ accountAddress, amount }) => {
      //   console.info({ accountAddress, amount })
      //   dispatch({ type: ActionTypes.WRAP_ETH })
      // })
      offer && console.log("offer: ", typeof offer);
      if (offer) {
        doCreatingOrder(false);
        doSendingOrder(true)
        // storeBid("", 0, "0x");
      }
      // we don't need ethWrap as all we need currently is to place the offer. eth wrap sends the eth for it.
      // if (ethWrap) {
      //   console.log("eth wrap: ", ethWrap);
      //   doCreatingOrder(false);
      //   doSendingOrder(false);
      //   console.log("order: ", ethAmount, tokenId, id, address);
      //   storeBid(null, null, null);
      //   priceSetter(+ethAmount);
      // }

      return true;
    } catch (error) {
      console.info("placeBid() error: ", error);
      setIsError({ state: true, message: error.message });
      doCreatingOrder(false);
      doSendingOrder(false);
      // storeBid("", 0, "0x");
      return false;
    }

  }

  return (
    <>
      <OpenBidModalButton />

      <Modal isOpen={modalOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay backgroundColor="rgba(0,0,0,0.7)" onClick={() => onClickBidModalClose()} sx={{
          backdropFilter: "blur(8px)",
          }} />
          <ModalContent sx={{
          background: "linear-gradient(to bottom, rgba(62,95,105,1) 50%, rgba(178,207,226,1) 100%)",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)"
          }}>
          <IconButton onClick={onClickBidModalClose} aria-label="Close modal" size="sm" variant="cta" icon={<CloseIcon />}
              sx={{
                position: "absolute",
                top: 3,
                right: 3,
                backgroundColor: "transparent",
                width: "32px",
                zIndex: 200
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
                  lineHeight: { base: "22px", xl: "28px" },
                  "strong": {
                    display: "block",
                    textAlign: "center",
                    fontSize: { base: "20px", xl: "28px" },
                    fontWeight: "900",
                  },
                  "span": {
                    color: "brand.100",
                    fontWeight: "100",
                    fontSize: { base: "24px", xl: "32px" },
                  }
                },
                "ul li": {
                  fontSize: { base: "16px", xl: "25px" }
                },
                "p": {
                  fontSize: { base: "18px", xl: "25px" }
                },
                backdropFilter: "blur(0)"
              }}>
                <p style={{ fontWeight: "bold" }}>{!isEnded ? `Auction is in progress` : `Auction has finished`}</p>
                <h3><strong>Bidding on</strong> <span>{asset?.name}</span></h3>

              <Box sx={{
                color: "brand.200",
                "p": {
                  fontSize: {
                    base: "12px", xl: "16px"
                  },
                  fontWeight: "900"
                }
              }}>
                {creatingOrder && (
                  <p>Creating bid...</p>
                )}
                  {sendingOrder && (
                    <p>🎉 Bid sent to OpenSea! 🎉</p>
                )}
                {isError.state && (
                  <p>{isError.message}</p>
                  )}
                </Box>
              {yourBid && yourBid.amount !== 0 && (
                  <Box sx={{
                    color: yourBid.amount <= price ? `brand.200` : `white`,
                  transition: "color 0.2s ease",
                  fontWeight: "900",
                    // "span": {
                    //   fontSize: {base: "20px"},
                    //   "& + span": {
                    //     fontSize: "18px",
                    //     fontWeight: "900"
                    //   }
                    // }
                  }}>
                    <p><span>Your bid: {yourBid.amount}</span></p>
                  </Box>
                )}
                {/* auctionDetails.push(auctionInfo.isActive ? ( */}
              <Box>
                  <p style={{ margin: 0, marginBottom: "2px" }}>{!price ? "You're the first to bid! 🐷" : `Current price: Ξ${price}`}</p>
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
                      <p style={{ margin: "0" }}>Bid amount in ETH:</p>
                        <NumberInput defaultValue={`Set your bid amount`} min={price} value={yourBid && yourBid.amount} onChange={newBid => storeBid(asset.token_id, newBid, asset.asset_contract.address)} style={{ flexGrow: 1 }} errorBorderColor="brand.200">
                          <NumberInputField />
                        </NumberInput>
                      {yourBid && yourBid.amount <= price && (<Box as="span" color="brand.900">{`Bid over Ξ${price}`}</Box>)}
                      </Box>
                    <Button isLoading={creatingOrder} loadingText={`Placing bid...`} style={{ marginTop: "7px" }} onClick={() => placeBid(yourBid?.amount, yourBid?.asset, yourBid?.assetAddress)} disabled={!yourBid || isEnded || yourBid.amount <= price} variant="cta">{!creatingOrder && `Make a bid`}</Button>
                    </Box>
                  )}
                </Box>
                {/* ) : null); */}
              </Box>
            </ModalBody>
          </ModalContent>
      </Modal>
    </>
  );
}
