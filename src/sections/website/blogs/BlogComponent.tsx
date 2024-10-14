import Container from '@/components/reusable components/Container'
import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import { Blog } from '@/types/blogs'
import { blogs } from '@/utils/data'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogComponent({ blogId }: { blogId: number }) {
    const blog = blogs.find((blog) => blog.id === blogId) as Blog
    const otherBlogs = blogs.filter((blog) => blog.id !== blogId) as Blog[]
    return (
        <Container className="min-h-fit flex flex-col lg:gap-20 gap-10">
            <div className='flex flex-col items-center justify-start w-full gap-10 max-sm:gap-5'>
                <Typography variant='h1' className='text-2xl' color="main">{blog.title}</Typography>
                <div className='grid lg:grid-cols-3 grid-cols-1 sm:gap-10 gap-5'>
                    <div className='sm:col-start-1 sm:col-end-3 flex flex-col items-start justify-start gap-5 sm:pr-5 md:pr-10 lg:pr-20'>
                        <Typography variant='h2' color={"muted"}>{blog.subtitle}</Typography>
                        <ul className='flex flex-col items-start justify-start gap-1'>
                            {
                                blog.content.map((item)=> {
                                    return (
                                        <li key={item.id} className='flex items-start flex-col'>
                                            <div className='flex items-center'>
                                                <Dot />
                                                <Typography variant='p' size="md" color="primary" className='font-bold'>{item.title}</Typography>
                                                <Typography variant='p' size="md" color="muted" className=''>&nbsp;-&nbsp;{item.subtitle}</Typography>
                                            </div>
                                            <Typography className='ml-8' variant='p' color="muted">{item.blog}</Typography>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='rounded-lg shadow-md w-full h-full'>
                        <Image 
                            src={blog.image.src}
                            alt={blog.title}
                            width={9999}
                            height={9999}
                            className='w-full h-full rounded-lg lg:object-cover'
                        />
                    </div>
                </div>
                <Separator />
                <Typography variant='h1' color={"main"} className='sm:text-3xl text-xl'>More HiRisk Articles!</Typography>
                <div className='flex w-fit items-center justify-center gap-5'>
                    {
                        otherBlogs.map((item) => {
                            return (
                                <div key={item.id} className='flex items-start justify-start flex-col gap-5 sm:w-72 w-full'>
                                    <div className='aspect-square rounded-lg shadow-lg'>
                                        <Image
                                            src={item.image.src}
                                            alt={item.title}
                                            width={99999}
                                            height={99999}
                                            className='w-full h-full rounded-lg'
                                        />
                                    </div>
                                    <Typography variant='h1' className='text-2xl' color="main">{item.title}</Typography>
                                    <Typography variant='p' size="md" color="muted" className=''>{item.description.slice(0, 50)}...
                                        <Link href={`/blogs/${item.id}`} className='text-primary'>Read More</Link>
                                    </Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}
