"use client"

import { Typography } from '@/components/ui/typography'
import React from 'react'

export default function WhoWeAre() {
    return (
        <div id='who-we-are' className='flex items-start justify-start flex-col gap-5 lg:col-start-2 lg:col-end-4 col-start-1 sm:col-end-3 col-end-2'>
            <Typography variant='h1' color={"main"} className='lg:text-4xl sm:text-3xl text-xl'>Who We Are</Typography>
            <Typography variant='p' color={"muted"}>
                Welcome to HiRisk, where coffee is more than just a drink – it&apos;s a lifestyle. Established in 2024, HiRisk was founded with a passion for creating a unique and inviting atmosphere where coffee lovers can indulge in expertly crafted beverages.
            </Typography>
            <Typography variant='p' color={"muted"}>
                Despite being new to the scene, we&apos;ve quickly become a favorite spot for coffee enthusiasts, with two cozy branches located at 32 El-Estad Street, next to Hyper Discount, Tanta, Egypt.
            </Typography>
            <Typography variant='p' color={"muted"}>
                Our commitment to quality and service sets us apart, and we pride ourselves on offering a welcoming space where everyone can enjoy the perfect cup of coffee. Whether you&apos;re stopping by for a quick pick-me-up or settling in for a relaxed conversation with friends, HiRisk is here to serve you with a smile.
            </Typography>
        </div>
    )
}
