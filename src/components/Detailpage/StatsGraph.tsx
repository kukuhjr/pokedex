type StatsGraphProps = {
    baseStats: number
}

const StatsGraph = ({ baseStats }: StatsGraphProps) => {
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    return (
        <div className="flex justify-between h-full gap-x-1">
            { items.map((item) => (
                <div
                    key={item}
                    className={`flex-1 rounded-md ${(item * 10) <= baseStats ? 'bg-yellow-400' : 'bg-neutral-200'}`}
                />
            )) }
        </div>
    )
}

export default StatsGraph