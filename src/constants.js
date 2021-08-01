import * as Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { PortisProvider } from 'portis'
import { OpenSeaPort, Network } from "opensea-js";
//

export const GOOGLE_ANALYTICS_ID = 'UA-111688253-4'
export const OPENSEA_API_KEY = "6f3c486638da4a48bcc2e2e8c89baab9"
export const OPENSEA_URL = "https://testnets.opensea.io"
export const OPENSEA_API = "https://rinkeby-api.opensea.io/api/v1"
export const OPENSEA_JS_URL = "https://github.com/ProjectOpenSea/opensea-js"
export const GITHUB_URL = "https://github.com/ProjectOpenSea/ships-log"
export const DEFAULT_DECIMALS = 18
export const NETWORK = Network.Rinkeby
export let web3Provider = typeof web3 !== 'undefined'
  ? window.web3.currentProvider
  : new Web3.providers.HttpProvider('https://rinkeby.infura.io')

// Replace this with Redux for more complex logic
const networkCallbacks = []
export const onNetworkUpdate = (callback) => {
  networkCallbacks.push(callback)
}

export async function connectWallet() {
  if (!window.web3) {
    web3Provider = new PortisProvider('2f66de47-3edd-4a83-9e80-43b169fc3353')
  } else if (window.ethereum) {
    window.ethereum.enable()
  } else {
    const errorMessage = 'You need an Ethereum wallet to interact with this marketplace. Unlock your wallet, get MetaMask.io or Portis on desktop, or get Trust Wallet or Coinbase Wallet on mobile.'
    alert(errorMessage)
    throw new Error(errorMessage)
  }
  networkCallbacks.map((c) => c(web3Provider))
}

export function toUnitAmount(baseAmount, tokenContract = null) {
  const decimals = tokenContract && tokenContract.decimals != null
    ? tokenContract.decimals
    : DEFAULT_DECIMALS

  const amountBN = new BigNumber(baseAmount.toString())
  return amountBN.div(new BigNumber(10).pow(decimals))
}

export function toBaseUnitAmount(unitAmount, tokenContract = null) {
  const decimals = tokenContract && tokenContract.decimals != null
    ? tokenContract.decimals
    : DEFAULT_DECIMALS

  const amountBN = new BigNumber(unitAmount.toString())
  return amountBN.times(new BigNumber(10).pow(decimals))
}

export async function promisify(inner) {
  return new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) { reject(err) }
      resolve(res)
    })
  )
}
