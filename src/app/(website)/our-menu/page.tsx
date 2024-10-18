import Landing from '@/components/reusable components/Landing'
import React from 'react'
import menu from '/public/images/menu.jpg'
import Container from '@/components/reusable components/Container'
import SelectMenu from '@/components/reusable components/SelectMenu'
import Category from '@/sections/website/menu/Category'


export default function page() {
    return (
        <>
            <Landing 
                background={menu}
                buttons={false}
                title='HiRisk Menu'
                header='Find|Yourself'
            />
            <Container className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10">
                <SelectMenu />
                <Category />
            </Container>
        </>
    )
}
