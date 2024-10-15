"use client"

import Container from '@/components/reusable components/Container'
import React from 'react'
import facebookBanner from "/public/images/facebook.bg_.svg"
import instagramBanner from "/public/images/insta.bg_.svg"
import tiktokBanner from "/public/images/tiktokbanner.png"
import phoneBanner from "/public/images/phonebanner.png"
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { Typography } from '@/components/ui/typography'
import Link from 'next/link'
import { mainLinks } from '@/utils/constants'
import FallFromSkyAnimation from '@/framer-motions/FallFromSky'

export default function FollowHirisk() {
    return (
        <Container className='flex flex-col items-center justify-start gap-10'>
            <div className='flex flex-col lg:items-center items-start justify-start gap-5 w-full'>
                <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl uppercase whitespace-nowrap max-sm:self-start" color="main">Follow us</Typography>
                <Typography variant='p' color="primary">
                    Subscribe to be the first to know about the latest offers and new products!
                </Typography>
            </div>
            <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center justify-center'>
                <FallFromSkyAnimation delay={0.2} className='w-full max-lg:h-44 flex items-center justify-start'>
                    <div className='relative rounded-xl w-full h-full overflow-hidden'>
                        <Image
                            src={facebookBanner}
                            alt='facebookbanner'
                            width={9999}
                            height={9999}
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-full flex items-center justify-start sm:gap-2 md:gap-5 lg:gap-2 gap-5 absolute top-1/2 -translate-y-1/2 left-0 py-5 lg:pl-1 pl-5 max-sm:pl-2'>
                            <FaFacebookF className='lg:self-end text-3xl xl:text-3xl lg:text-2xl text-mainBackground'/>
                            <div>
                                <Typography variant='h1' className='lg:text-sm xl:text-lg text-lg max-sm:text-base text-mainBackground sm:whitespace-nowrap'>Follow us on Facebook</Typography>
                                <Link target='_blank' href={mainLinks.facebook} className='text-mainBackground text-lg font-bold'>@HiRisk</Link>
                            </div>
                        </div>
                    </div>
                </FallFromSkyAnimation>
                <FallFromSkyAnimation delay={0.4} className='w-full max-lg:h-44 flex items-center justify-start'>
                    <div className='relative rounded-xl w-full h-full overflow-hidden'>
                        <Image
                            src={instagramBanner.src}
                            alt='instagramBanner'
                            width={9999}
                            height={9999}
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-full flex items-center justify-start sm:gap-2 md:gap-5 lg:gap-2 gap-5 absolute top-1/2 -translate-y-1/2 left-0 py-5 lg:pl-1 pl-5 max-sm:pl-2'>
                            <FaInstagram className='lg:self-end text-3xl xl:text-3xl lg:text-2xl text-mainBackground'/>
                            <div>
                                <Typography variant='h1' className='lg:text-sm xl:text-lg text-lg max-sm:text-base text-mainBackground sm:whitespace-nowrap'>Follow us on Instagram</Typography>
                                <Link target='_blank' href={mainLinks.instagram} className='text-mainBackground text-lg font-bold'>@HiRisk</Link>
                            </div>
                        </div>
                    </div>
                </FallFromSkyAnimation>
                <FallFromSkyAnimation delay={0.6} className='w-full max-lg:h-44 flex items-center justify-start'>
                    <div className='relative rounded-xl w-full h-full overflow-hidden'>
                        <Image
                            src={tiktokBanner.src}
                            alt='tiktokBanner'
                            width={9999}
                            height={9999}
                            className='w-full h-full'
                            placeholder="blur"
                            blurDataURL={tiktokBanner.blurDataURL}
                        />
                        <div className='w-full h-full flex items-center justify-start sm:gap-2 md:gap-5 lg:gap-2 gap-5 absolute top-1/2 -translate-y-1/2 left-0 py-5 lg:pl-1 pl-5 max-sm:pl-2'>
                            <FaTiktok className='lg:self-end text-3xl xl:text-3xl lg:text-2xl text-mainBackground'/>
                            <div>
                                <Typography variant='h1' className='lg:text-sm xl:text-lg text-lg max-sm:text-base text-mainBackground sm:whitespace-nowrap'>Follow us on Tiktok</Typography>
                                <Link target='_blank' href={mainLinks.tiktok} className='text-mainBackground text-lg font-bold'>@HiRisk</Link>
                            </div>
                        </div>
                    </div>
                </FallFromSkyAnimation>
                <FallFromSkyAnimation delay={0.8} className='w-full max-lg:h-44 flex items-center justify-start'>
                    <div className='relative rounded-xl w-full h-full overflow-hidden'>
                        <Image
                            src={phoneBanner.src}
                            alt='phoneBanner'
                            width={9999}
                            height={9999}
                            className='w-full h-full'
                            placeholder="blur"
                            blurDataURL={phoneBanner.blurDataURL}
                        />
                        <div className='w-full h-full flex items-center justify-start sm:gap-2 md:gap-5 lg:gap-2 gap-5 absolute top-1/2 -translate-y-1/2 left-0 py-5 lg:pl-1 pl-5 max-sm:pl-2'>
                            <FaPhoneAlt className='lg:self-end text-3xl xl:text-3xl lg:text-2xl text-mainBackground'/>
                            <div>
                                <Typography variant='h1' className='lg:text-sm xl:text-lg text-lg max-sm:text-base text-mainBackground sm:whitespace-nowrap'>We deliver to you</Typography>
                                <Link href="tel:01061791627" className='text-mainBackground text-lg font-bold'>@HiRisk</Link>
                            </div>
                        </div>
                    </div>
                </FallFromSkyAnimation>
            </div>
        </Container>
    )
}