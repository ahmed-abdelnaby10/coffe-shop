'use client'

import Image from 'next/image'
import React from 'react'
import notfound from "/public/images/notfound.png"
import { Typography } from '../ui/typography'
import { Link } from '../ui/linkButton'

export default function NotFound() {
    return (
        <div className='flex items-center flex-col justify-center w-full h-full sm:gap-10 gap-5'>
            <Image 
                src={notfound.src}
                alt='404'
                width={notfound.width}
                height={notfound.height}
                placeholder='blur'
                blurDataURL={notfound.blurDataURL}
            />
            <Typography variant='h1' color={"main"} size={"xl"} className='text-center'>We&apos;re sorry this page is not found!</Typography>
            <Link href='/home' variant={"hirisk"}>Back Home</Link>
        </div>
    )
}