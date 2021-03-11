import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';

export interface NavInterface {
    className: string
}

export const HeaderComponent: FC<NavInterface> = ({className}) => {
    return(
        <Box className={className} as="header" flexGrow={1} d="flex" flexFlow="row nowrap">
            <Box>
                <Link href="/">NTFA Logo</Link>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}
