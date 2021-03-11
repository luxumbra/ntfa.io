import React, { FC, useState } from 'react';
import { Box } from '@chakra-ui/react';

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
}

export const Building: FC<BuildingInterface> = ({ height, width, margin, img, imgAlt, color, z, children, buildingName }) => {
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
            backgroundColor={buildingDestroyed ? `red.600` : color}
            position="relative"
            transition="all 0.2s 0.1s ease-in-out"
            sx={{ "&:hover": { backgroundColor: color, cursor: `not-allowed` }, zIndex: z }} onClick={toggleDestroy}>
            {children}
        </Box>
    )
}
