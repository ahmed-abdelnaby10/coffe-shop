"use client"

import Image from "next/image"
import hiriskbanner from "/public/images/hiriskmainbanner.jpg"
import coffeebanner from "/public/images/coffeebanner.png"
import Container from "@/components/reusable components/Container"
import { Typography } from "@/components/ui/typography"
import AnimatedCard from "@/framer-motions/AnimatedCard"

export default function Banners() {
    return (
        <Container className="h-fit overflow-hidden">
            <div className="w-full flex items-center justify-between gap-10 max-lg:flex-col max-lg:justify-start max-lg:gap-5">
                <AnimatedCard direction="left" className="lg:basis-1/2 max-lg:w-full">
                    <div className="h-64 rounded-xl overflow-hidden">
                        <Image
                            src={hiriskbanner.src}
                            alt="hbanner"
                            width={hiriskbanner.width}
                            height={hiriskbanner.height}
                            className="w-full h-full"
                            quality={75}
                            priority
                            placeholder="blur"
                            blurDataURL={hiriskbanner.blurDataURL!}
                            />
                    </div>
                </AnimatedCard>
                <AnimatedCard direction="right" className="lg:basis-1/2 max-lg:w-full">
                    <div className="h-64 rounded-xl overflow-hidden relative">
                        <Image
                            src={coffeebanner.src}
                            alt="hbanner"
                            width={coffeebanner.width}
                            height={coffeebanner.height}
                            className="w-full h-full"
                            quality={75}
                            priority
                            placeholder="blur"
                            blurDataURL={coffeebanner.blurDataURL!}
                        />
                        <div className="absolute top-0 left-0 p-5 h-full flex flex-col items-start justify-center">
                            <Typography variant="h1" color="main" className="uppercase text-3xl">More Than</Typography>
                            <Typography variant="h1" color="main" className="uppercase text-3xl">20 branches</Typography>
                            <Typography variant="h1" color="main" className="uppercase text-3xl">all over egypt!</Typography>
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </Container>
    )
}
