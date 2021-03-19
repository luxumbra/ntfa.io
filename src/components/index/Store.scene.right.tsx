import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
//
import { AssetContainer } from '../shared/AssetContainer';
import { Building } from "../shared/Building";

export interface StoreSceneRightInterface {
    className: string
    minW: string
}

export const StoreSceneRight: FC<StoreSceneRightInterface> = ({ className, minW }) => {

    return(
        <Box className={className} as="footer" d="flex" flexDirection="column" flexGrow={1} minW={minW}>
            <AssetContainer width="100%" height="98%" className="logo">
                <Box className="spacer" height="60%">
                </Box>
                <Building buildingName="store" margin="65% 0 0 15%" img="" imgAlt="" height="20%" width="99%" z={0}>
                    <Box position="relative" pt="100%" h="0">
                        <Link href="#section3" maxW="200px" maxH="200px" sx={{
                            color: `white`, fontSize: `0.8vw`, fontWeight: `bold`, position: `absolute`, width: `100%`, height: `100%`, left: `-120%`, top: `-150%`, textAlign: `center`,
                            backgroundImage: `url(/assets/effects/fingerprint.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `6.5vw`, backgroundPosition: `90%`, transform: `scaleX(1.2)`, opacity: 0.6, "& > span": { visibility: `hidden`},
                            "&:hover": { color: `transparent !important`, textShadow: `10px 10px 0 rgba(0,0,0,0)`, opacity: 0.3, }}}><span>About NTFA</span></Link>

                    </Box>
                </Building>
            </AssetContainer>

            <AssetContainer width="100%" height="2%" className="block" d="flex">
                {/* <Building buildingName="sky1" width="30%" height="80%" margin="0 0 0 15%" img="/assets/buildings/building-1.png" imgAlt="/assets/normal-building.png" z={300}>
                </Building>
                <Building buildingName="sky2" width="70%" height="25%" margin="75% 0 0 -35%" img="/assets/buildings/building-2.png" imgAlt="/assets/normal-building.png" z={400}>
                </Building> */}
            </AssetContainer>
        </Box>
    )
}
