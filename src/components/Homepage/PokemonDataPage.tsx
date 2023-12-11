import { Link } from 'react-router-dom'

import { InfinitePokemonsAPI, TypePokemonsAPI } from '../../types'
import { getIdOnUrl } from '../../constants/utils'

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
                        const splitUrl = getIdOnUrl(pokemon.pokemon.url)
                        return (
                            <Link to={`/${splitUrl}`} key={`pokemon-${idx}`}>
                                <PokemonCard pokemonId={splitUrl} />
                            </Link>
                        )
                    }) 
                }
            </>
        )
    }

    return (
        <>
            {   dataList?.results?.map((pokemon, idx) => {
                    const splitUrl = getIdOnUrl(pokemon.url)

                    return (
                        <Link to={`/${splitUrl}`} key={`pokemon-${idx}`}>
                            <PokemonCard pokemonId={splitUrl} />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default PokemonDataPage