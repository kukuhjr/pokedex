import React from "react";
import { cn } from "../constants/utils";

type ButtonProps = {
    label?: string,
    icon?: React.ReactNode,
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
    label,
    icon,
    className,
    onClick
}: ButtonProps) => {
    return (
        <button
            className={
                cn(`flex justify-center items-center gap-2 
                    px-4 py-3 border text-lg 
                    leading-none rounded-md 
                    bg-blue-100 hover:bg-blue-200 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0`, 
                    className
                )
            }
            onClick={onClick}
        >
            {label ?? ""}

            {icon}
        </button>
    );
            
};
        
export default Button;