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
import { Button } from "@/components/ui/button";
import img from "/public/images/bgwithH.png"
import AnimatedCard from "@/framer-motions/AnimatedCard";
import IntroVideo from "./IntroVideo";
import { useDispatch } from "@/lib/rtk";
import { setCategory } from "@/lib/rtk/slices/category.slice";
import { useRouter } from "next/navigation";

export default function Pickup() {
    const isSmallScreen = useMediaQuery("(max-width:640px)")
    const isLargeScreen = useMediaQuery("(max-width:1024px)")

    const dispatch = useDispatch()
    const router = useRouter()

    const handleOnClick = (cate: Category) => {
        dispatch(setCategory(cate.title))
        router.push('/our-menu#menu-items')
    }
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
                                    <Button 
                                        variant={"hirisk"} 
                                        className="p-1 border-none w-full bg-mainBackground relative overflow-hidden rounded-lg flex items-end h-[300px] lg:h-[300px] before:absolute before:content-[''] before:h-full before:w-full before:top-0 before:left-0 before:z-30 before:bg-cate-gradient"
                                        onClick={()=>{
                                            handleOnClick(cate)
                                        }}    
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full z-20 opacity-30">
                                            <Image 
                                                src={cate.image}
                                                alt={cate.title}
                                                width={1000}
                                                height={1000}
                                                className="w-full h-full"
                                                placeholder="blur"
                                                blurDataURL='/images/blurred.png'
                                            />
                                        </div>
                                        <div className="flex items-center justify-between gap-2 z-50 w-full pl-5 pr-1 pb-5">
                                            <Typography variant="h1" size="xl" color="main">{cate.title}</Typography>
                                        </div>
                                    </Button>
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
                                placeholder="blur"
                                blurDataURL={img.blurDataURL}
                            />
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </Container>
    )
}