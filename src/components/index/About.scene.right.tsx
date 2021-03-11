import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface AboutSceneRightInterface {
    className: string
    minW: string
}

export const AboutSceneRight: FC<AboutSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>

            <AssetContainer width="100%" height="15%" className="logo" parallax="foreground">
                <Box className="spacer" height="40%">
                </Box>
                <Building buildingName="store" margin="-10% 0 0 49%" img="/assets/signs/bitcoin-logo.jpg" imgAlt="/assets/signs/bitcoin-logo.jpg" height="85%" width="25%" color="yellow.700" z={0}>
                    <Link href="#section1" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Store</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" d="flex" parallax="foreground">
                <Building buildingName="sky1" width="20%" height="65%" margin="0 0 0 25%" img="/assets/buildings/building-4.png" imgAlt="/assets/normal-building.png" z={400}>
                </Building>
                <Building buildingName="sky2" width="30%" height="65%" margin="-10% 0 0 -0%" img="/assets/buildings/building-3.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400} position="absolute" top={45.5} left={16}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
