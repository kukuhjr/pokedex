import { Link } from 'react-router-dom'

import { InfinitePokemonsAPI, TypePokemonsAPI } from '../../types'

import PokemonCard from './PokemonCard'

type PokemonDataPageProps = {
    dataList?: InfinitePokemonsAPI,
    filterDataList?: TypePokemonsAPI,
    isFilter?: boolean
}

const PokemonDataPage = ({ isFilter, dataList, filterDataList }: PokemonDataPageProps) => {

    if(isFilter) {
        return (
            <>
                {   filterDataList?.results?.map((pokemon, idx) => {
                        const splitUrl = pokemon.pokemon.url?.split("/")
                        return (
                            <Link to={`/${splitUrl[splitUrl.length - 2]}`} key={`pokemon-${idx}`}>
                                <PokemonCard pokemonId={parseInt(splitUrl[splitUrl.length - 2])} />
                            </Link>
                        )
                    }
                    ) 
                }
            </>
        )
    }

    return (
        <>
            {   dataList?.results?.map((pokemon, idx) => {
                    const splitUrl = pokemon.url?.split("/")
                    return (
                        <Link to={`/${splitUrl[splitUrl.length - 2]}`} key={`pokemon-${idx}`}>
                            <PokemonCard pokemonId={parseInt(splitUrl[splitUrl.length - 2])} />
                        </Link>
                    )
                }
                ) 
            }
        </>
    )
}

export default PokemonDataPage