import Banners from "@/sections/website/home/Banners";
import Blogs from "@/sections/website/home/Blogs";
import FollowHirisk from "@/sections/website/home/FollowHirisk";
import Landing from "@/components/reusable components/Landing";
import Pickup from "@/sections/website/home/Pickup";

export default function page() {
    return (
        <>
            <Landing />
            <Pickup />
            <Banners />
            <Blogs />    
            <FollowHirisk />
        </>
    )
}
