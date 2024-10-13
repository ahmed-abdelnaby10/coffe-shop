'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedNavBarProps {
    children: React.ReactNode;
}

const AnimatedNavBar: React.FC<AnimatedNavBarProps> = ({ children }) => {
    const [show, setShow] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const controlNavbar = () => {
        if (window.scrollY === 0) {
            setShow(true);
        } else if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: show ? 0 : -100 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1100}}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedNavBar;
