import { useContext, useEffect, useState } from 'react';
import { ConnectWalletContext, ConnectWalletContextType } from '../../components/detail/ConnectWalletContext';
// import { useGetMeQuery } from 'graphql/autogen/types';
// import { MeType } from 'graphql/types';
import { utils } from 'ethers';
import axios from 'axios';
import { OpenSeaPort, Network } from "opensea-js";
import { OpenSeaAsset, OrderSide } from "opensea-js/lib/types";
import { NETWORK, OPENSEA_API_KEY, OPENSEA_API } from "../../constants";

export let seaport: any;
export const useWeb3 = (): ConnectWalletContextType => useContext(ConnectWalletContext);


export const useMounted = (): boolean => {
  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [hasMounted, setHasMounted] = useState(false);
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

export const fetchAssetApi = async (id: any, tokenId: any): Promise<any> => {
  let price = 0;
  let assetState = {} as OpenSeaAsset;
  let buyOrders = [] as any;
  const orderSide = 0;


  if (typeof window !== "undefined") {
    try {
      const assetRequest = await axios.get(`${OPENSEA_API}/asset/${id}/${tokenId}`, {
        headers: {
          'X-API-KEY': process.env.NEXT_OPENSEA_API_KEY,
        }
      });
      assetRequest && console.log("request: ", assetRequest);
      if (assetRequest) {
        const { data } = assetRequest
        assetState = data;

        buyOrders = data.orders.filter((o: any) => o.side === orderSide);
        if (buyOrders && buyOrders.length > 0) {
          console.log("Buy orders");

          const buyOrder: any = buyOrders[0];
          // console.log(typeof +buyOrder.current_price, buyOrder.current_price);
          const currentPrice = (+buyOrder.current_price / Math.pow(10, 18));
          // debugger;
          price = currentPrice
        }
        return { price, assetState };
      }

    } catch (error) {
      console.log("OS API Error: ", error);
      throw new Error(error);

      // setLoading(false);
      // return null;
    }
  }
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
      console.log("Asset: ", assetState);

      return { price, assetState };
    } catch (error) {
      console.log("OS Error: ", error);
      // router.push(current, '/404', { shallow: true });
      // setLoading(false);
      return { price, assetState };
    }
  }
}

// export type FetchAssetOrdersType = {
//   tokenAddress: string,
//   tokenId: string,
// }
export const fetchAssetOrders = async (tokenAddress: string, tokenId: string) => {
  const { orders, count } = await newSeaport().api.getOrders({
    asset_contract_address: tokenAddress,
    token_id: tokenId,
    side: OrderSide.Buy
  })
  count && console.log(`We have ${count} orders!`, orders);

  return { orders, count };
}

export const formatAddress = (address: string | null) => {
  if (!address) return;
  return utils.getAddress(address);
}
// export const getLatestPrice = async (tokenAddress: string, tokenId: string) => {
//   let play: any = false;

//   play = await setTimeout(() => {
//     return true;
//   }, 20000);

//   if (play) {
//     const { orders } = await fetchAssetOrders(tokenAddress, tokenId)
//     setInterval(() => {
//       console.log("Updating price...");

//       console.log(`Price updated ${(orders[0].currentPrice.toNumber() / Math.pow(10, 18))}`);
//       return orders ? (orders[0].currentPrice.toNumber() / Math.pow(10, 18)) : `fetching`;
//     }, 5000);
//   }
// }
