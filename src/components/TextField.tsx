import React from "react"
import { cn } from "../constants/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input 
                className={cn("flex h-10 w-full rounded-md border border-sky-800 pl-9 px-3 py-2 text-sm", className)}
                { ...props }
                ref={ref}
            />
        )
    }
) 

export default TextField