import StatsGraph from "./StatsGraph"
import { POKEMON_STATS } from "../../constants/dummy"

const TabStatsContent = () => {
    console.log("render stats")

    function printStatsName(name: string) {
        if(name.includes("special-attack")) return 'sp. att'
        if(name.includes("special-defense")) return 'sp. def'
        return name
    }
    
    return (
        <div className="flex flex-col gap-y-4">
            { POKEMON_STATS.map((stats, idx) => (
                <div className="flex gap-x-3" key={`stats-${idx}`}>
                    {/* STATS NAME */}
                    <div className="basis-1/5">
                        <span className="text-md font-bold capitalize text-neutral-700 leading-6">
                            { printStatsName(stats.stat.name) }
                        </span>
                    </div>

                    {/* STATS NUMBER */}
                    <div className="basis-1/6">
                        <span className="text-md font-bold capitalize text-neutral-700 leading-6">
                            { stats.base_stat }
                        </span>
                    </div>

                    {/* STATS GRAPH */}
                    <div className="basis-2/3">
                        <StatsGraph baseStats={stats.base_stat} />
                    </div>
                </div>
            )) }
        </div>
    )
}

export default TabStatsContent