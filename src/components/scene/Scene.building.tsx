import React, { FC, MouseEvent } from 'react';
import { Image } from '@chakra-ui/react';

export interface SceneBuildingInterface {
    src: string;
    left: any;
    bottom: any;
    width: any;
    onClick?: (e: any) => void;
}

export const SceneBuilding: FC<SceneBuildingInterface> = ({ src, left, bottom, width }) => {
    return (
        <Image
            src={src}
            position="absolute"
            left={left}
            bottom={bottom}
            width={width}
        />
    )
}