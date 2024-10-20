import Banners from "@/sections/website/home/Banners";
import Blogs from "@/sections/website/home/Blogs";
import FollowHirisk from "@/sections/website/home/FollowHirisk";
import Landing from "@/components/reusable components/Landing";
import Pickup from "@/sections/website/home/Pickup";
import mainBg from "/public/images/blog.jpg"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home"
}
export default function page() {
    return (
        <>
            <Landing 
                background={mainBg}
                header="For|Every|Hunger"
                buttons={true}
            />
            <Pickup />
            <Banners />
            <Blogs />    
            <FollowHirisk />
        </>
    )
}
