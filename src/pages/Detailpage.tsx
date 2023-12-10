import { useNavigate, useParams } from "react-router-dom"

import { useGetPokemonSpecies, useGetSinglePokemon } from "../lib/react-query/queriesAndMutations"

import ChevronLeftIcon from "../assets/icons/ChevronLeft"

import Button from "../components/Button"
import TabMenu from "../components/TabMenu"

import FavoriteIcon from "../assets/icons/FavoriteIcon"
import { printId } from "../constants/utils"
import { GRADIENT_COLOR_TEMPLATE, POKEMON_NATURE_IMAGE } from "../constants/colors"


const Detailpage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const { data: pokemonData, isPending: loadingPokemonData, isError: errorPokemonData } = useGetSinglePokemon(parseInt(id ?? ''))
    const { data: speciesData, isPending: loadingSpeciesData, isError: errorSpeciesData } = useGetPokemonSpecies(parseInt(id ?? ''))

    const handleClickBackButton = () => {
        navigate("/")
    }

    if(errorPokemonData) {
        <div>
            <span className="text-md text-gray-900">
                Something went wrong.
            </span>
        </div>
    }

    if(loadingPokemonData) {
        return (
            <div className="w-full flex items-center justify-center h-screen max-h-[800px]">
                <img
                    src={'/src/assets/pokeball-loader.gif'}
                    alt="charizard"
                    className="h-full aspect-square max-h-[200px]"
                />
            </div>
        )
    }

    return (
        <div className="mx-auto">
            <div className={`
                    pt-3 px-3 h-[360px]
                    bg-gradient-to-b 
                    ${GRADIENT_COLOR_TEMPLATE.get(loadingSpeciesData ? "default" : speciesData.color.name)}
                `}
            >
                {/* HEADER */}
                <div className="flex items-center container mx-auto">
                    <Button
                        icon={<ChevronLeftIcon height='24' width='24' />}
                        onClick={handleClickBackButton}
                        className='icon-button-text hover:bg-black/5'
                    />

                    <div className="flex-1 text-center">
                        <span className="text-md text-gray-900">
                            #{ loadingPokemonData ? '...' : printId(pokemonData.id)  }
                        </span>
                    </div>

                    <div className="rounded-full bg-[rgba(30,41,59,0.3)] p-1">
                        <img
                            src={`/src/assets/pokemon_types/${POKEMON_NATURE_IMAGE.get(pokemonData.types[0].type.name)}`}
                            alt={`types-${pokemonData.types[0].type.name}-image`}
                            height={22}
                            width={22}
                        />
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex items-center justify-center">
                    <img
                        src={pokemonData.sprites?.other["official-artwork"].front_default }
                        alt="charizard"
                        className="h-full aspect-square max-h-[320px]"
                    />
                </div>
            </div>

            {/* NAME */}
            <div className="text-center mt-5">
                <h1 className="text-xl font-medium text-gray-900 capitalize">
                    { printId(pokemonData.name)  }
                </h1>

                <h3 className="text-md font-light text-gray-400 capitalize">
                    { `${pokemonData.types[0].type.name} pokemon` }
                </h3>
            </div>

            {/* TABS */}
            <div className="w-full flex justify-center">
                <TabMenu />
            </div>
        </div>
    )
}

export default Detailpage