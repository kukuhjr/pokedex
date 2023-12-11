import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "./queryKeys";
import { getInfinitePokemons, getPokemonEvolutions, getPokemonSpecies, getSinglePokemon } from "../api";
import { InfinitePokemonsAPI, OptionProps } from "../../types";

export const useGetSinglePokemon = (id: number, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_POKEMON, id],
      queryFn: () => getSinglePokemon({ pokemonId: id }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : true
    });
};

export const useGetPokemonSpecies = (id: number, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_SPECIES_POKEMONS, id],
      queryFn: () => getPokemonSpecies({ pokemonId: id }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : true
    });
};

export const useGetPokemonEvolutions = (evoId: number, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_POKEMON_EVOLUTIONS, evoId],
      queryFn: () => getPokemonEvolutions({ evolutionId: evoId }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : true
    });
};

// USE QUERIES (BULK)
export const useGetSinglePokemon_2 = (pokemons: Array<OptionProps>) => {
    return useQueries({
        queries: pokemons.map((pokemon) => {
            // GET ID BY URL
            const splitUrl = pokemon.url.split("/")
            const pokemonId = parseInt(splitUrl[splitUrl.length - 2])

            return {
                queryKey: [QUERY_KEYS.GET_POKEMON, pokemonId],
                queryFn: () => getSinglePokemon({ pokemonId: pokemonId }),
                refetchOnWindowFocus: false
            }
        })
      })
};

// USE INFINITEQUERIES (BULK)
export const useGetInfinitePokemons = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.GET_INFINITE_POKEMONS],
        queryFn: getInfinitePokemons,
        getNextPageParam: (lastPage: InfinitePokemonsAPI) => lastPage.next,
        refetchOnWindowFocus: false
    })
}