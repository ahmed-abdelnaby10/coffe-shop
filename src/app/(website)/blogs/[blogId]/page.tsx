import Landing from '@/components/reusable components/Landing'
import BlogComponent from '@/sections/website/blogs/BlogComponent'
import React from 'react'
import mainBg from "/public/images/blog.jpg"
import { blogs } from '@/utils/data'
import { Blog } from '@/types/blogs'

export default async function page( { params }: { params: { blogId: string }} ) {
    const blogId = +params.blogId
    const blog = blogs.find((blog)=> blog.id === blogId) as Blog
    return (
        <>
            <Landing 
                background={mainBg}
                header="HiRisk|Blog"
                title={blog.title}
                buttons={false}
            />
            <BlogComponent blogId={blogId} />
        </>
    )
}
