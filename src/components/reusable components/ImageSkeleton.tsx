'use client'

import { useEffect, useState } from 'react';
import ImageComponent from 'next/image';
import { Skeleton } from '../ui/skeleton';

interface SkeletonImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    style?: React.CSSProperties
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ src, alt, width, height, className, style }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoading(false);
        img.onerror = () => setIsLoading(false);
    }, [src]);

    return (
        <>
            {isLoading && (
                <Skeleton
                    // variant=""
                    // width="100%"
                    // height="100%"
                    // animation="wave"
                    // sx={{
                        // borderRadius: '12px'
                    // }}
                />
            )}
            <ImageComponent
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ display: isLoading ? 'none' : 'block', ...style }}
                className={className}
            />
        </>
    )
};

export default SkeletonImage;
