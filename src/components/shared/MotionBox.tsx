import React, { FC, useState } from 'react';
import { Box, chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/react';
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue,
    HTMLMotionProps
} from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
