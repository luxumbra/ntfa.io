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

            <AssetContainer width="100%" height="35%" className="logo">
                <Box className="spacer" height="60%">
                </Box>
                <Building buildingName="store" margin="-12% 0 0 47%" img="/assets/signs/bitcoin-logo.png" imgAlt="/assets/signs/bitcoin-logo.png" height="55%" width="25%" z={0}>
                    <Link href="#section1" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Store</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="65%" className="block" d="flex">
                <Building buildingName="sky1" width="20%" height="75%" margin="8% 0 0 25%" img="/assets/buildings/building-4.png" imgAlt="/assets/buildings/building-4.destroyed.png" z={400}>
                </Building>
                <Building buildingName="sky2" width="30%" height="95%" margin="-10% 0 0 -3%" img="/assets/buildings/building-3.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400} position="absolute" top={75.5} left={16}>
                </Building>
                <Building buildingName="sky2" width="60%" height="40%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={100} position="absolute" bottom={6} left={-16}></Building>
            </AssetContainer>
        </Box>
    )
}
