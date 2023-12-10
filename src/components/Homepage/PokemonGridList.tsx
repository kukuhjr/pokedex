import { Fragment } from "react"

import { InfinitePokemonsAPI } from "../../types"

import PokemonDataPage from "./PokemonDataPage"

type PokemonGridListProps = {
    pages: Array<InfinitePokemonsAPI>
}

const PokemonGridList = ({ pages }: PokemonGridListProps) => {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {   pages.map((page, idx) => (
                    <Fragment key={`pokemon-page-${idx}`}>
                        <PokemonDataPage dataList={page} />
                    </Fragment>
                ))
            }
        </div>
    )
}

export default PokemonGridList