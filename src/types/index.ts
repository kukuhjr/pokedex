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