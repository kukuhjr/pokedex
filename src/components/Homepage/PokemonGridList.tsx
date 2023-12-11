import { Fragment } from "react"

import { InfinitePokemonsAPI, TypePokemonsAPI } from "../../types"

import PokemonDataPage from "./PokemonDataPage"

type PokemonGridListProps = {
    pages?: Array<InfinitePokemonsAPI>,
    filterDataPages?: Array<TypePokemonsAPI>,
    isFilter?: boolean
}

const PokemonGridList = ({ pages, filterDataPages, isFilter }: PokemonGridListProps) => {
    // console.log(pages)

    if(isFilter) {
        return (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {   filterDataPages?.map((page, idx) => (
                        <Fragment key={`pokemon-page-${idx}`}>
                            <PokemonDataPage
                                filterDataList={page}
                                isFilter={true}
                            />
                        </Fragment>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {   pages?.map((page, idx) => (
                    <Fragment key={`pokemon-page-${idx}`}>
                        <PokemonDataPage
                            dataList={page}
                            isFilter={false}
                        />
                    </Fragment>
                ))
            }
        </div>
    )
}

export default PokemonGridList