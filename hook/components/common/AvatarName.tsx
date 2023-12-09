import { cn } from '../../../lib/twMerge';
import React from 'react'
interface Props {
    img: string
    name: string
    className?: string
}
export default function AvatarName({ img, name, className }: Props) {
    return (
        <div className={cn("flex px-3 py-1 w-full items-center justify-start rounded-lg gap-5 border", className)}>
            <div className="h-7 w-7 overflow-hidden rounded-full">
                <img src={img} alt={name} className="h-full w-full object-contain" />
            </div>
            <h6>{name}</h6>
        </div>
    )
}
