"use client"

import { Typography } from "@/components/ui/typography";
import { TiFlag } from "react-icons/ti";
import { IoTelescope } from "react-icons/io5";

export default function MissionAndVision() {
    return (
        <div id="mission-vision" className='grid lg:grid-cols-2 grid-cols-1 w-full gap-5 max-sm:flex-col lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2'>
            <div className='flex items-center justify-start gap-2 w-full'>
                <div className='flex items-center justify-center sm:w-20 sm:h-20 w-12 h-12 rounded-full bg-mainBackground'>
                    <TiFlag className="text-mainColor sm:text-5xl text-2xl" />
                </div>
                <div className="flex flex-col items-start justify-start h-full w-full flex-1 gap-1">
                    <Typography variant="h1" color={"main"} className="lg:text-4xl sm:text-3xl text-xl">Our Mission</Typography>
                    <Typography variant="p" color={"muted"} className="">HiRisk aims to provide exceptional coffee, creating a welcoming environment that fosters community, comfort, and unforgettable experiences.</Typography>
                </div>
            </div>
            <div className='flex items-center justify-start gap-2 w-full'>
                <div className='flex items-center justify-center sm:w-20 sm:h-20 w-12 h-12 rounded-full bg-mainBackground'>
                    <IoTelescope className="text-mainColor sm:text-5xl text-2xl" />
                </div>
                <div className="flex flex-col items-start justify-start h-full w-full flex-1 gap-1">
                    <Typography variant="h1" color={"main"} className="lg:text-4xl sm:text-3xl text-xl">Our Vision</Typography>
                    <Typography variant="p" color={"muted"} className="">We aspire to grow as a leading coffee brand, expanding while maintaining quality, innovation, and strong community connections.</Typography>
                </div>
            </div>
        </div>
    )
}