import { useParams } from "react-router-dom"

import { useGetPokemonSpecies, useGetSinglePokemon } from "../../lib/react-query/queriesAndMutations"

import ErrorFetchingText from "../ErrorFetchingText"
import Divider from "../Divider"
import { PokemonTypesOnDetail } from "."

const TabAboutContent = () => {
    const { id } = useParams()

    const { data: pokemonData, isPending: loadingPokemonData, isError: errorPokemonData } = useGetSinglePokemon(parseInt(id ?? ''), false)
    const speciesUrl = pokemonData?.species?.url ?? ""
    const splitSpeciesUrl = speciesUrl?.split("/") ?? ""
    const speciesId = parseInt(splitSpeciesUrl[splitSpeciesUrl?.length - 2])

    const { data: speciesData, isPending: loadingSpeciesData, isError: errorSpeciesData } = useGetPokemonSpecies(speciesId ?? "", !!speciesId)

    if(errorPokemonData) {
        return (
            <ErrorFetchingText className={"py-5"} />
        )
    }

    return (
        <div className="flex flex-col gap-y-5">
            {   loadingSpeciesData ? 
                    '...' : 
                errorSpeciesData ?
                    <p className="text-sm text-neutral-700 leading-6">
                        Failed to load description. Please refresh the page to try again.
                    </p> :
                // NON LOADING
                    <p className="text-sm text-neutral-700 leading-6 text-justify">
                        { speciesData.flavor_text_entries[Math.floor(Math.random() * 10)].flavor_text  }
                    </p>
            }

            <div className="about-box-custom">
                <div className="w-full text-center p-2">
                    <p className="text-sm text-neutral-900 font-semibold leading-5">
                        { loadingPokemonData ? '...' : `${pokemonData.weight / 10} kg` }
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Weight
                    </span>
                </div>

                <div className="relative">
                    <Divider />
                </div>

                <div className="w-full text-center p-2">
                    <p className="text-sm text-neutral-900 font-semibold leading-5">
                        { loadingPokemonData ? '...' : `${pokemonData.height / 10} m` }
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Height
                    </span>
                </div>
            </div>

            <div className="about-box-custom">
                <div className="w-full text-center p-2">
                    { loadingPokemonData ? '...' : <PokemonTypesOnDetail types={pokemonData.types} /> }

                    <span className="text-xs text-neutral-700 leading-3">
                        Category
                    </span>
                </div>

                <div className="relative">
                    <Divider />
                </div>

                <div className="w-full text-center p-2 relative grow-1 truncate">
                    <p className="text-sm text-neutral-900 font-semibold leading-5 capitalize">
                        { loadingPokemonData ? '...' : `${ pokemonData.abilities.map((item: any) => item.ability.name).join(",") }` }
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Ability
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TabAboutContent