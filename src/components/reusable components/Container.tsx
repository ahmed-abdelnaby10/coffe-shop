"use client"

import React from "react"

interface ContainerProps {
    className?: string,
    children: React.ReactNode
}

export default function Container({ className, children }: ContainerProps) {
    return (
        <div className={`${className} lg:py-12 xl:py-20 md:py-8 py-5 lg:px-20 sm:px-10 px-5`}>
            {children}
        </div>
    )
}
