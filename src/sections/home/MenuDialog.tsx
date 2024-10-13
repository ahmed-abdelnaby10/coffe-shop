"use client"

import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import mainMenu from "/public/images/main-menu.jpg"
import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Link } from '@/components/ui/linkButton';
import ShareDialog from './ShareDialog';

export default function MenuDialog() {
	const pdfFilePath = "/HiRisk Menu.pdf#zoom=FitH&navpanes=0"
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="flex items-center justify-between gap-5 w-full max-w-lg h-fit rounded-[36px]">
					<Image
						src={mainMenu.src}
						alt="Image"
						width={1000}
						height={1000}
						className="w-12 h-12 rounded-full object-cover shadow-md"
					/>
					<Typography variant="p" color="primary">
						Main Menu 
					</Typography>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] max-sm:w-with-padding rounded-xl">
				<Typography variant="h2" size="lg" className="mb-5 text-center">
					Main Menu
				</Typography>
				<embed
					src={pdfFilePath}
					type="application/pdf"
					width="100%"
					height="400px"
				/>
				<div className="flex justify-end mt-5">
					<Link
						href={pdfFilePath}
						target="_blank"
						className="bg-black text-white py-2 px-4 rounded-lg w-full"
					>
						View Full
					</Link>
				</div>
				<ShareDialog />
			</DialogContent>
		</Dialog>
	)
}