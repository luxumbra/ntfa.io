import React, { FC } from 'react';
import Head from 'next/head';

export interface MetadataInterface {
    title?: string;
    description?: string;
}

export const MetadataComponent: FC<MetadataInterface> = ({ title, description }) => {
    const outputTitle = title ? title : 'Never Touch Fiat Again';
    const outputDescription = description ? description : 'The Never Touch Fiat Again Store Front';

    return(
        <Head>
            <title>{outputTitle}</title>
            <meta name="description" content={outputDescription}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={outputTitle}/>
            <meta name="twitter:description" content={outputDescription}/>

            <meta property="og:title" content={outputTitle}/>
            <meta property="og:image" content=""/>
            <meta property="og:description" content={outputDescription}/>

            <link rel="icon" type="image/jpg" href=""/>
        </Head>
    )
}