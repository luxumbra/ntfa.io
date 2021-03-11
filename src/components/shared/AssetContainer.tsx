import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

export interface AssetContainerInterface {
    height: string
    width: string
    margin?: string
    d?: string
    bg?: string
    children?: React.ReactNode
    className?: string
}

export const AssetContainer: FC<AssetContainerInterface> = ({ height, width, margin, d, bg, children, className}) => {
    return(
        <Box className={className} height={height} width={width} margin={margin} backgroundImage={bg} position="relative" d={d}>
            {children}
        </Box>
    )
}
