'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useSelector } from '@/lib/rtk'
import { menuData } from '@/utils/data'
import React, { useEffect, useState } from 'react'

export default function Category() {
    const targetCategory = useSelector((state) => state.category) 
    const [subMenu, setSubMenu] = useState<Menu>()

    useEffect(()=> {
        const data: Menu = menuData.find((item) => item.category.toLowerCase() === targetCategory?.toLowerCase()) as Menu
        setSubMenu(data)
    },[targetCategory])
    
    if (!targetCategory) {
        return (
            <div className='lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2'>
                <Typography className='w-full text-3xl tracking-wider text-center' variant='h1' color={"main"}>Please Choose Category</Typography>
            </div>
        )
    }

    return (
        <div className='lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2 grid sm:grid-cols-3 grid-cols-1 gap-5'>
            {
                subMenu?.items.map((item, index) => {
                    return (
                        <Card key={item.price * index} className='h-44 bg-mainBackground shadow-xl'>
                            <CardHeader className='flex flex-col items-center'>
                                <CardTitle className='text-mainColor text-center'>{item.name.en}</CardTitle>
                                <CardDescription>{targetCategory}</CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col items-center justify-start gap-5'>
                                {item.price} EGP
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}
