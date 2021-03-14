import React, { FC } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import { css, jsx } from "@emotion/react";
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface IndexSceneLeftInterface {
    className: string
    minW: string
    animation?: string
}

export const IndexSceneLeft: FC<IndexSceneLeftInterface> = ({ className, minW, animation }) => {
    return(
        <Box className={className} as="div" flexGrow={1} d="flex" flexFlow="column wrap" minW={minW}>
            <AssetContainer width="100%" height="6%" className="logo">
                <Box className="spacer" height="70%">
                </Box>
                <Building buildingName="sign1" width="100%" height="30%" maxW="120px" margin="0 0 0 75%" img="" imgAlt="" z={300}>
                    <Link href="#section1" display="inline-block" position="relative" pt="56.25%" height="0" width="100%">
                        <Image src="/assets/logo.png" alt="logo" width="100%" height="100%" objectFit="fill" sx={{ position: `absolute`, left: `-150%`, top: `150%`}} css={css`animation: ${animation};`} />
                    </Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="80%" className="block" d="flex">
                <Building buildingName="sky1" width="20%" height="65%" margin="25% 0 0 15%" img="/assets/buildings/building-4.png" imgAlt="/assets/effects/fog.png" z={400} damageY={52} damageX={10} damageH={30} damageW={150}>
                </Building>
                <Building buildingName="building2" width="25%" height="85%" margin="0 0 0 -10%" img="/assets/buildings/building-3.png" imgAlt="/assets/effects/b3.png" z={300} damageH={50} damageW={120} damageY={50} damageX={-2}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={400} position="absolute" bottom={5} left={5} damageY={30} damageX={20}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={400} position="absolute" bottom={2} left={15} damageY={10}>
                </Building>
                 <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-4.png" imgAlt="/assets/effects/fog.png" z={200} position="absolute" bottom={3} left={45} damageY={70} damageX={70} damageH={30} damageW={200}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
