import { useParams } from "react-router-dom"

import { useGetSinglePokemon } from "../../lib/react-query/queriesAndMutations"
import { StatsPokemon } from "../../types"

import StatsGraph from "./StatsGraph"
import ErrorFetchingText from "../ErrorFetchingText"

const TabStatsContent = () => {
    const { id } = useParams()

    const { data: pokemonData, isError: errorPokemonData } = useGetSinglePokemon(parseInt(id ?? ''), false)

    function printStatsName(name: string) {
        if(name.includes("special-attack")) return 'sp. att'
        if(name.includes("special-defense")) return 'sp. def'
        return name
    }

    if(errorPokemonData) {
        return (
            <ErrorFetchingText className="py-4" />
        )
    }
    
    return (
        <div className="flex flex-col gap-y-4">
            { pokemonData.stats.map((item: StatsPokemon, idx: number) => (
                <div className="flex gap-x-3" key={`stats-${idx}`}>
                    {/* STATS NAME */}
                    <div className="basis-1/5">
                        <span className="text-md font-bold capitalize text-neutral-700 leading-6">
                            { printStatsName(item.stat.name) }
                        </span>
                    </div>

                    {/* STATS NUMBER */}
                    <div className="basis-1/6">
                        <span className="text-md font-bold capitalize text-neutral-700 leading-6">
                            { item.base_stat }
                        </span>
                    </div>

                    {/* STATS GRAPH */}
                    <div className="basis-2/3">
                        <StatsGraph baseStats={item.base_stat} />
                    </div>
                </div>
            )) }
        </div>
    )
}

export default TabStatsContent