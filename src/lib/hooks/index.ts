import React, { useContext, useEffect, useState } from 'react';
import { ConnectWalletContext, ConnectWalletContextType } from '../../components/detail/ConnectWalletContext';
// import { useGetMeQuery } from 'graphql/autogen/types';
// import { MeType } from 'graphql/types';
import { useRouter } from 'next/router';
import { OpenSeaPort, Network } from "opensea-js";
import { OpenSeaAsset } from "opensea-js/lib/types";
import { NETWORK, OPENSEA_API_KEY } from "../../constants";

export let seaport: any;
export const useWeb3 = (): ConnectWalletContextType => useContext(ConnectWalletContext);


export const useMounted = (): boolean => {
  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export const newSeaport = () => {

  if (typeof window !== 'undefined') {
    seaport = new OpenSeaPort(window.ethereum, {
      networkName: NETWORK,
      apiKey: OPENSEA_API_KEY,
    });
    return seaport;
  }
  return seaport;
}

export const fetchAsset = async (id: any, tokenId: any) => {

  let price = 0;
  let assetState = {} as OpenSeaAsset;

  if (typeof window !== "undefined") {

    try {
      assetState = await newSeaport().api.getAsset({ tokenAddress: id, tokenId });
      if (assetState.sellOrders && assetState.sellOrders.length > 0) {
        // let price = number | null;
        console.log("Sell orders true");

        for (let i = 0; i < assetState.sellOrders.length; i++) {
          const order = assetState.sellOrders[0];
          const basePrice = (order.basePrice.toNumber() / Math.pow(10, 18));

          if (basePrice < price) {
            price = price;
          } else {
            price = basePrice;
          }
        }

      }

      if (assetState.buyOrders && assetState.buyOrders.length > 0) {
        console.log("Buy orders");

        const buyOrder: any = assetState.buyOrders[0];
        // const buyOrder = osAsset.buyOrders[0];
        const currentPrice = (buyOrder.currentPrice.toNumber() / Math.pow(10, 18));
        price = currentPrice
      }
      return { price, assetState };
    } catch (error) {
      console.log("OS Error: ", error);
      // router.push(current, '/404', { shallow: true });
      // setLoading(false);
      return { price, assetState };
    }
  }
}

export const placeBid = async (ethAmount: any, tokenId: any, id: any, address: any) => {
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [yourBid, setYourBid] = useState<any>();

  let isError: boolean = false;

  console.log("Bid: ", ethAmount, tokenId, id, address);
  try {
    // setIsError(false);
    console.log("fhjdfhkskd", seaport);

    setCreatingOrder(true);
    const ethWrap = await newSeaport().wrapEth({
      amountInEth: ethAmount,
      accountAddress: address,
    });

    if (ethWrap) {
      setProcessingOrder(true);
      setCreatingOrder(false);
    }
    ethWrap && console.log("eth wrap: ", ethWrap);

    // setCreatingOrder(true);

    console.log("order: ", ethAmount, tokenId, id, address);


    const offer = await seaport.createBuyOrder({
      asset: {
        tokenId: (tokenId?.toString()),
        tokenAddress: id,
        schemaName: "ERC1155",
      },
      accountAddress: address,
      startAmount: ethAmount,
    });

    //  }
    offer && console.log("offer: ", offer);
    if (offer) {
      setYourBid(offer);
      setProcessingOrder(false);
      setCreatingOrder(false);
    }
    return { yourBid, creatingOrder, processingOrder };
  } catch (error) {
    console.log("placeBid() error: ", error);
    isError = true;
    return [isError, error];
  }

}
