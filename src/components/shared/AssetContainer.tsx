import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';

type AssetContainerProps = {
    height: string
    width: string
    margin?: string
    bg?: string
    sx?: any
    children?: any
}

export const AssetContainer = ({height, width, margin, bg, sx, children}: AssetContainerProps) => {
    return(
        <Box height={height} width={width} margin={margin} backgroundImage={bg} position="relative" sx={sx}>
            {children}
        </Box>
    )
}
