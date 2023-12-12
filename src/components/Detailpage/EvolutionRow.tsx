import { cn, getIdOnUrl } from "../../constants/utils"
import { OptionProps } from "../../types"
import Divider from "../Divider"
import EvolutionItem from "./EvolutionItem"

type EvolvesToProps = {
    evolution_details: Array<any>,
    evolves_to: Array<EvolvesToProps>,
    is_baby: boolean,
    species: OptionProps
}

type EvolutionRowProps = {
    data: EvolvesToProps,
    isFirst?: boolean,
    id_pokemon: string,
    level?: number
}

const EvolutionRow = ({ data, isFirst = false, id_pokemon }: EvolutionRowProps) => {
    const minLevel = data.evolution_details[0]?.min_level ?? "???"

    return (
        <>
            <EvolutionItem
                id={id_pokemon}
                name={data.species.name}
                minLevel={data.evolution_details[0]?.min_level ?? "???"}
                isFirst={isFirst}
            />

            {/* LEVEL BORDER */}
            {   data.evolves_to.length > 0 &&
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

            <div className="flex flex-col gap-y-1">
                {   data.evolves_to.length > 0 ?
                        data.evolves_to.map((evolve, idx) => ( 
                            <EvolutionRow
                                id_pokemon={getIdOnUrl(evolve?.species?.url ?? "") ?? "???"}
                                key={`evolve-${idx + 1}`}
                                data={evolve}
                                level={idx + 1}
                            />
                        )) :
                    // LAST GEN
                        <></>
                }
            </div>
        </>
    )
}

export default EvolutionRow