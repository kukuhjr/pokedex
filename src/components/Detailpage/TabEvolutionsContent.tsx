import EvolutionItem from "./EvolutionItem"

const TabEvolutionsContent = () => {
    const test = [1,2,3]

    return (
        <div className="flex flex-col gap-y-5 px-4">
            { test.map((item) => (
                <EvolutionItem key={item} index={item} />
            ))}
        </div>
    )
}

export default TabEvolutionsContent