import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
    styles: {
        global: {
            html: {
                height: `100%`,
                scrollBehavior: `smooth`
            },
            body: {
                backgroundColor: `blue.900`,
                height: `100%`
            }
        }
    }
})

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
            <ChakraProvider theme={theme} resetCSS={true}>
                <Component {...pageProps}/>
            </ChakraProvider>
        )
    }
}

export default NTFApp;
