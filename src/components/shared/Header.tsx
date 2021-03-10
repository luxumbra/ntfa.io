import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from './AssetContainer';
import { Building } from "./Building";

export interface HeaderInterface {

}

export const HeaderComponent: FC<HeaderInterface> = ({className, sx}) => {
    return(
        <Box className={className} as="header" flexGrow={1} d="flex" flexFlow="column wrap" sx={sx}>
            <AssetContainer width="100%" height="25%" className="logo">
                <Box className="spacer" height="30%">
                </Box>
                <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="" imgAlt="" sx={{
                        backgroundColor: `blue.300`, zIndex: 0, "&:hover": {
                        backgroundColor: `pink.600`, cursor: `pointer`
                    } }}>
                    <Link href="/" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>NTFA Logo</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" sx={{d: `flex`}}>
                <Building buildingName="sky1" buildingState="normal" width="40%" height="60%" margin="0 0 0 15%" img="" sx={{backgroundColor: `teal.100`, zIndex: 200}}>
                </Building>
                <Building buildingName="sky2" buildingState="normal" width="40%" height="70%" margin="-10% 0 0 -35%" img="" sx={{backgroundColor: `teal.300`, zIndex: 300}}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
