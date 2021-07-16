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

                <Box width="80vw" height={{base: "30%", smd: "20%", md: "40%", lg: "33%", xl: "33%"}} />

                <Box width="100%" height={{base: "40%", smd: "50%", xl: "33%"}} className="store" position="relative">
                    <ShowcaseGridComponent collection="ntfa" />
                </Box>

            </Box>

            <StoreSceneRight className="scene__right" minW="10%"/>
        </Box>
    )
}
