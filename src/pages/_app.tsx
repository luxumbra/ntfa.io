import React from "react";
import App, { AppContext, AppInitialProps } from "next/app";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import "../../public/css/font-face.css";
import "../../public/css/stylesheet.css";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
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
        accent: {
            primary: "#6b7867",
        },
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "Federal, sans-serif",
                fontSize: `1vw`,
                marginBottom: `1vw`,
                fontWeight: `100`,
            }
        },
        Text: {
            variants: {
                summary: {
                    fontSize: { base: "10px", xl: "8px"},
                    lineHeight: {base: 0.5, xl: 0.1},
                },
                meta: {
                    color: "green"
                }
            }
        }
    },
  styles: {
        global: {
            html: {
                height: `100%`,
                scrollBehavior: `smooth`,
            },
            body: {
                backgroundColor: `black`,
                fontFamily: `'Hero', sans-serif`,
                height: `100%`,
                fontSize: `16px`,
                overflowX: `hidden`,
                // "div": {
                //     outline: "1px solid red"
                // }
            },
            "a.chakra-link": {
                transition: `all 0.3s ease`,
                "&:hover": {
                    color: `yellow.500`,
                    textDecoration: `none`,
                },
            },
            h2: {
                fontFamily: "'Federal', serif",
                fontSize: `0.9vw`,
                marginBottom: `1vw`,
                fontWeight: `100`,
            },
            h3: {
                fontFamily: `'Hero', sans-serif`,
                fontSize: `0.9vw`,
                marginBottom: { base: `1.5vw`, xl: `0.8vw` },
                fontWeight: `100`,
            },
            p: {
                fontSize: { base: `11px`, xl: `14px` },
                marginBottom: { base: `10px`, xl: `0.8vw` },
                lineHeight: { base: `1.2`, xl: `1.3` },
                fontWeight: `100`,
          },
            "p+h3": {
                    mt: { base: `20px`, xl: `50px` },
                },
            ol: {
                listStyle: `none`,
                marginBottom: `0.8vw`,
                "& + h3": {
                    mt: { base: `20px`, xl: `50px` },
                },
            },
            li: {
                fontSize: { base: `11px`, xl: `16px` },
                marginBottom: { base: `10px`, xl: `0.8vw` },
                lineHeight: { base: `1.2` },
                fontWeight: `100`,
            },
        },
    },
});

export class NTFApp extends App<AppInitialProps> {
    public static async getInitialProps({ Component, ctx }: AppContext) {
        return {
            pageProps: {
                ...(Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}),
                appProp: ctx.pathname,
            },
        };
    }

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <ChakraProvider theme={theme} resetCSS={true}>
                <Component {...pageProps} />
            </ChakraProvider>
        );
    }
}

export default NTFApp;
