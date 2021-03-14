import React, { FC } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import { css, jsx } from "@emotion/react";
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface StoreSceneLeftInterface {
    className: string
    minW: string
    animation?: string
}

export const StoreSceneLeft: FC<StoreSceneLeftInterface> = ({ className, minW, animation }) => {

    return(
        <Box className={className} as="div" flexGrow={1} d="flex" flexFlow="column wrap" minW={minW}>
            <AssetContainer width="100%" height="20%" className="logo">
                <Box className="spacer" height="30%">
                </Box>
                <Building buildingName="sign1" width="100%" height="70%" maxW="200px" margin="0 0 0 75%" img="" imgAlt="" z={300}>
                    <Link href="#section1" display="inline-block" position="relative" pt="56.25%" height="0" width="100%" maxW="300px" css={css`animation: ${animation};`}>
                        <Image src="/assets/logo.png" alt="logo" width="100%" height="100%" objectFit="fill" sx={{ position: `absolute`, left: 0, top: 0 }} />
                    </Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="80%" className="block" d="flex">
                {/* <Building buildingName="sky1" width="20%" height="65%" margin="0 0 0 15%" img="/assets/buildings/building-4.png" imgAlt="/assets/normal-building.png" z={400}>
                </Building>
                <Building buildingName="sky2" width="30%" height="65%" margin="-10% 0 0 -10%" img="/assets/buildings/building-3.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400} position="absolute" top={45.5} left={5}>
                </Building> */}
            </AssetContainer>
        </Box>
    )
}
