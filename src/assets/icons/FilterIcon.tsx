type FilterIconProps = {
    width?: string,
    height?: string
}

const FilterIcon = ({ width = "24", height = "24" }: FilterIconProps) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1103_6259)">
                <path d="M6.99969 6H16.9997L11.9897 12.3L6.99969 6ZM4.24969 5.61C6.26969 8.2 9.99969 13 9.99969 13V19C9.99969 19.55 10.4497 20 10.9997 20H12.9997C13.5497 20 13.9997 19.55 13.9997 19V13C13.9997 13 17.7197 8.2 19.7397 5.61C20.2497 4.95 19.7797 4 18.9497 4H5.03969C4.20969 4 3.73969 4.95 4.24969 5.61Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_1103_6259">
                    <rect width={width} height={height} fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default FilterIcon