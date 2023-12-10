import axios from "axios";

const API_CONSTANT = 'https://pokeapi.co/api/v2'

// GET INFINITE POKEMONS
// DESC: GET ALL POKEMONS BY INFINITE LIST
export async function getInfinitePokemons({ pageParam = `${API_CONSTANT}/pokemon?limit=50&offset=0` }: { pageParam?: string }) {
    try {
        const { data } = await axios.get(pageParam)

        if(!data) throw Error

        return data
    } catch (error) {
        console.log(error);
    }
}

// GET SINGLE POKEMONS
// DESC: GET POKEMON DETAIL
export async function getSinglePokemon({ pokemonId }: { pokemonId: number }) {
    try {
        const { data } = await axios.get(`${API_CONSTANT}/pokemon/${pokemonId}`)

        if(!data) throw Error

        setTimeout(() => {

        }, 4000)

        return data
    } catch (error) {
        console.log(error);
    }
}

// GET POKEMON SPECIES
// DESC: GET SPECIES OF SINGLE POKEMON
export async function getPokemonSpecies({ pokemonId }: { pokemonId: number }) {
    try {
        const { data } = await axios.get(`${API_CONSTANT}/pokemon-species/${pokemonId}`)

        if(!data) throw Error

        return data
    } catch (error) {
        console.log(error);
    }
}