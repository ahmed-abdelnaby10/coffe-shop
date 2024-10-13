'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
    children: React.ReactNode;
    style?: React.CSSProperties 
}

const AnimatedCardFromNull: React.FC<AnimatedCardProps> = ({ children, style }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, scale: 0,  },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.5
            }
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', ...style }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCardFromNull;