import { Link } from 'react-router-dom'

import { InfinitePokemonsAPI } from '../../types'

import PokemonCard from './PokemonCard'

type PokemonDataPageProps = {
    dataList: InfinitePokemonsAPI
}

const PokemonDataPage = ({ dataList }: PokemonDataPageProps) => {
    return (
        <>
            {   dataList.results?.map((pokemon, idx) => {
                    const splitUrl = pokemon.url.split("/")
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