"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Typography } from "@/components/ui/typography"

export default function IntroVideo() {
    const pdfFilePath = "/videos/introduce-video.mp4"
    return (
        <Dialog >
			<DialogTrigger asChild>
                <Button variant="hirisk">Watch video</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] max-sm:w-with-padding rounded-xl bg-mainBackground">
				<Typography variant="h1" size="lg" color="main" className="mb-5 text-center">
					HiRisk Introduction Video.
				</Typography>
				<embed
					src={pdfFilePath}
					type="video/mp4"
					width="100%"
					height="400px"
				/>
			</DialogContent>
		</Dialog>
    )
}
