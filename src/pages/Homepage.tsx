import FilterIcon from "../assets/icons/FilterIcon"
import SearchIcon from "../assets/icons/SearchIcon"
import Button from "../components/Button"
import PokemonGridList from "../components/Homepage/PokemonGridList"
import TextField from "../components/TextField"

const Homepage = () => {
    return (
        <div className="pt-3 container mx-auto">
            <h1 className="text-2xl font-medium">
                Pokedex
            </h1>

            <h3 className="text-sm mt-1.5">
                Search Pokemon by name or filter by types, nature, etc.
            </h3>

            <div className="mt-6 flex gap-x-2 items-center">
                <div className="relative w-full flex items-center">
                    <TextField 
                        className="flex pl-11 py-6 rounded-xl"
                        placeholder="Search Pokemon"
                    />

                    <div className="absolute left-4 top-[17px] pointer-events-none">
                        <SearchIcon height="22" width="22" />
                    </div>
                </div>

                <div>
                    <Button
                        className="rounded-xl bg-blue-100 border-0 px-3.5 py-3.5"
                        icon={<FilterIcon />}
                        onClick={() => {
                            console.log("Hello")
                        }}
                    />
                </div>

            </div>
            
            <div className="mt-6">
                <PokemonGridList />
            </div>
        </div>
    )
}

export default Homepage