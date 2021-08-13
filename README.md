# Never Touch Fiat Again

The storefront for [Never Touch Fiat Again](https://ntfa.io).

## Development

### `yarn`

### `yarn dev`

Start the development server on `http://localhost:3000`.

### `yarn build`

Build next app in the `/build` folder.

### `yarn export`

Export next app assets to `/build` folder.

### `yarn lint`

Lint and validate files. Run `yarn lint --fix` to fix linter issues when applicable.

## Deployments
- Branches: Vercel is set up to deploy branches on pushing to the repo. It'll deploy to a slugified version of the repo & branch name ie `@luxumbra/opensea-integration` will be at https://ntfa-io-git-luxumbra-opensea-integration-luxumbra.vercel.app/
- Preview: merge work with the `develop` branch to view at https://preview.ntfa.io
- Production: merge `develop` with `master` to update https://ntfa.io 

HMU on Discord if you get deploy issues and need me to poke the Vercel or post deploy logs. 
