type CheckIconProps = {
    width?: string,
    height?: string
}

const CheckIcon = ({ width = "24", height = "24" }: CheckIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1110_6266)">
                <path d="M9.00016 16.1701L4.83016 12.0001L3.41016 13.4101L9.00016 19.0001L21.0002 7.00009L19.5902 5.59009L9.00016 16.1701Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_1110_6266">
                    <rect width={width} height={height} fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default CheckIcon