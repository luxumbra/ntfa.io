import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface IndexSceneRightInterface {
    className: string
    minW: string
}

export const IndexSceneRight: FC<IndexSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>
            <AssetContainer width="100%" height="15%" className="logo" parallax="background">
                <Box className="spacer" height="70%">
                </Box>
                <Building buildingName="store" margin="0 0 0 17%" img="/assets/signs/rooftop-martini.png" imgAlt="/assets/signs/rooftop-martini.png" height="30%" width="25%"z={0}>
                    <Link href="#section1" sx={{ position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, padding: `1% 3%`}}>Store</Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="75%" className="block" d="flex" parallax="background">
                <Building buildingName="sky1" width="30%" height="80%" margin="0 0 0 15%" img="/assets/buildings/building-1.png" imgAlt="/assets/effects/fog.png" z={300} damageY={82} damageX={40} damageH={30} damageW={160}>
                </Building>
                <Building buildingName="sky2" width="70%" height="25%" margin="" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={400} position="absolute" bottom={14} left={10} damageY={82} damageX={40} damageH={30} damageW={100}>
                </Building>
                <Building buildingName="sky2" width="70%" height="25%" margin="" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={500} position="absolute" bottom={15} left={-6} damageY={40} damageX={47} damageH={30} damageW={70}></Building>
                <Building buildingName="sky2" width="30%" height="50%" img="/assets/buildings/building-4.png" imgAlt="/assets/effects/fog.png" z={400} position="absolute" bottom={25} left={3} damageY={82} damageX={40} damageH={30} damageW={100}>
                </Building>
            </AssetContainer>
        </Box>
    )
}
