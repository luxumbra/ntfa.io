import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface IndexSceneRightInterface {
    className: string
    minW: string
}

export const IndexSceneRight: FC<IndexSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>
            <AssetContainer width="100%" height="25%" className="logo" parallax="background">
                <Box className="spacer" height="80%">
                </Box>
                <Building buildingName="store" margin="0 0 0 18%" img="/assets/signs/rooftop-martini.png" imgAlt="/assets/signs/rooftop-martini.png" height="20%" width="25%"z={0}>
                    <Link href="#section1" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Store</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" d="flex" parallax="background">
                <Building buildingName="sky1" width="30%" height="80%" margin="0 0 0 15%" img="/assets/buildings/building-1.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="70%" height="25%" margin="" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400} position="absolute" bottom={15} left={10}>
                </Building>
                <Building buildingName="sky2" width="70%" height="25%" margin="" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={500} position="absolute" bottom={15} left={-6}></Building>
                <Building buildingName="sky2" width="30%" height="50%" img="/assets/buildings/building-4.png" imgAlt="/assets/buildings/building-4.destroyed.png" z={400} position="absolute" bottom={25} left={3}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
