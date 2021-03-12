import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface StoreSceneRightInterface {
    className: string
    minW: string
}

export const StoreSceneRight: FC<StoreSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>
            <AssetContainer width="100%" height="98%" className="logo">
                <Box className="spacer" height="60%">
                </Box>
                <Building buildingName="store" margin="65% 0 0 -25%" img="/assets/signs/bitcoin-logo.png" imgAlt="/assets/signs/bitcoin-logo.png" height="20%" width="99%" z={0}>
                    <Link href="#section3" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>About</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="2%" className="block" d="flex">
                {/* <Building buildingName="sky1" width="30%" height="80%" margin="0 0 0 15%" img="/assets/buildings/building-1.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="70%" height="25%" margin="75% 0 0 -35%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400}>
                </Building> */}
            </AssetContainer>
        </Box>
    )
}
