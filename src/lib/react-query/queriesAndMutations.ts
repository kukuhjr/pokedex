import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";

import { getInfinitePokemons, getPokemonEvolutions, getPokemonSpecies, getSinglePokemon, getTypeById } from "../api";

import { InfinitePokemonsAPI, OptionProps } from "../../types";
import { QUERY_KEYS } from "./queryKeys";
import { getIdOnUrl } from "../../constants/utils";

export const useGetSinglePokemon = (id: string, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_POKEMON, id],
      queryFn: () => getSinglePokemon({ pokemonId: id }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : true
    });
};

export const useGetPokemonSpecies = (id: string, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_SPECIES_POKEMONS, id],
      queryFn: () => getPokemonSpecies({ pokemonId: id }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : false
    });
};

export const useGetPokemonEvolutions = (evoId: string, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_POKEMON_EVOLUTIONS, evoId],
      queryFn: () => getPokemonEvolutions({ evolutionId: evoId }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : true
    });
};

export const useGetType = (typeId: string, enabled?: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_TYPE, typeId],
      queryFn: () => getTypeById({ typeId }),
      refetchOnWindowFocus: false,
      enabled: enabled ? enabled : false
    });
};

// USE QUERIES (BULK)
export const useGetSinglePokemon_2 = (pokemons: Array<OptionProps>) => {
    return useQueries({
        queries: pokemons.map((pokemon) => {
            // GET ID BY URL
            const pokemonId = getIdOnUrl(pokemon.url) ?? ""

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