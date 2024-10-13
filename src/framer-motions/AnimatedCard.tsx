'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
    direction: 'left' | 'right' | 'up' | 'down';
    children: React.ReactNode;
    className?: string
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ direction, children, className }) => {
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
        hidden: { opacity: 0, x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0, y: direction === 'down' ? -100 : direction === 'up' ? 100 : 0 },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;

