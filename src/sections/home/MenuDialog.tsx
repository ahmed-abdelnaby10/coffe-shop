"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import mainMenu from "/public/images/main-menu.jpg"
import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Link } from '@/components/ui/linkButton';
import ShareDialog from './ShareDialog';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { mainLinks } from '@/utils/constants';

export default function MenuDialog() {
	const pdfFilePath = "/HiRisk Menu.pdf#zoom=FitH&navpanes=0"
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="flex flex-row-reverse pr-2 items-center justify-between gap-5 w-full max-w-lg h-fit rounded-[36px]">
					<Image
						src={mainMenu.src}
						placeholder="blur"
						blurDataURL={mainMenu.blurDataURL}
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
				<DialogHeader>
					<DialogTitle className='text-center'>Main Menu</DialogTitle>
					<DialogDescription className='sr-only'>
						View HiRisk Menu.
					</DialogDescription>
				</DialogHeader>
				<div className='h-[400px]'>
					<Worker workerUrl={mainLinks.PDFWorkerURL}>
						<Viewer fileUrl={pdfFilePath} />
					</Worker>
				</div>
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