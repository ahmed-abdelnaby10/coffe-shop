import { Typography } from '@/components/ui/typography'
import React from 'react'

export default function SuccessStory() {
    return (
        <div id='story' className='lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2'>
            <div className='w-full h-fit sm:py-10 py-5 flex flex-col items-start justify-center gap-5 px-5 rounded-xl bg-mainBackground'>
                <Typography variant='h1' color={"main"} className='lg:text-4xl sm:text-3xl text-xl'>A Success Story</Typography>
                <Typography variant='p' color={"muted"}>
                    HiRisk started in 2024 with two branches in Tanta, Egypt, aiming to create a unique coffee experience. We&apos;ve built a loyal customer base by focusing on quality, community, and exceptional service. Our café has become a hub for connection, and we continue to grow with passion and dedication.
                </Typography>
            </div>
        </div>
    )
}
