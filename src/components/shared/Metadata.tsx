import React, { FC } from 'react';
import Head from 'next/head';
import { truncateString } from "../showcase/NFTCard";

export interface MetadataInterface {
    title?: string;
    description?: string;
    socialImage?: string;
}

export const MetadataComponent: FC<MetadataInterface> = ({ title, description, socialImage }) => {
    const outputTitle = title ? `${title} - Gold backed NFT by Never Touch Fiat Again`  : 'Never Touch Fiat Again';
    const outputDescription = description ? truncateString(description, 100) : 'The Never Touch Fiat Again Store Front';
    const imgPath = socialImage ? socialImage : '/assets/banner.jpg';


    return(
        <Head>
            <title>{outputTitle}</title>
            <meta name="description" content={outputDescription}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={outputTitle}/>
            <meta name="twitter:description" content={outputDescription} />
            <meta name="twitter:image" content={imgPath} />
            <meta property="og:title" content={outputTitle}/>
            <meta property="og:image" content={imgPath}/>
            <meta property="og:description" content={outputDescription} />

            <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
            <link rel="manifest" href="/assets/site.webmanifest"/>
            <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#ffaaff"/>
            <link rel="shortcut icon" href="/assets/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#bbfcff"/>
            <meta name="msapplication-config" content="/assets/browserconfig.xml"/>
            <meta name="theme-color" content="#bbfcff"/>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Asset&display=swap" rel="stylesheet"/>

        </Head>
    )
}
