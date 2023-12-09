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
            className={cn(`flex justify-center items-center gap-2 px-4 py-3 border text-lg leading-none rounded-md`, className)}
            onClick={onClick}
        >
            {label ?? ""}

            {icon}
            
            {/* {iconURL && (
                <img
                    src={iconURL}
                    alt='arrow right icon'
                    className='ml-2 rounded-full bg-white w-5 h-5'
                />
            )} */}

        </button>
    );
            
};
        
export default Button;