import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

export class NTFApp extends App<AppInitialProps> {
    public static async getInitialProps({ Component, ctx }: AppContext) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                appProp: ctx.pathname,
            },
        };
    }

    public render() {
        const { Component, pageProps } = this.props;

        return(
            <ChakraProvider resetCSS={true}>
                <Component {...pageProps}/>
            </ChakraProvider>
        )
    }
}

export default NTFApp;