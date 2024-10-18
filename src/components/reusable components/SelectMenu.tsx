"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select"
import { useDispatch, useSelector } from "@/lib/rtk"
import { setCategory } from "@/lib/rtk/slices/category.slice"
import { categories } from "@/utils/data"

export default function SelectMenu() {
    const dispatch = useDispatch()
    const cate = useSelector(state => state.category)
    return (
        <div className='col-start-1 col-end-2 sm:col-end-3 lg:col-end-2 h-full relative'>
            <Select onValueChange={(value) => {dispatch(setCategory(value))}} value={cate}>
                <SelectTrigger className="text-mainColor font-semibold">
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {
                            categories.map((cate) => {
                                return (
                                    <SelectItem key={cate.id} value={cate.title} className="capitalize text-mainColor">{cate.title}</SelectItem>
                                )
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
