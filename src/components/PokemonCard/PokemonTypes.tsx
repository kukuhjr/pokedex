import { POKEMON_NATURE_IMAGE } from "../../constants/colors"

type PokemonTypesProps = {
    name: string
}

const PokemonTypes = ({ name }: PokemonTypesProps) => {
    return (
        <div className="flex items-center rounded-full bg-[rgba(30,41,59,0.3)] gap-x-1.5 p-1">
            <div className="rounded-full w-5 h-5 flex items-center justify-center">
                <img
                    src={`/src/assets/pokemon_types/${POKEMON_NATURE_IMAGE.get(name)}`}
                    alt={`types-${name}`}
                    height={20}
                    width={20}
                />
            </div>

            <span className="text-xs text-neutral-50 pr-1.5 capitalize">
                { name }
            </span>
        </div>
    )
}

export default PokemonTypes