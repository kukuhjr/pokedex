import pokeball from "../../assets/pokeball.png"

import { useGetSinglePokemon } from "../../lib/react-query/queriesAndMutations"
import { TypesPokemonType } from "../../types"

import { printId } from "../../constants/utils"
import { POKEMON_NATURE_IMAGE } from "../../constants/colors"

type EvolutionItem = {
    id: string,
    name: string,
    minLevel: string
}

const TypesEvoItem = ({ type } :{type: string }) => {
    return (
        <div className="flex items-center gap-x-1.5 rounded-md border border-neutral-200 p-1.5">
            <img 
                src={`/src/assets/pokemon_types/${POKEMON_NATURE_IMAGE.get(type)}`}
                alt="fire"
                width={22}
                height={22}
            />
            
            <p className="text-sm text-gray-900 font-semibold leading-5 capitalize">
                { type }
            </p>
        </div>
    )
}

const EvolutionItem = ({ id, name }: EvolutionItem) => {
    const { data: pokemonData, isPending: loadingPokemonData } = useGetSinglePokemon(id, false)

    return (
        <div className="flex jutify-center items-start gap-x-5">
            <div className="flex-1 bg-blue-200/[0.3] rounded-3xl p-3 flex justify-center max-w-[180px]">
                <img
                    src={loadingPokemonData ? pokeball : pokemonData.sprites?.other["official-artwork"].front_default}
                    alt={`evo-${ name }`}
                    className="h-full aspect-square max-h-[90px]"
                />
            </div>

            <div className="flex-1 flex flex-col items-start">
                <span className="text-lg font-medium text-neutral-400 leading-10">
                    { loadingPokemonData ? "..." : `#${printId(pokemonData.id)}` }
                </span>

                <p className="text-xl text-gray-900 font-medium leading-5 capitalize">
                    { name }
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {   loadingPokemonData ? 
                            '...' :
                        pokemonData.types.map((type: TypesPokemonType, idx: number) => (
                            <TypesEvoItem
                                key={`types-${pokemonData.id}-${idx}`}
                                type={type.type.name}
                            />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default EvolutionItem