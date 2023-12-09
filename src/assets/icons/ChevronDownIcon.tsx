type ChevronDownIconProps = {
    width?: string,
    height?: string
}

const ChevronDownIcon = ({ width = "24", height = "24" }: ChevronDownIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1110_6269)">
                <path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="black"/>
            </g>
            
            <defs>
                <clipPath id="clip0_1110_6269">
                    <rect width={width} height={height} fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default ChevronDownIcon