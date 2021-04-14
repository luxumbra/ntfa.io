import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue,
    HTMLMotionProps
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from './MotionBox';

export interface AssetContainerInterface {
    height: string|any
    width: string|any
    margin?: string
    d?: string
    bg?: string
    children?: React.ReactNode
    className?: string
    parallax?: string
}

export const AssetContainer: FC<AssetContainerInterface> = ({ height, width, margin, d, bg, children, className, parallax }) => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [600, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const y3 = useTransform(scrollY, [0, 300], [0, 50]);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: false
    })
    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    }
    let movement;
    if (parallax) {

        if (parallax === "foreground") {
            movement = y1;
        } else if (parallax === "background") {
            movement = y3
        } else if (parallax === "midground") {
            movement = y2;
        } else {
            movement = 0;
        }
    }
    console.log('movement', movement);
    return(
        <MotionBox className={className} height={height} width={width} margin={margin} backgroundImage={bg} position="relative" d={d} style={{x: 0, y: movement}}>
            {children}
        </MotionBox>
    )
}
