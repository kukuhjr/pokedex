import PokemonGridList from "../components/Homepage/PokemonGridList"
import SearchAndFilter from "../components/Homepage/SearchAndFilter"

const Homepage = () => {
    return (
        <div className="pt-3 px-3 container mx-auto">
            <h1 className="text-2xl font-medium">
                Pokedex
            </h1>

            <h3 className="text-sm mt-1.5">
                Search Pokemon by name or filter by types, nature, etc.
            </h3>

            <div className="mt-6">
                <SearchAndFilter />
            </div>
            
            <div className="mt-6">
                <PokemonGridList />
            </div>
        </div>
    )
}

export default Homepage