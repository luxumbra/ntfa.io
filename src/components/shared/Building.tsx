import React, { FC, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
//


export interface BuildingInterface {
    height: string
    width: string
    maxW?: string
    maxH?: string
    margin?: string
    img: string
    imgAlt: string
    color?: string
    z: number|string
    children?: React.ReactNode
    buildingName?: string
    bottom?: number
    top?: number
    left?: number
    right?: number
    position?: string
    damageY?: number
    damageX?: number
    damageH?: number
    damageW?: number
    overflowY?: string
}

export const Building: FC<BuildingInterface> = ({ height, width, maxW, maxH, margin, img, imgAlt, color, z, children, buildingName, bottom, top, left, right, position, damageY, damageX, damageH, damageW, overflowY }) => {
    const [buildingDestroyed, setBuildingDestroyed] = useState(false);
    const toggleDestroy = () => {
        setBuildingDestroyed(!buildingDestroyed);
    }

    return(
        <Box
            className={`building__${buildingName}--${buildingDestroyed ? "destroyed" : "normal"}`}
            height={height}
            width={width}
            maxW={maxW}
            maxH={maxH}
            margin={margin}
            backgroundImage={`url(${img})`}
            backgroundPosition=" 50%"
            backgroundSize="100% 100%"
            backgroundRepeat="no-repeat"
            backgroundColor={buildingDestroyed ? `transparent` : color}
            transition="all 0.2s 0.1s ease-in-out"
            sx={{ "&:hover": { backgroundColor: color }, position: position ? position : `inherit`, zIndex: z, top: top ? `${top}%` : `auto`, right: right ? `${right}%` : `auto`, bottom: bottom ? `${bottom}%` : `auto`, left: left ? `${left}%` : `auto`, overflowY: overflowY ? overflowY : `initial` }} onClick={toggleDestroy}>
            {buildingDestroyed && (
                <Box pos="absolute"
                    minH={`${damageH}%`}
                    minW={`${damageW}%`}
                    bottom={`${damageY}%`} left={`${damageX}%`}
                    opacity={buildingDestroyed ? 1 : 0}
                    transition="all 0.3s 1s ease"
                    zIndex={1000}>
                    {/* <Box pos="relative" width="100%" height="100%" zIndex={1000}> */}
                        <Image src={imgAlt} alt="" />
                    {/* </Box> */}
                </Box>
            )}
            {children}
        </Box>
    )
}
