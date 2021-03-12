import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"

import '../../public/css/font-face.css';
import '../../public/css/stylesheet.css';

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
                fontFamily: `'Hero', sans-serif`,
                height: `100%`,
                fontSize: `16px`,
            },
            "a.chakra-link": {
                transition: `all 0.3s ease`,
                "&:hover": {
                    color: `yellow.500`,
                    textDecoration: `none`,
                }
            },
            h2: {
                fontFamily: `'Hero', sans-serif`,
                fontSize: `1.5vw`,
                marginBottom: `1vh`
            },
            h3: {
                fontFamily: `'Hero', sans-serif`,
                fontSize: `1.5vw`,
                marginBottom: `0.8vw`
            },
            "p": {
                fontSize: `0.9vw`,
                marginBottom: `3%`,
                lineHeight: `1vw`,
            },
            ol: {
                listStyle: `none`,
                marginBottom: `0.8vh`
            },
            li: {
                fontSize: `0.9vw`,
                marginBottom: `0.8vw`,
                lineHeight: `1vw`,
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
