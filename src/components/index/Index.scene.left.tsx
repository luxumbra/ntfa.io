import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface IndexSceneLeftInterface {
    className: string
    minW: string
}

export const IndexSceneLeft: FC<IndexSceneLeftInterface> = ({className, minW}) => {
    return(
        <Box className={className} as="div" flexGrow={1} d="flex" flexFlow="column wrap" minW={minW}>
            <AssetContainer width="100%" height="20%" className="logo">
                <Box className="spacer" height="30%">
                </Box>
                <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="/assets/ntfa-logo.png" imgAlt="" color="teal.600" z={300}>
                    <Link href="#section1" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>NTFA Logo</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="80%" className="block" d="flex">
                <Building buildingName="sky1" width="20%" height="65%" margin="25% 0 0 15%" img="/assets/buildings/building-4.png" imgAlt="/assets/normal-building.png" z={400}>
                </Building>
                <Building buildingName="sky2" width="25%" height="85%" margin="0 0 0 -10%" img="/assets/buildings/building-3.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400} position="absolute" bottom={5} left={5}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400} position="absolute" bottom={2} left={15}>
                </Building>
                 <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-4.png" imgAlt="/assets/buildings/building-4.destroyed.png" z={200} position="absolute" bottom={10} left={45}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
