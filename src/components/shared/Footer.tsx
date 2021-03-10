import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from './AssetContainer';
import { Building } from "./Building";

export interface FooterInterface {

}

export const FooterComponent: FC<FooterInterface> = ({className, sx}) => {
    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} sx={sx}>
            <AssetContainer width="100%" height="25%" className="logo">
                <Box className="spacer" height="80%">
                </Box>
                <Building buildingName="store" margin="0 0 0 18%" img="" imgAlt="" height="10%" width="35%" sx={{ backgroundColor: `yellow.700` }}>
                    <Link href="/store" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Store</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" sx={{d: `flex`}}>
                <Building buildingName="sky1" buildingState="normal" width="40%" height="60%" margin="0 0 0 15%" img="" sx={{backgroundColor: `teal.100`, zIndex: 300}}>
                </Building>
                <Building buildingName="sky2" buildingState="normal" width="20%" height="40%" margin="25% 0 0 -5%" img="" sx={{backgroundColor: `teal.300`, zIndex: 0}}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
