import { cn } from "../constants/utils"

type ErrorFetchingTextProps = {
    text?: string,
    className?: string
}

const ErrorFetchingText = ({ text, className }: ErrorFetchingTextProps) => {
    return (
        <div className={cn("p-4", className)}>
            <p className="text-sm text-neutral-700 leading-">
                { text ? text : 'Something went wrong. Please refresh the page to try again.' }
            </p>
        </div>
    )
}

export default ErrorFetchingText