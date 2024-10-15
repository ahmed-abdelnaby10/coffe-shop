'use client'

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image, { StaticImageData } from "next/image";

interface LandingProps {
    background: StaticImageData,
    buttons: boolean,
    title?: string
    header: string
}

export default function Landing({ background, buttons, title, header }: LandingProps) {
    const splitedHeader = header.split("|")
    const smallScreenHeader = header.split("|").join(" ")
    return (
        <div className="flex sm:items-center sm:justify-start justify-center items-end max-sm:pb-5 relative max-h-screen overflow-hidden sm:h-[85vw] h-[70vh] w-full">
            <Image 
                src={background.src}
                width={background.width}
                height={background.height}
                placeholder="blur"
                blurDataURL={background.blurDataURL}
                alt="main-bg"
                className="absolute left-0 top-0 w-full h-full object-cover object-center"
                priority
                quality={75}
            />
            <div className="flex flex-col items-start justify-center gap-5 sm:pl-10 lg:pl-40 lg:h-[75vw] bg-mainBackground relative before:absolute before:content-[''] before:-right-1/2 sm:before:top-1/2 sm:before:-translate-y-1/2 before:h-[125vh] before:rounded-full before:w-[125vh] before:bg-mainBackground max-sm:before:w-[500px] max-sm:before:left-1/2 max-sm:before:-translate-x-1/2 max-sm:before:-top-28">
                {
                    title && (
                        <Typography variant="p" color="main" size={"md"} className="max-sm:self-center z-50">{title}</Typography>
                    )
                }
                <Typography variant="h1" color="main" className="lg:text-7xl text-5xl z-50 max-sm:hidden">
                    {
                        splitedHeader.map((word, index) => {
                            return (
                                <>
                                    { word }
                                    { index !== splitedHeader.length - 1 && <br /> }
                                </>
                            )
                        })
                    }
                </Typography>
                <Typography variant="h1" color="main" className="text-xl self-center z-50 sm:hidden">{smallScreenHeader}</Typography>
                {
                    buttons && (
                        <div className="flex items-center justify-end w-full sm:gap-5 gap-2 max-sm:flex-col z-50">
                            <Button variant="hirisk">Discover menu</Button>
                            <Button variant="hirisk-reverse">Contact us</Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}