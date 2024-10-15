"use client"

import { Link } from '@/components/ui/linkButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'

export default function SideNav() {
    const sideNavLinks = [
        {
            title: "who we are",
            link: "who-we-are" 
        },
        {
            title: "Mission & Vision",
            link: "mission-vision" 
        },
        {
            title: "History & Timeline",
            link: "history-timeline" 
        },
        {
            title: "Our Story",
            link: "story" 
        },
    ]

    const isSmallScreen = useMediaQuery('(min-width:1024px)')
    if (isSmallScreen)
    return (
        <div className='col-start-1 col-end-2 h-full relative row-start-1 row-end-4'>
            <div className='flex flex-col h-fit w-full sticky top-10 left-0 gap-5'>
                {
                    sideNavLinks.map((item, index) => {
                        return (
                            <Link key={index} href={`#${item.link}`} variant="outline" className='text-mainColor whitespace-normal max-sm:py-2 block h-fit capitalize'>
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
