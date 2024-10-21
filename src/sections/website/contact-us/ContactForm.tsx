'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader } from 'lucide-react';
import React, { useCallback } from "react"

const formSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required." })
        .min(3, { message: "Name must be at least 3 characters." })
        .max(30),
    email: z
        .string()
        .email({ message: "Invalid email format." })
        .min(1, { message: "Email is required." }),
    phone: z
        .string()
        .min(1, { message: "Phone is required." })
        .regex(/^\+?\d{10,14}$/, "Invalid phone number"),
    message: z
        .string()
        .min(1, { message: "Message is required." })
        .min(3, { message: "Message must be at least 3 characters." })
        .max(150)
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
    })

    const onSubmit = useCallback((values: z.infer<typeof formSchema>)=>{
        console.log(values);
    },[])

    const isLoading = false
    return (
        <Card className="w-full">
            <CardHeader className="w-full">
                <CardTitle className="text-2xl text-mainColor max-sm:text-center">Get in touch with us!</CardTitle>
                <CardDescription className="max-sm:text-center">
                    Please, leave us your opinion to improve ourselves.
                </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col items-start justify-start gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-mainColor">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ahmed" {...field} />
                                    </FormControl>
                                    <FormMessage style={{ marginTop: "0", marginBottom: "0" }} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-mainColor">Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-mainColor">Phone</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="+01000000000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-mainColor">Message</FormLabel>
                                    <FormControl>
                                        <Input type="message" placeholder="Type in your message..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isLoading} variant={"hirisk-reverse"}>
                            {isLoading ? (
                                <>
                                    Sending
                                    <Loader className="animate-spin h-5 w-5 ml-2 text-white dark:text-black" />
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}