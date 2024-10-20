import Landing from "@/components/reusable components/Landing";
import BlogPosts from "@/sections/website/blogs/BlogPosts";
import mainBg from "/public/images/blog.jpg"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs"
}

export default function Page() {
    return (
        <>
            <Landing 
                background={mainBg}
                header="HiRisk|Blogs"
                buttons={false}
            />
            <BlogPosts />
        </>
    )
}
