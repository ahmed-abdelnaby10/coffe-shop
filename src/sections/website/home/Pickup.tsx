"use client"

import Container from "@/components/reusable components/Container";
import { Typography } from "@/components/ui/typography";
import { categories } from "@/utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import img from "/public/images/bgwithH.png"
import AnimatedCard from "@/framer-motions/AnimatedCard";
import IntroVideo from "./IntroVideo";

export default function Pickup() {
    const isSmallScreen = useMediaQuery("(max-width:640px)")
    const isLargeScreen = useMediaQuery("(max-width:1024px)")
    return (
        <Container className="min-h-fit flex flex-col lg:gap-20 gap-10">
            <div className="flex flex-col items-center justify-start gap-10">
                <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl uppercase whitespace-nowrap max-sm:self-center" color="main">Pick up anytime</Typography>
                <Swiper
                    slidesPerView={isSmallScreen? 1 : isLargeScreen? 3 : 4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper w-full h-full"
                >
                    {
                        categories.map((cate) => {
                            return (
                                <SwiperSlide key={cate.id}>
                                    <Link href={""} className="p-1 relative overflow-hidden rounded-lg flex items-end h-[300px] lg:h-[300px] before:absolute before:content-[''] before:h-full before:w-full before:top-0 before:left-0 before:z-30 before:bg-cate-gradient">
                                        <Image 
                                            src={cate.image.src}
                                            alt={cate.title}
                                            width={1000}
                                            height={1000}
                                            className="absolute top-0 left-0 w-full h-full z-20 object-cover"
                                        />
                                        <div className="flex items-center justify-between gap-2 z-50 w-full px-1 pb-5">
                                            <Typography variant="h1" size="xl" color="main">{cate.title}</Typography>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="flex items-center max-md:flex-col justify-between w-full lg:gap-20 gap-10">
                <AnimatedCard direction="up" className="md:basis-3/5">
                    <div className="flex flex-col items-start justify-start gap-5">
                        <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl uppercase" color="main">who we are?</Typography>
                        <Typography variant="p" className="sm:w-4/5" color="primary">All the way from the US with 25,000 branches all over the world, HiRisk is an Egyptian chain of convenience coffee shops. HiRisk&apos;s roots trace back to 2000 with a success in the convenience retailing industry that spans more than 20 years.</Typography>
                        <div className="flex items-center justify-start sm:gap-5 gap-2 max-sm:flex-col max-sm:self-center">
                            <Button variant="hirisk-reverse">About us</Button>
                            <IntroVideo />
                        </div>
                    </div>
                </AnimatedCard>
                <AnimatedCard direction="up" className="md:basis-2/5">
                    <div className="flex items-center justify-center">
                        <div className="rounded-full xl:w-4/5 xl:h-4/5 max-md:h-4/5 max-md:w-4/5 max-sm:h-full max-sm:w-full">
                            <Image
                                src={img.src}
                                alt="img"
                                width={10000}
                                height={10000}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </Container>
    )
}