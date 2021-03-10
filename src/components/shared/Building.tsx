import React, { FC, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

type BuildingProps = {
    height: string
    width: string
    margin?: string
    img: string
    imgAlt: string
    sx?: any
    children?: any
    buildingName?: string
}

export const Building = ({ height, width, margin, img, imgAlt, sx, children, buildingName }: BuildingProps) => {
    const [buildingDestroyed, setBuildingDestroyed] = useState(false);
    const toggleDestroy = () => {
        setBuildingDestroyed(!buildingDestroyed);
    }

    return(
        <Box className={`building__${buildingName}--${buildingDestroyed ? "destroyed" : "normal"}`} height={height} width={width} margin={margin} backgroundImage={buildingDestroyed ? imgAlt : img} backgroundColor={buildingDestroyed ? `red.600` : sx.backgroundColor } position="relative" transition="all 0.2s 0.1s ease-in-out" sx={{filter: buildingDestroyed ? "blur(100px)" : "blur(0)", opacity: buildingDestroyed ? 0.3 : 1, "&:hover": {backgroundColor: sx.backgroundColor, cursor: `not-allowed`}}} onClick={toggleDestroy}>
            {children}
        </Box>
    )
}
