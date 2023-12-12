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
                    <p>....</p> :
                evolutionsData ?
                    <div className="flex flex-col gap-y-5">
                        <EvolutionRow
                            data={evolutionsData.chain}
                            id_pokemon={evolutionsData.id}
                            isFirst={true}
                        />
                    </div>
                :
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