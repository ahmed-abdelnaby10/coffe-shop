import { Typography } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'
import branch from "/public/images/main-bg.png"
import { Separator } from '@/components/ui/separator'

export default function History() {
    return (
        <div id='history-timeline' className="relative flex max-sm:flex-col items-center justify-center lg:justify-start lg:gap-40 sm:gap-20 gap-5 lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2">
            <div className="flex flex-col items-center justify-start sm:gap-5 gap-2 w-min max-sm:w-full h-full max-sm:h-fit">
                <Typography variant='h1' color={"main"} className='sm:text-2xl text-lg whitespace-nowrap'>Jan 18, 2024</Typography>
                <div className="sm:w-36 h36 sm:rounded-full mb-11 relative before:content-[''] before:absolute before:w-0.5 before:h-10 before:bg-mainColor before:-bottom-10 before:left-1/2 before:-translate-x-1/2 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-mainColor after:-bottom-11 after:rounded-full after:left-1/2 after:-translate-x-1/2 max-sm:w-full">
                    <div className="relative before:content-[''] before:absolute lg:before:w-48 sm:before:w-32 before:h-0.5 before:bg-mainBackground before:top-1/2 before:-translate-y-1/2 lg:before:-right-44 sm:before:-right-28 before:-z-20 max-sm:h-64 max-sm:w-full max-sm:before:hidden">
                        <Image
                            src={branch.src}
                            placeholder='blur'
                            blurDataURL={branch.blurDataURL}
                            alt='branch-1'
                            width={9999}
                            height={9999}
                            className="w-full h-full sm:rounded-full max-sm:object-cover max-sm:rounded-xl"
                        />
                    </div>
                </div>
                <Typography variant='p' color={"muted"} className='text-center'>HiRisk opened its first branch in Tanta.</Typography>
            </div>
            <Separator className='sm:hidden'/>
            <div className='flex flex-col items-center justify-start sm:gap-5 gap-2 w-min max-sm:w-full h-full max-sm:h-fit'>
                <Typography variant='h1' color={"main"} className='sm:text-2xl text-lg whitespace-nowrap'>Aug 18, 2024</Typography>
                <div className="sm:w-36 h36 sm:rounded-full mb-11 relative before:content-[''] before:absolute before:w-0.5 before:h-10 before:bg-mainColor before:-bottom-10 before:left-1/2 before:-translate-x-1/2 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-mainColor after:-bottom-11 after:rounded-full after:left-1/2 after:-translate-x-1/2 max-sm:h-64 max-sm:w-full">
                    <Image
                        src={branch.src}
                        placeholder='blur'
                        blurDataURL={branch.blurDataURL}
                        alt='branch-1'
                        width={9999}
                        height={9999}
                        className='w-full h-full sm:rounded-full max-sm:object-cover max-sm:rounded-xl'
                    />
                </div>
                <Typography variant='p' color={"muted"} className='text-center'>HiRisk opened its second branch in Tanta.</Typography>
            </div>
        </div>
    )
}
