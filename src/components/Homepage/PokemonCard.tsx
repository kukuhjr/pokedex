import pokeball from "../../assets/pokeball.png"

import PokemonTypes from "../PokemonCard/PokemonTypes"

import { useGetPokemonSpecies, useGetSinglePokemon } from "../../lib/react-query/queriesAndMutations"

import { COLOR_TEMPLATE } from "../../constants/colors"
import { printId } from "../../constants/utils"
import { TypesPokemonType } from "../../types"

type PokemonCardProps = {
    pokemonId: number
}

const PokemonCard = ({ pokemonId }: PokemonCardProps) => {
    const { data: pokemonData, isPending: loadingPokemonData, isError: errorPokemonData } = useGetSinglePokemon(pokemonId)
    const { data: speciesData, isPending: loadingSpeciesData, isError: errorSpeciesData } = useGetPokemonSpecies(pokemonId)

    if(errorPokemonData) {
        return (
            <div className="w-full rounded-lg bg-sky-400 p-4">
                <span className="text-sm capitalize">
                    Something went wrong.
                </span>
            </div>
        )
    }

    return (
        <div className={`w-full rounded-lg p-4 ${loadingSpeciesData || errorSpeciesData ? 'bg-sky-400' : COLOR_TEMPLATE.get(speciesData.color.name)} text-neutral-50`}>
            <div className="flex justify-between">
                <span className="text-sm capitalize font-medium">
                    { loadingPokemonData ? "..." : pokemonData.name }
                </span>

                <span className="text-sm font-medium">
                    { loadingPokemonData ? "..." : `#${printId(pokemonData.id)}` }
                </span>
            </div>

            <div className="flex justify-between mt-6 items-end">
                <div className="flex flex-col gap-y-1">
                    {   loadingPokemonData ?
                            <span className="text-sm">
                                ....
                            </span> :
                        // NON LOADING
                            pokemonData.types.map((type: TypesPokemonType, idx: number) => (
                                <PokemonTypes
                                    key={`type-${idx}`}
                                    name={type.type.name}
                                />
                            ))
                    }
                </div>

                <div>
                    <img 
                        src={loadingPokemonData ? pokeball : pokemonData.sprites?.other["official-artwork"].front_default}
                        height={"60px"}
                        width={"60px"}
                        className="sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonCard