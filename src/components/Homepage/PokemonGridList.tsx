import PokemonCard from "./PokemonCard"

const PokemonGridList = () => {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            { [0,1,2,3,4,5,6,7,8,9].map((item) => (
                <PokemonCard key={item} />
            )) }
        </div>
    )
}

export default PokemonGridList