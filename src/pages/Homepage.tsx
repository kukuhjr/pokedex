import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import PokemonGridList from "../components/Homepage/PokemonGridList"
import SearchAndFilter from "../components/Homepage/SearchAndFilter"

import { useGetInfinitePokemons } from "../lib/react-query/queriesAndMutations"

const Homepage = () => {
    const { ref, inView } = useInView()
    const { data: listPokemons, isPending, isError, fetchNextPage, hasNextPage } = useGetInfinitePokemons()

    useEffect(() => {
        if(inView) fetchNextPage()
    }, [inView])

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
                {   isPending && !listPokemons ?
                        <p>Loading...</p> :
                    isError ?
                        <p>Something went wrong.</p> :
                    // NON LOADING
                    <PokemonGridList pages={listPokemons.pages} />
                }
            </div>

            { hasNextPage && (
                <div ref={ref} className="mt-6 bg-red-200">
                    <p>Load Pokemons....</p>
                </div>
            ) }
        </div>
    )
}

export default Homepage