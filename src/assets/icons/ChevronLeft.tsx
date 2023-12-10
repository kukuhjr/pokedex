type ChevronLeftIconProps = {
    width?: string,
    height?: string
}

const ChevronLeftIcon = ({ width = "24", height = "24" }: ChevronLeftIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1111_6259)">
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_1111_6259">
                    <rect width={width} height={height} fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default ChevronLeftIcon