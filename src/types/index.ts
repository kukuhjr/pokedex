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

export type ResultsPokemonType ={
    pokemon: OptionProps,
    slot: number
}

export type TypePokemonsAPI = {
    count: number,
    next: string,
    previous: string,
    results: Array<ResultsPokemonType>
}

export type TypesPokemonType = {
    slot: number,
    type: OptionProps
}

export type StatsPokemonType =  {
    base_stat: number,
    effort: number,
    stat: OptionProps
}

export type MovesPokemonType =  {
    move: OptionProps,
    version_group_details: VersionGroupDetailsPokemonType
}

export type VersionGroupDetailsPokemonType = {
    level_learned_at: number,
    move_learn_method: OptionProps,
    version_group: OptionProps
}

export type EvolutionPokemonType =  {
    evolution_details: Array<any>,
    evolves_to: Array<EvolutionPokemonType>,
    is_baby: boolean,
    species: OptionProps
}