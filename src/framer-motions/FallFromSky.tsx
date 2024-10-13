import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface FallFromSkyAnimationProps {
    children: React.ReactNode,
    delay: number;
    style?: React.CSSProperties
}

const FallFromSkyAnimation: React.FC<FallFromSkyAnimationProps> = ({ children, delay, style }) => {
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
        hidden: { opacity: 0, y: -100 },
        visible: { 
            opacity: 1, 
            y: [0, -50, 0, -20, 0], 
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1.5, delay, ease: 'easeOut' }}
            style={{...style}}
        >
            {children}
        </motion.div>
    );
};

export default FallFromSkyAnimation;
