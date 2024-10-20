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
        const data: Menu = menuData.filter((item) => item.category.toLowerCase() === targetCategory?.toLowerCase())[0]
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
                    if (item.name && item.price) {
                        return (
                            <Card key={item.price * index} className='h-44 bg-mainBackground shadow-xl relative overflow-hidden'>
                                <CardHeader className='flex flex-col items-center'>
                                    <CardTitle className='text-mainColor text-center'>{item.name.en}</CardTitle>
                                    <CardDescription>{targetCategory}</CardDescription>
                                </CardHeader>
                                <CardContent className='flex items-center justify-center gap-5'>
                                    <subMenu.icon className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10 rotate-[30deg] text-[12rem] text-mainColor"}/>
                                    {item.price} EGP
                                </CardContent>
                            </Card>
                        )
                    }
                })
            }
        </div>
    )
}
