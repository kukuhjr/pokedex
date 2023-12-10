import { useParams } from "react-router-dom"

import { useGetSinglePokemon } from "../../lib/react-query/queriesAndMutations"

import ErrorFetchingText from "../ErrorFetchingText"
import { MovesPokemonType } from "../../types"

const TabMovesContent = () => {
    const { id } = useParams()

    const { data: pokemonData, isPending: loadingPokemonData, isError: errorPokemonData } = useGetSinglePokemon(parseInt(id ?? ''), false)

    if(errorPokemonData) {
        return (
            <ErrorFetchingText className={"py-5"} />
        )
    }

    return (
        <div className="flex flex-col">
            {   loadingPokemonData ? 
                    <p className="text-sm text-neutral-700 leading-6">
                        Failed to load stats. Please refresh the page to try again.
                    </p> :
                // NON LOADING
                pokemonData.moves.map((move: MovesPokemonType, idx: number) => (
                    <div className="underline-moves-item py-5" key={`move-${idx}`}>
                        { move.move.name }
                    </div>
                )) 
            }
        </div>
    )
}

export default TabMovesContent