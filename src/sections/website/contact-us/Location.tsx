import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Location() {
    return (
        <Card className="w-full flex flex-col items-center justify-start min-h-[500px]">
            <CardHeader className="w-full">
                <CardTitle className="text-2xl text-mainColor max-sm:text-center">Our Loaction!</CardTitle>
                <CardDescription className="max-sm:text-center">
                    Give us the honor by visiting us.
                </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex-1 flex flex-col items-start justify-start">
                <div className='flex flex-col items-start justify-start gap-5 w-full flex-1'>
                    <Link href={"https://maps.app.goo.gl/wbSDVKRqKEouEhAV6"} target='_blank' className='flex items-center justify-start gap-2 hover:text-mainColor duration-300'>
                        <FaLocationDot/>
                        <Typography variant='h4' color={"primary"} size={"base"} className='whitespace-normal hover:text-mainColor duration-300'>32 El-Estad Street, next to Hyper Discount, Tanta, Egypt.</Typography>
                    </Link>
                    <Link href={"tel:01061791627"} className='flex items-center justify-start gap-2 hover:text-mainColor duration-300'>
                        <FaPhone/>
                        <Typography variant='h4' color={"primary"} size={"base"} className='whitespace-normal hover:text-mainColor duration-300'>01061791627</Typography>
                    </Link>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3426.4811068564904!2d30.9897718!3d30.8171827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c90039530dff%3A0x28debaa11a32786c!2sHi%20Risk%20Cafe%20%26%20Eatery!5e0!3m2!1sen!2seg!4v1729528503972!5m2!1sen!2seg" 
                        width="auto" 
                        height="auto" 
                        className="border-0 rounded-xl w-full h-full" 
                        loading="lazy" 
                    >
                    </iframe>
                </div>
            </CardContent>
        </Card>
    )
}
