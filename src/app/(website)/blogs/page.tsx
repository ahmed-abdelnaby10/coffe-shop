import Landing from "@/components/reusable components/Landing";
import BlogPosts from "@/sections/website/blogs/BlogPosts";
import mainBg from "/public/images/blog.jpg"

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
