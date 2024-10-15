import Container from '@/components/reusable components/Container'
import React from 'react'
import { Link } from '@/components/ui/linkButton'
import { blogs } from '@/utils/data'
import Image from 'next/image'
import { Typography } from '@/components/ui/typography'

export default function BlogPosts() {
    return (
        <Container className="min-h-fit flex flex-col lg:gap-20 gap-10">
            <div className='grid grid-cols-1 sm:gap-10 gap-5'>
                {
                    blogs.map((blog)=> {
                        return (
                            <div key={blog.id} className='flex flex-col items-start gap-5'>
                                <Link href={`/blogs/${blog.id}`} variant="ghost" className="text-mainColor whitespace-normal max-sm:py-2 block h-fit text-xl w-fit">{blog.title}</Link>
                                <div className='rounded-xl shadow-lg aspect-square w-full'>
                                    <Image
                                        src={blog.image.src}
                                        alt={blog.title}
                                        width={9999}
                                        height={9999}
                                        priority
                                        placeholder="blur"
                                        blurDataURL={blog.image.blurDataURL}
                                        className='w-full h-full rounded-xl'
                                    />
                                </div>
                                <Typography variant='p' color="muted" className='sm:w-2/5'>
                                    {blog.description}
                                </Typography>
                                <Typography variant='h1' color="main" className='mt-auto'>
                                    {blog.createdAt}
                                </Typography>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}
