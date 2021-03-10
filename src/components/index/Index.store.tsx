import React, { FC } from 'react';
import { ASSET_URL, CHOSEN_THEME } from '../../uri';

export const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`;

export interface IndexStoreInterface {}

export const IndexStoreComponent: FC<IndexStoreInterface> = () => {
    return(
        <iframe
        id="opensea-iframe"
        title="Embedded OpenSea Marketplace"
        src={embeddedUrl}
        width='100%'
        height='100%'
        frameBorder='0' 
        allowFullScreen
        style={{ minHeight: '100vh' }}>

        </iframe>
    )
}