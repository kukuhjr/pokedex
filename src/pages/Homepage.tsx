import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { FilterContext } from "../lib/hooks/filterContext"
import { useGetInfinitePokemons, useGetType } from "../lib/react-query/queriesAndMutations"
import { OptionProps } from "../types"
import { getIdOnUrl } from "../constants/utils"
import { INITIAL_FILTER_VAL } from "../constants/dummy"

import PokemonGridList from "../components/Homepage/PokemonGridList"
import SearchAndFilter from "../components/Homepage/SearchAndFilter"
import ErrorFetchingText from "../components/ErrorFetchingText"
import PokeballLoader from "../components/PokeballLoader"

const Homepage = () => {
    const [selected, setSelected] = useState(INITIAL_FILTER_VAL)
    const [filterView, setFilterView] = useState(false)

    const { ref, inView } = useInView()
    const { data: listPokemons, isPending, isError, fetchNextPage, hasNextPage } = useGetInfinitePokemons()
    
    const { data: listPokemonNature, isPending: isloadingPokemonNature, isError: errorPokemonNature, refetch } = useGetType(getIdOnUrl(selected.url) ?? "", filterView === true && selected.url !== "")

    const handleClickApplyFilter = (newVal: OptionProps) => {
        if(!filterView) setFilterView(true)
        
        setSelected(newVal)
        refetch()
    }

    const handleClearFilter = () => {
        setSelected(INITIAL_FILTER_VAL)
        setFilterView(false)
    }

    useEffect(() => {
        if(inView) fetchNextPage()
    }, [inView])

    return (
        <FilterContext.Provider
            value={{ 
                filterValue: selected,
                setFilterValue: setSelected,
                handleSubmitFilter: handleClickApplyFilter,
                handleClearFilter,
                filterView
            }}
        >
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
                    {   !filterView ?
                            isPending && !listPokemons ?
                                <PokeballLoader /> :
                            isError ?
                                <ErrorFetchingText className="py-0" /> :
                            // NON LOADING
                                <PokemonGridList pages={listPokemons.pages} /> :
                        // BY FILTER
                            isloadingPokemonNature && !listPokemonNature ?
                                <PokeballLoader /> :
                            errorPokemonNature ?
                                <ErrorFetchingText className="py-0" /> :
                            // SUCCESS
                                <PokemonGridList 
                                    filterDataPages={[ 
                                        {   
                                            results: listPokemonNature.pokemon,
                                            count: listPokemonNature.pokemon.lenth,
                                            next: "",
                                            previous: ""
                                        }
                                    ]}
                                    isFilter={true}
                                />
                    }
                </div>

                { hasNextPage && !filterView && (
                    <div ref={ref} className="mt-6">
                        <p>Load Pokemons....</p>
                    </div>
                ) }
            </div>
        </FilterContext.Provider>
    )
}

export default Homepage