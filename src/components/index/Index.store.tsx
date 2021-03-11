import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { ASSET_URL, CHOSEN_THEME } from '../../uri';

export const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`;

export interface IndexStoreInterface {}

export const IndexStoreComponent: FC<IndexStoreInterface> = () => {

    return (
        <Box minHeight="100%" height="100vh" maxH="100%" width="100%" margin="0 auto">
            <iframe
            id="opensea-iframe"
            title="Embedded OpenSea Marketplace"
            src={embeddedUrl}
            width='100%'
            height='100%'
            frameBorder='0'
            allowFullScreen
            style={{ minHeight: '100%' }}>
            </iframe>
        </Box>
    )
}
