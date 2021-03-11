import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from './AssetContainer';
import { Building } from "./Building";

export interface HeaderInterface {
    className: string
    minW: string
}

export const HeaderComponent: FC<HeaderInterface> = ({className, minW}) => {
    return(
        <Box className={className} as="header" flexGrow={1} d="flex" flexFlow="column wrap" minW={minW}>
            <AssetContainer width="100%" height="25%" className="logo">
                <Box className="spacer" height="30%">
                </Box>
                <Building buildingName="sign1" width="20%" height="40%" margin="0 0 0 75%" img="" imgAlt="" color="teal.600" z={300}>
                    <Link href="/" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0}}>NTFA Logo</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" d="flex">
                <Building buildingName="sky1" width="40%" height="65%" margin="0 0 0 15%" img="" imgAlt="" color="teal.600" z={400}>
                </Building>
                <Building buildingName="sky2" width="40%" height="70%" margin="-10% 0 0 -15%" img="" imgAlt="" color="teal.300" z={300}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
