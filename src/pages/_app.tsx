import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import '../../public/css/font-face.css';
import '../../public/css/stylesheet.css';

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1920px",
});

const theme = extendTheme({
    breakpoints,
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: `Hero, sans-serif`,
                fontWeight: `bold`,
                fontSize: `1vw`,
            },
            fontSizes: {
                lg: `1.5vw`,
                xl: `2.3vw`
            }
        }
    },
    styles: {
        global: {
            html: {
                height: `100%`,
                scrollBehavior: `smooth`
            },
            body: {
                backgroundColor: `black`,
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
                fontSize: `1.3vw`,
                marginBottom: `0.8vw`
            },
            h3: {
                fontSize: `1.3vw`,
                marginBottom: `0.8vw`
            },
            "p": {
                fontSize: `0.9vw`,
                marginBottom: `0.8vw`,
                lineHeight: `1vw`,
            },
            ol: {
                listStyle: `none`,
                marginBottom: `0.8vw`
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
