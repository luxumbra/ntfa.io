import React, { FC } from "react";
import { Box, Heading, Link, Image, Button } from "@chakra-ui/react";


export type AssetMetaType = {
  theAsset: {
    traits: Array<{}>;
  };
}

export const AssetMeta: FC<AssetMetaType> = ({ theAsset }) => {
  // console.log('theAsset:', theAsset);
  type ItemType = {
    trait_type: string;
    value: string;
  }
  const metaItems = [] as Array<ItemType>;
  const { traits } = theAsset;
  traits?.map((trait) => {
    metaItems.push(trait as ItemType);
  });

  const metaSort = metaItems.sort((a, b) => {
    return a.trait_type.localeCompare(b.trait_type);
  });

  return (
    <Box as="ul" d="flex" w="100%" minW="100%" listStyleType="none" flexFlow="row wrap">
      {metaSort.map((item, index) => {

        const assetItem = item as ItemType;
        return (
          <Box key={index} as="li" sx={{
            flex: "0 0 45%",
            d: "flex",
            flexFlow: "row wrap",
            mb: { base: 0, lg: 1 },
          }}>
            <Box as="span" key={`dt-${index}`} sx={{
              flex: "0 0 100%",
              fontSize: { base: "11px", lg: "14px" },
              fontWeight: "800",
            }}>
              {assetItem?.trait_type}
            </Box>
            <Box as="span" key={`dd-${index}`} sx={{
              flex: "1",
              fontSize: { base: "11px", lg: "14px" },
              fontWeight: "100",
            }}>
              {assetItem?.value}
            </Box>
          </Box>
        );
      }
      )}
    </Box>
  )
}
