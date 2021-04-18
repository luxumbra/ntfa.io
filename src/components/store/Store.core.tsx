import React, { useState } from 'react';
import { Box, Button, Link, Image } from '@chakra-ui/react';
import { css, jsx } from "@emotion/react";
//
import { Building } from "../shared/Building";
import { StoreSceneLeft } from './Store.scene.left';
import { StoreSceneRight } from './Store.scene.right';
import { ShowcaseGridComponent } from '../showcase/Showcase.grid';
import { AssetContainer } from '../shared/AssetContainer';


export function StoreCore() {
    return(
        <Box id="section1" className="store" d="flex" flexDir="row" alignContent="stretch" minH="100vh" background="url(/assets/scenes/dollar-bill-yo.jpg) 50% no-repeat" backgroundSize={{base: "fill", xl: "100% 100%"}} zIndex="1000">

            <StoreSceneLeft className="scene__left" minW="10%"/>

            <Box className="scene__center" flex={{base: "0 0 66%"}} d="flex" flexFlow="column wrap" alignItems="center" zIndex="0">

                <Box width="100%" height={{base: "10%", xl: "33%"}} />

                <Box width="100%" height={{base: "80%", xl: "33%"}} d="flex" className="store">
                    <ShowcaseGridComponent collection="100-bees-hexel-collection" />
                </Box>

                <Box position="absolute" bottom={{base: "20%", xl: "30%"}} right={{base: "62%", xl: "82%"}} height="auto" width="100%" maxW={{base: "100px", xl: "150px"}} className="spacer" transform={{base: "scaleX(-1)", xl: "scaleX(-1)"}}>
                    <Box position="relative" pt="100%" h="0" w="100%" maxW="200px">
                        <Link href="#section2" w="100%" h="100%" sx={{
                            color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: `0`, top: `0`, textAlign: `center`,
                        backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: { base: `90%`, xl: `fill` }, backgroundPosition: 0, opacity: 0.6, "& > span": { visibility: `hidden`},
                            "&:hover": { color: `transparent !important`, textShadow: `10px 10px 0 rgba(0,0,0,0)`, opacity: 0.3, }}}><span>Bitcoin & Gold</span></Link>
                    </Box>
                </Box>

            </Box>

            <StoreSceneRight className="scene__right" minW="10%"/>
        </Box>
    )
}
