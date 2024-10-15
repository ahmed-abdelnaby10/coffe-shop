import Landing from "@/components/reusable components/Landing";
import mainBg from "/public/images/blog.jpg"
import Container from "@/components/reusable components/Container";
import SideNav from "@/sections/website/about-us/SideNav";
import WhoWeAre from "@/sections/website/about-us/WhoWeAre";
import Statistics from "@/sections/website/about-us/Statistics";
import MissionAndVision from "@/sections/website/about-us/MissionAndVision";
import History from "@/sections/website/about-us/History";
import { Separator } from "@/components/ui/separator";
import SuccessStory from "@/sections/website/about-us/SuccessStory";

export default function page() {
    return (
        <>
            <Landing 
                background={mainBg}
                header="GET TO|KNOW|US"
                title="About HiRisk"
                buttons={false}
            />
            <Container className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10">
                <SideNav />
                <WhoWeAre />
                <Statistics />
                <Separator className="lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2"/>
                <MissionAndVision />
                <Separator className="lg:col-start-2 lg:col-end-6 col-start-1 sm:col-end-3 col-end-2"/>
                <History />
                <SuccessStory />
            </Container>
        </>
    )
}