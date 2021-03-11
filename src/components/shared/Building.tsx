import React, { FC, useState } from 'react';
import { Box } from '@chakra-ui/react';
//


export interface BuildingInterface {
    height: string
    width: string
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
}

export const Building: FC<BuildingInterface> = ({ height, width, margin, img, imgAlt, color, z, children, buildingName, bottom, top, left, right, position }) => {
    const [buildingDestroyed, setBuildingDestroyed] = useState(false);
    const toggleDestroy = () => {
        setBuildingDestroyed(!buildingDestroyed);
    }

    return(
        <Box
            className={`building__${buildingName}--${buildingDestroyed ? "destroyed" : "normal"}`}
            height={height}
            width={width}
            margin={margin}
            backgroundImage={`url(${buildingDestroyed ? imgAlt : img})`}
            backgroundPosition=" 50%"
            backgroundSize="100% 100%"
            backgroundRepeat="no-repeat"
            backgroundColor={buildingDestroyed ? `transparent` : color}
            transition="all 0.2s 0.1s ease-in-out"
            sx={{ "&:hover": { backgroundColor: color, cursor: `not-allowed` }, position: position ? position : `inherit`, zIndex: z, top: top ? `${top}%` : `auto`, right: right ? `${right}%` : `auto`, bottom: bottom ? `${bottom}%` : `auto`, left: left ? `${left}%` : `auto`,  }} onClick={toggleDestroy}>
            {children}
        </Box>
    )
}
