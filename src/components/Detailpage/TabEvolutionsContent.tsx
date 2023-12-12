import { useParams } from "react-router-dom"

import { useGetPokemonEvolutions, useGetPokemonSpecies, useGetSinglePokemon } from "../../lib/react-query/queriesAndMutations"

import ErrorFetchingText from "../ErrorFetchingText"
import { getIdOnUrl } from "../../constants/utils"
import EvolutionRow from "./EvolutionRow"

const TabEvolutionsContent = () => {
    const { id } = useParams()

    const { data: pokemonData } = useGetSinglePokemon(id ?? '', false)
    const pokeSpeciesId = getIdOnUrl(pokemonData?.species?.url ?? "")

    const { data: speciesData, isError: errorSpeciesData, isFetched: isSpeciesFetched } = useGetPokemonSpecies(pokeSpeciesId)
    const evoId = getIdOnUrl(speciesData.evolution_chain?.url ?? "")
    
    const { data: evolutionsData, isPending: loadingEvolutionsData, isError: errorEvolutionsData } = useGetPokemonEvolutions(evoId, isSpeciesFetched)

    if(errorSpeciesData || errorEvolutionsData) {
        return (
            <ErrorFetchingText className={"py-5"} />
        )
    }

    return (
        <div className="px-4 md:px-0">
            {   loadingEvolutionsData ? 
                    <ErrorFetchingText
                        className={"py-0 px-0"}
                        text="Fetching Evo..."
                    /> :
                evolutionsData ?
                    evolutionsData.chain.evolves_to.length > 0 ?
                        <EvolutionRow
                            data={evolutionsData.chain}
                            id_pokemon={getIdOnUrl(evolutionsData.chain?.species?.url ?? "") ?? "???"}
                            isLeveling={false}
                        /> :
                    // NO EVOLVE
                        <ErrorFetchingText
                            className="px-0 py-0"
                            text="This pokemon is does not evolve."
                        /> : 
                // ELSE
                    <ErrorFetchingText
                        className={"py-0"}
                        text="Something went wrong."
                    />
            }
        </div>
    )
}

export default TabEvolutionsContent