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