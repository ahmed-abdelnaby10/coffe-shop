import { Link } from "@/components/ui/linkButton";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import hirisk from "/public/images/hirisk cafe.jpg"
import Container from "@/components/reusable components/Container";
import AnimatedCard from "@/framer-motions/AnimatedCard";

export default function Blogs() {
    return (
        <Container>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center justify-center">
                <AnimatedCard direction="up" className="max-lg:col-start-1 max-lg:col-end-3 max-lg:justify-self-start">
                    <div className="flex flex-col items-start justify-start gap-5">
                        <Typography variant="h1" className="lg:text-5xl sm:text-3xl text-xl whitespace-nowrap" color="main">HiRisk Blogs</Typography>
                        <Typography variant="p" className="" color="primary">Be up-to-date with the latest updates, products & services in the HiRisk World!</Typography>
                        <Link href="/blogs" variant="hirisk">Go to blogs</Link>
                    </div>
                </AnimatedCard>
                <AnimatedCard direction="up" className="max-sm:col-start-1 max-sm:col-end-3 w-full">
                    <div className="flex flex-col items-start gap-5">
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src={hirisk.src}
                                alt="hirisk"
                                width={99999}
                                height={99999}
                                className="w-full h-full"
                            />
                        </div>
                        <Link href="" variant="ghost" className="text-mainColor whitespace-normal max-sm:py-2 block h-fit">Discover Your Perfect Cup at HiRisk Café</Link>
                    </div>
                </AnimatedCard>
                <AnimatedCard direction="up" className="max-sm:col-start-1 max-sm:col-end-3 w-full">
                    <div className="flex flex-col items-start gap-5">
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src={hirisk.src}
                                alt="hirisk"
                                width={99999}
                                height={99999}
                                className="w-full h-full"
                            />
                        </div>
                        <Link href="" variant="ghost" className="text-mainColor whitespace-normal max-sm:py-2 block h-fit">Mastering the Art of Coffee</Link>
                    </div>
                </AnimatedCard>
            </div>
        </Container>
    )
}
