import { StaticImageData } from "next/image";

interface BlogContent {
    id: number
    title: string,
    subtitle: string,
    blog: string
}

interface Blog {
    id: number,
    title: string,
    subtitle: string,
    content: BlogContent[],
    description: string,
    createdAt: string,
    image: StaticImageData
}