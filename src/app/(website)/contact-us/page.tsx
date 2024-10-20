import Landing from '@/components/reusable components/Landing'
import React from 'react'
import menu from '/public/images/menu.jpg'
import Container from '@/components/reusable components/Container'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact us"
}

export default function page() {
    return (
        <>
            <Landing 
                background={menu}
                buttons={false}
                title='Contact Us'
                header='Keep in|Touch|With Us'
            />
            <Container className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10">
                <div>Contact US</div>
            </Container>
        </>
    )
}
