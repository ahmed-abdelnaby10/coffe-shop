"use client"

import { Typography } from '@/components/ui/typography'
import React from 'react'

export default function Statistics() {
    const statistics = [
        {
            statistic: 7,
            title: "Days per weak"
        },
        {
            statistic: "9 AM : 1 AM",
            title: "Every day"
        },
        {
            statistic: "+50k",
            title: "Followers"
        },
        {
            statistic: "+100k",
            title: "Cups of coffee"
        },
    ]
    return (
        <div 
            className='grid lg:grid-cols-2 md:grid-cols-4 gap-5 lg:col-start-4 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2 h-fit'
        >
            {
                statistics.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center gap-0 w-full h-full py-5 px-2 bg-mainBackground rounded-xl'>
                            <Typography className='text-xl' variant='h1' color={"main"}>{item.statistic}</Typography>
                            <Typography className='' variant='p' color={"primary"}>{item.title}</Typography>
                        </div>
                    )
                })
            }
        </div>
    )
}
