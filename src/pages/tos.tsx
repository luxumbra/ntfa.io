import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next'
import matter from "gray-matter";
import { MetadataComponent } from '../components/shared/Metadata';
import { FooterComponent } from "../components/shared/Footer";
import TosCore from '../components/tos/Tos.core';
import { Loading } from '../components/shared/Loading';


const TosPage = () => {
    const [tos, setTos] = useState('');
    const [loading, setLoading] = useState(true);
    const page = "tos";

    const grabData = async (page: string) => {

        const res = await import(`../content/${page}.md`);

        res?.default && setTos(res.default);

        return (tos ? tos : 'No content');
    };

    grabData(page).then(res => {
        setLoading(false);
    });

    return (
        <Box className="scene" d="flex" flexDirection="column" height="100vh" maxHeight="100%" width="100vw" maxW="100%" alignContent="stretch" overflowX="hidden" overflowY="hidden">
            <MetadataComponent />
            {
                loading ? (
                    <Loading />
                ) : (
                    <TosCore content={tos} />
                )}
            <FooterComponent toggler />
        </Box>
    )
}

export default TosPage;
