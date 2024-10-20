"use client"

import { Link } from "@/components/ui/linkButton"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"
import Image from "next/image"
import logo from "/public/images/logo.jpg"

export default function NavBar() {
    const pathname = usePathname()

    if (pathname !== "/" && !pathname.includes("pdf")) {
        return (
            <header className="flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6 z-50 relative">
                <nav className="hidden flex-col gap-6 text-lg h-full font-medium md:flex-1 md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <NextLink
                        href="/home"
                        className="flex items-center justify-start gap-1 text-lg font-semibold md:text-base w-fit"
                    >
                        <Typography variant="h1" color="main" size="xl">HiRisk</Typography>
                        <Image 
                            alt="logo"
                            src={logo.src}
                            placeholder="blur"
                            blurDataURL={logo.blurDataURL}
                            width={1000}
                            height={1000}
                            className="w-10 h-10 rounded-full object-cover"
                            priority
                        />
                    </NextLink>
                    <Link
                        variant="navLink"
                        href="/about-us"
                        className="h-full rounded-none transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        variant="navLink"
                        href="/our-menu"
                        className="h-full rounded-none transition-colors"
                    >
                        Menu
                    </Link>
                    <Link
                        variant="navLink"
                        href="/blogs"
                        className="h-full rounded-none transition-colors"
                    >
                        Blogs
                    </Link>
                    <Link
                        variant="navLink"
                        href="/contact-us"
                        className="h-full rounded-none transition-colors"
                    >
                        Contact Us
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col items-start justify-between">
                        <nav className="flex flex-col items-start justify-start gap-6 text-lg font-medium w-full">
                            <NextLink
                                href="/home"
                                className="flex items-center justify-start gap-1 text-lg font-semibold md:text-base w-fit pl-4"
                            >
                                <Typography variant="h1" color="main" size="xl">HiRisk</Typography>
                                <Image 
                                    alt="logo"
                                    src={logo.src}
                                    placeholder="blur"
                                    blurDataURL={logo.blurDataURL}
                                    width={1000}
                                    height={1000}
                                    className="w-10 h-10 rounded-full object-cover"
                                    priority
                                />
                            </NextLink>
                            <Link
                                variant="navLink"
                                href="/about-us"
                                className="h-full rounded-none text-start transition-colors w-full justify-start"
                            >
                                About Us
                            </Link>
                            <Link
                                variant="navLink"
                                href="/our-menu"
                                className="h-full rounded-none text-start transition-colors w-full justify-start"
                            >
                                Menu
                            </Link>
                            <Link
                                variant="navLink"
                                href="#"
                                className="h-full rounded-none text-start transition-colors w-full justify-start"
                            >
                                Customers
                            </Link>
                            <Link
                                variant="navLink"
                                href="#"
                                className="h-full rounded-none text-start transition-colors w-full justify-start"
                            >
                                Contact US
                            </Link>
                        </nav>
                        <NextLink href="" className="flex items-center justify-start gap-2 mb-5">
                            <div className="w-10 h-10 rounded-full bg-mainBackground flex items-center justify-center">
                                <Phone className="w-5 h-5 text-mainColor" />
                            </div>
                            <Typography variant="h2" color="main">
                                01061791627
                            </Typography>
                        </NextLink>
                    </SheetContent>
                </Sheet>
                <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <NextLink href="tel:01061791627" className="flex items-center justify-start gap-2">
                        <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full bg-secondary  flex items-center justify-center">
                            <Phone className="w-5 h-5 max-sm:w-4 text-mainColor" />
                        </div>
                        <Typography variant="h2" color="main" className="max-sm:text-sm">
                            01061791627
                        </Typography>
                    </NextLink>
                </div>
            </header>
        )
    }
}
