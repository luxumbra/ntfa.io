import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
//
import { MetadataComponent } from "../../components/shared/Metadata";
import { SceneBridge } from '../../components/scene/Scene.bridge';
import { SceneBuilding } from '../../components/scene/Scene.building';
import { FooterComponent } from "../../components/shared/Footer";
import { Loading } from '../../components/shared/Loading';
import { NoticeBanner } from '../../components/shared/NoticeBanner';

export const Custom404Core: FC = (props) => {
    return (


        <Box className="assetDescription" fontSize={{ base: "12px", lg: "14px" }} sx={{
            flex: "0 0 33%",
            maxH: "33%",
            width: "100%",
            "h2, h3": {
                fontFamily: "Hero, sans-serif",
                fontSize: { base: "12px", lg: "16px", xl: "18px" },
                fontWeight: "800",
                mb: 0
            },
            "h3": {
                fontSize: { base: "10px", lg: "14px", xl: "16px" },
            },
            "ul": {
                pl: "15px",
            },
            "a": {
                color: "brand.300",
                position: "relative",
                transition: "all 0.2s ease",
                _hover: {
                    color: "brand.200",
                    _after: {
                        width: "100%",
                    }
                },
            }
        }}>
            <ReactMarkdown>
                {osAsset?.description}
            </ReactMarkdown>
        </Box>


    )
}
