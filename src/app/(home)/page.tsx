import Container from "@/components/reusable components/Container";
import { Typography } from "@/components/ui/typography";
import logo from "/public/images/logo.jpg"
import website from "/public/images/website.jpg"
import Image from "next/image";
import { Link } from "@/components/ui/linkButton";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import MenuDialog from "@/sections/home/MenuDialog";
import { mainLinks } from "@/utils/constants";

export default function page() {
  return (
      <Container className="bg-mainBackground h-screen">
        <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <Image 
              src={logo.src}
              alt="Image"
              width={1000}
              height={1000}
              className="w-16 h-16 rounded-full shadow-md object-cover"
              priority
              placeholder="blur"
              blurDataURL={logo.blurDataURL}
            />
            <Typography variant="h1" size="xl" color="main">HiRisk</Typography>
            <Typography variant="p" size="base" color="main" className="text-center">Introduce you and your friends a unique and <br /> memorable experience.</Typography>
          </div>
          <MenuDialog />
          <Link
            href="/home"
            className="flex flex-row-reverse pr-2 items-center justify-between gap-5 w-full max-w-lg h-fit rounded-[36px]"
            variant="outline"
          >
            <Image 
              src={website.src}
              alt="Image"
              width={1000}
              height={1000}
              className="w-12 h-12 rounded-full shadow-md"
              priority
              placeholder="blur"
              blurDataURL={website.blurDataURL}
            />
            <Typography variant="p" color="primary">Website</Typography>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <Link
              variant="instagram"
              target="_blank"
              className="group w-fit h-fit p-2"
              href={mainLinks.instagram}
            >
              <FaInstagram className="w-6 h-6 group-hover:scale-110 duration-300"/>
            </Link>
            <Link
              variant="tiktok"
              target="_blank"
              className="group w-fit h-fit p-2"
              href={mainLinks.tiktok}
            >
              <FaTiktok className="w-6 h-6 group-hover:scale-110 duration-300"/>
            </Link>
            <Link
              variant="facebook"
              target="_blank"
              className="group w-fit h-fit p-2"
              href={mainLinks.facebook}
            >
              <FaFacebook className="w-6 h-6 group-hover:scale-110 duration-300"/>
            </Link>
          </div>
        </div>
      </Container>
  );
}