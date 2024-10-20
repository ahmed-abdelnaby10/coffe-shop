import NotFound from '@/components/resource stats/NotFound'
import Container from '@/components/reusable components/Container'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Not Found 404"
}

export default function NotFoundPage() {
    return (
        <Container className='h-screen absolute top-0 left-0 w-full -z-50'>
            <NotFound />
        </Container>
    )
}