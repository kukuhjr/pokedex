import { POKEMON_NATURE_IMAGE } from "../../constants/colors"
import { TypesPokemon } from "../../types"

type PokemonTypesProps = {
    types: Array<TypesPokemon>
}

const PokemonTypes = ({ types }: PokemonTypesProps) => {
    return (
        <div className="flex items-center justify-center gap-x-4">
            {   
                types.map((type: TypesPokemon, idx: number) => (
                    <div className="rounded-full flex items-center justify-center" key={`type-detail-${idx + 1}`}>
                        <img
                            src={`/src/assets/pokemon_types/${POKEMON_NATURE_IMAGE.get(type.type.name)}`}
                            alt={`types-${name}`}
                            height={22}
                            width={22}
                        />
                    </div>
                )) 
            }
        </div>
    )
}

export default PokemonTypes