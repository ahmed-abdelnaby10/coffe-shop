import Landing from '@/components/reusable components/Landing'
import BlogComponent from '@/sections/website/blogs/BlogComponent'
import React from 'react'

export default async function page( { params }: { params: { blogId: string }} ) {
    const blogId = +params.blogId
    return (
        <>
            <Landing />
            <BlogComponent blogId={blogId} />
        </>
    )
}
