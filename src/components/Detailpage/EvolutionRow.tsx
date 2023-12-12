import { Fragment } from "react"

import { EvolutionPokemonType } from "../../types"
import { cn, getIdOnUrl } from "../../constants/utils"

import Divider from "../Divider"
import EvolutionItem from "./EvolutionItem"

type EvolutionRowProps = {
    data: EvolutionPokemonType,
    isLeveling?: boolean,
    id_pokemon: string,
    minLevel?: string
}

const EvolutionRow = ({ 
    data,
    isLeveling = false,
    id_pokemon,
    minLevel = "???"
}: EvolutionRowProps) => {
    return (
        <div className="flex flex-col gap-y-5">
            {/* BORDER LEVEL */}
            {   isLeveling &&
                    <div className="flex">
                        <div className="basis-1/2 relative max-w-[180px]">
                            <div className={cn(`h-full absolute left-1/2 min-h-[40px]`, minLevel === null ? `flex relative` : ``)}>
                                <Divider />
                            </div>

                            
                            <div className="w-full text-right pr-2">
                                <span className="text-sm font-light text-neutral-400 leading-10">
                                    Level { minLevel }
                                </span>
                            </div>
                        </div>

                        <div className="basis-1/2" />
                    </div>
            }

            <EvolutionItem
                id={id_pokemon}
                name={data.species.name}
                minLevel={minLevel}
            />

            {/* NEW ROW */}
            {   data.evolves_to.length > 0 ?
                    data.evolves_to.map((evolve, idx) => ( 
                        <Fragment key={`evolve-${idx + 1}`}>
                            <EvolutionRow
                                id_pokemon={getIdOnUrl(evolve?.species?.url ?? "") ?? "???"}
                                data={evolve}
                                minLevel={evolve.evolution_details[0]?.min_level ?? "???"}
                                isLeveling={idx === 0}
                            />
                        </Fragment> 
                    )) :
                // LAST GEN
                    <></>
            }
        </div>
    )
}

export default EvolutionRow