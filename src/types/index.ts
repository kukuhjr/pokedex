export type OptionProps = {
    name: string,
    url: string
}

export type InfinitePokemonsAPI = {
    count: number,
    next: string,
    previous: string,
    results: Array<OptionProps>
}

export type TypesPokemon = {
    slot: number,
    type: OptionProps
}

export type StatsPokemon =  {
    base_stat: number,
    effort: number,
    stat: OptionProps
}