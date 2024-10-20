import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "@/components/ui/linkButton";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok, FaLinkedin, FaWhatsapp, FaEnvelope, FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import menu from "/public/images/main-menu.jpg"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { mainLinks } from "@/utils/constants";

const ShareDialog = () => {
	const pdfFilePath = "/HiRisk-Menu.pdf#zoom=FitH&navpanes=0"
	const shareUrl = encodeURIComponent(`${mainLinks.shareURL}/${pdfFilePath}`);
  const message = encodeURIComponent("Check out this menu!");

  return (
    <Dialog>
      <DialogTrigger asChild>
				<Button variant={"ghost"} className="group absolute top-4 left-4 ">
          <FaShareAlt className="cursor-pointer group-hover:text-linkedin duration-300"/>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-sm:w-with-padding rounded-xl">
        <DialogHeader>
					<DialogTitle className='text-center text-mainColor'>Share Link</DialogTitle>
					<DialogDescription className='sr-only'>
						Share HiRisk Menu.
					</DialogDescription>
				</DialogHeader>
        <div className="flex items-center justify-start flex-col gap-4">
					<Image 
						src={menu.src}
						alt="Menu"
            placeholder="blur"
            blurDataURL={menu.blurDataURL}
						width={1000}
						height={1000}
						className="object-cover rounded-xl w-60 h-32"
					/>
				</div>
				<Separator />
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <Link className="rounded-full bg-facebook text-white hover:text-facebook hover:bg-white duration-300 w-10 h-10 p-0" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-black text-white hover:text-black hover:bg-white duration-300 w-10 h-10 p-0" href={`https://twitter.com/share?url=${shareUrl}&text=${message}`} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-instagram text-white hover:text-instagram hover:bg-white duration-300 w-10 h-10 p-0" href={`https://instagram.com`} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-snapchat text-white hover:text-snapchat hover:bg-white duration-300 w-10 h-10 p-0" href={`https://snapchat.com`} target="_blank" rel="noopener noreferrer">
            <FaSnapchat className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-tiktok text-white hover:text-tiktok hover:bg-white duration-300 w-10 h-10 p-0" href={`https://www.tiktok.com`} target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-linkedin text-white hover:text-linkedin hover:bg-white duration-300 w-10 h-10 p-0" href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-whatsapp text-white hover:text-whatsapp hover:bg-white duration-300 w-10 h-10 p-0" href={`https://wa.me/?text=${message} ${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl" />
          </Link>

          <Link className="rounded-full bg-mail text-white hover:text-mail hover:bg-white duration-300 w-10 h-10 p-0" href={`mailto:?subject=${message}&body=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
