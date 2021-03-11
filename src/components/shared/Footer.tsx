import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from './AssetContainer';
import { Building } from "./Building";

export interface FooterInterface {
    className: string
    minW: string
}

export const FooterComponent: FC<FooterInterface> = ({ className, minW }) => {
    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>
            <AssetContainer width="100%" height="25%" className="logo">
                <Box className="spacer" height="80%">
                </Box>
                <Building buildingName="store" margin="0 0 0 18%" img="" imgAlt="" height="10%" width="35%" color="yellow.700" z={0}>
                    <Link href="/store" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Store</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" d="flex">
                <Building buildingName="sky1" width="40%" height="60%" margin="0 0 0 15%" img="" imgAlt="" color="teal.300" z={300}>
                </Building>
                <Building buildingName="sky2" width="20%" height="40%" margin="25% 0 0 -5%" img="" imgAlt="" color="teal.500" z={0}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
