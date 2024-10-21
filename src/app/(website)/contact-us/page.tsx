import Landing from '@/components/reusable components/Landing'
import React from 'react'
import menu from '/public/images/menu.jpg'
import Container from '@/components/reusable components/Container'
import { Metadata } from "next";
import ContactForm from '@/sections/website/contact-us/ContactForm';
import Location from '@/sections/website/contact-us/Location';

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
            <Container className="grid md:grid-cols-2 grid-cols-1 sm:gap-10 gap-5">
                <ContactForm />
                <Location />
            </Container>
        </>
    )
}
