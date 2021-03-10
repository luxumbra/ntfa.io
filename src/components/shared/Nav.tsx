import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';

export const HeaderComponent: FC<HeaderInterface> = ({className, sx}) => {
    return(
        <Box className={className} as="header" flexGrow={1} d="flex" flexFlow="row nowrap" sx={sx}>
            <Box>
                <Link href="/">NTFA Logo</Link>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}
