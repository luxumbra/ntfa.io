import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface AboutSceneRightInterface {
    className: string
    minW: string
}

export const AboutSceneRight: FC<AboutSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>

            <AssetContainer width="100%" height="35%" className="logo">
                <Box className="spacer" height="60%">
                </Box>
                <Building buildingName="store" margin="-5% 0 0 44%" img="" imgAlt="" height="55%" width="25%" z={0}>
                    <Link href="#section2" sx={{ color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: 0, top: 0, textAlign: `center`,
                                backgroundImage: `url(/assets/signs/bitcoin-logo.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `6.5vw`, backgroundPosition: `90%`, transform: `scaleX(1)`, opacity: 1, "& > span": {visibility: `hidden`},
                                "&:hover": { color: `transparent !important`, opacity: 0.3}}}><span>Bitcoin & Gold</span></Link>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="65%" className="block" d="flex">
                <Building buildingName="sky1" width="20%" height="75%" margin="8% 0 0 25%" img="/assets/buildings/building-4.png" imgAlt="/assets/effects/fog.png" z={400} damageY={90} damageX={70} damageH={30} damageW={200}>
                </Building>
                <Building buildingName="sky2" width="30%" height="95%" margin="-10% 0 0 -3%" img="/assets/buildings/building-3.png" imgAlt="/assets/effects/b3.png" z={300} damageH={50} damageW={120} damageY={50} damageX={-2}>
                </Building>
                <Building buildingName="sky2" width="60%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={400} position="absolute" top={75.5} left={16} damageY={30} damageX={20}>
                </Building>
                <Building buildingName="sky2" width="40%" height="20%" img="/assets/buildings/building-2.png" imgAlt="/assets/effects/fog.png" z={500} position="absolute" bottom={8} left={-16} damageY={30} damageX={20}></Building>
            </AssetContainer>
        </Box>
    )
}
