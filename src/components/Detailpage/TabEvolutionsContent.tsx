import { useParams } from "react-router-dom"

import { useGetPokemonEvolutions, useGetPokemonSpecies } from "../../lib/react-query/queriesAndMutations"
import { EvolutionPokemonType, OptionProps } from "../../types"

import EvolutionItem from "./EvolutionItem"
import ErrorFetchingText from "../ErrorFetchingText"
import { getIdOnUrl } from "../../constants/utils"

// RECURSIVE EVO DATA PURPOSE
type recentDataType = {
    species: OptionProps;
    evo_details: any[];
    evolves_to: EvolutionPokemonType[];
}

const TabEvolutionsContent = () => {
    const { id } = useParams()

    const { data: speciesData, isError: errorSpeciesData } = useGetPokemonSpecies(parseInt(id ?? ''), false)
    const evolutionUrl = speciesData.evolution_chain?.url
    const splitEvolutionUrl = speciesData.evolution_chain?.url?.split("/")
    const speciesId = parseInt(splitEvolutionUrl[splitEvolutionUrl?.length - 2])

    const { data: evolutionsData, isPending: loadingEvolutionsData, isError: errorEvolutionsData } = useGetPokemonEvolutions(speciesId ?? '', !!evolutionUrl)

    function getOnelevelEvo(evoData: EvolutionPokemonType, currentData?: recentDataType): any {
        const recentData: recentDataType = { 
            species: evoData.species,
            evo_details: evoData.evolution_details,
            evolves_to: evoData.evolves_to
        }

        // LATEST EVO
        if(evoData.evolves_to.length === 0) {
            return recentData
        }

        // MID EVO
        if(evoData.evolves_to.length !== 0 && evoData.evolution_details.length !== 0) {
            return [ currentData, recentData, getOnelevelEvo(evoData.evolves_to[0]) ]
        }
        
        return getOnelevelEvo(evoData.evolves_to[0], recentData)
    }

    if(errorSpeciesData || errorEvolutionsData) {
        return (
            <ErrorFetchingText className={"py-5"} />
        )
    }

    return (
        <div className="flex flex-col gap-y-5 px-4">
            {   loadingEvolutionsData ? 
                    '...' :
                // NON LOADING
                    getOnelevelEvo(evolutionsData.chain).map((item: recentDataType, idx: number) => {
                        return (
                            <EvolutionItem
                                key={`evo-${idx}`}
                                id={getIdOnUrl(item.species.url)}
                                name={item.species.name}
                                minLevel={item.evo_details[0]?.min_level ?? 0}
                            />
                        )
                    })
            }
        </div>
    )
}

export default TabEvolutionsContent