"use client"

import Image from "next/image"
import Container from "./Container"
import NextLink from "next/link"
import { Typography } from "../ui/typography"
import logo from "/public/images/logo.jpg"
import { mainLinks } from "@/utils/constants"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { usePathname } from "next/navigation"
import { Link } from "../ui/linkButton"
import useMediaQuery from "@/hooks/useMediaQuery"

export default function Footer() {
    const pathname = usePathname()
    const isUltraSmall = useMediaQuery('(max-width:300px)')
    if (pathname !== "/" && !pathname.includes("pdf")) {
        return (
            <Container className="bg-mainBackground h-fit overflow-hidden flex flex-col items-center justify-start sm:gap-10 gap-5">
                <div className="grid sm:gap-5 gap-3 lg:grid-cols-4 grid-cols-2 items-start sm:justify-items-center w-full">
                    <div className="sm:w-full lg:w-fit sm:pl-10 lg:pl-0 flex flex-col max-sm:items-center items-start justify-start gap-5 max-sm:col-start-1 max-sm:col-end-3">
                        <NextLink
                            href="/home"
                            className="flex items-center justify-start gap-1 text-lg font-semibold md:text-base w-fit"
                        >
                            <Typography variant="h1" color="main" className="sm:text-5xl text-3xl">HiRisk</Typography>
                            <Image 
                                alt="logo"
                                src={logo.src}
                                placeholder="blur"
                                blurDataURL={logo.blurDataURL}
                                width={1000}
                                height={1000}
                                className="sm:w-16 sm:h-16 w-10 h-10 rounded-full object-cover"
                                priority
                            />
                        </NextLink>
                        <div className="flex items-center justify-center gap-2">
                            <NextLink
                                target="_blank"
                                className="group w-fit h-fit p-2"
                                href={mainLinks.instagram}
                            >
                                <FaInstagram className="w-6 h-6 text-mainColor group-hover:text-instagram group-hover:scale-110 duration-300"/>
                            </NextLink>
                            <NextLink
                                target="_blank"
                                className="group w-fit h-fit p-2"
                                href={mainLinks.tiktok}
                            >
                                <FaTiktok className="w-6 h-6 text-mainColor group-hover:text-tiktok group-hover:scale-110 duration-300"/>
                            </NextLink>
                            <NextLink
                                target="_blank"
                                className="group w-fit h-fit p-2"
                                href={mainLinks.facebook}
                            >
                                <FaFacebook className="w-6 h-6 text-mainColor group-hover:text-facebook group-hover:scale-110 duration-300"/>
                            </NextLink>
                        </div>
                    </div>
                    <div className="sm:w-full lg:w-fit sm:pl-10 lg:pl-0 flex flex-col items-start justify-start">
                        <Typography variant="h1" color="main" className="sm:mb-3 mb-2 sm:text-2xl text-lg">HiRisk</Typography>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold" href="/about-us">About Us</Link>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold" href="#">Menu</Link>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold" href="#">Blogs</Link>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold" href="#">Contact us</Link>
                    </div>
                    <div className="sm:w-full lg:w-fit sm:pl-10 lg:pl-0 flex flex-col items-start justify-start max-sm:col-start-1 max-sm:col-end-3">
                        <Typography variant="h1" color="main" className="sm:mb-3 mb-2 sm:text-2xl text-lg">Success Stories</Typography>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold" href="#">Why Choose HiRisk</Link>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold" href="#">Testimonials</Link>
                    </div>
                    <div className="w-full lg:w-fit sm:pl-10 lg:pl-0 flex flex-col items-start justify-start max-sm:row-start-2 max-sm:col-start-2">
                        <Typography variant="h1" color="main" className="sm:mb-3 mb-2 sm:text-2xl text-lg">We Deliver!</Typography>
                        <Link variant="navLink" className="pl-0 pt-0 sm:text-base text-sm font-bold whitespace-normal" href="tel:01061791627">Call Us 01061791627</Link>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between max-sm:flex-col lg:-mb-8 md:-mb-5 xl:-mb-16">
                    <Typography color={"main"} variant="h3" className={`${isUltraSmall ? "max-sm:text-[10px]" : ""}`}>Copyrights © 2024 HiRisk Egypt</Typography>
                    <Typography color={"main"} variant="h3" className={`${isUltraSmall ? "max-sm:text-[10px]" : ""}`}>Developed By <span className="text-primary">Ahmed Mohamed</span></Typography>
                </div>
            </Container>
        )
    }   
}
