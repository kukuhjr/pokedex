import { OptionProps } from "../types"

export const POKEMON_TYPES = [
    {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
    },
    {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
    },
    {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
    },
    {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
    },
    {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
    },
    {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
    },
    {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
    },
    {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
    },
    {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
    },
    {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
    },
    {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
    },
    {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
    },
    {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
    },
    {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
    },
    {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
    },
    {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
    },
    {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
    },
    {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
    },
    {
        "name": "unknown",
        "url": "https://pokeapi.co/api/v2/type/10001/"
    },
    {
        "name": "shadow",
        "url": "https://pokeapi.co/api/v2/type/10002/"
    }
]

export const POKEMON_NATURES = [
    {
        "name": "hardy",
        "url": "https://pokeapi.co/api/v2/nature/1/"
    },
    {
        "name": "bold",
        "url": "https://pokeapi.co/api/v2/nature/2/"
    },
    {
        "name": "modest",
        "url": "https://pokeapi.co/api/v2/nature/3/"
    },
    {
        "name": "calm",
        "url": "https://pokeapi.co/api/v2/nature/4/"
    },
    {
        "name": "timid",
        "url": "https://pokeapi.co/api/v2/nature/5/"
    },
    {
        "name": "lonely",
        "url": "https://pokeapi.co/api/v2/nature/6/"
    },
    {
        "name": "docile",
        "url": "https://pokeapi.co/api/v2/nature/7/"
    },
    {
        "name": "mild",
        "url": "https://pokeapi.co/api/v2/nature/8/"
    },
    {
        "name": "gentle",
        "url": "https://pokeapi.co/api/v2/nature/9/"
    },
    {
        "name": "hasty",
        "url": "https://pokeapi.co/api/v2/nature/10/"
    },
    {
        "name": "adamant",
        "url": "https://pokeapi.co/api/v2/nature/11/"
    },
    {
        "name": "impish",
        "url": "https://pokeapi.co/api/v2/nature/12/"
    },
    {
        "name": "bashful",
        "url": "https://pokeapi.co/api/v2/nature/13/"
    },
    {
        "name": "careful",
        "url": "https://pokeapi.co/api/v2/nature/14/"
    },
    {
        "name": "rash",
        "url": "https://pokeapi.co/api/v2/nature/15/"
    },
    {
        "name": "jolly",
        "url": "https://pokeapi.co/api/v2/nature/16/"
    },
    {
        "name": "naughty",
        "url": "https://pokeapi.co/api/v2/nature/17/"
    },
    {
        "name": "lax",
        "url": "https://pokeapi.co/api/v2/nature/18/"
    },
    {
        "name": "quirky",
        "url": "https://pokeapi.co/api/v2/nature/19/"
    },
    {
        "name": "naive",
        "url": "https://pokeapi.co/api/v2/nature/20/"
    },
    {
        "name": "brave",
        "url": "https://pokeapi.co/api/v2/nature/21/"
    },
    {
        "name": "relaxed",
        "url": "https://pokeapi.co/api/v2/nature/22/"
    },
    {
        "name": "quiet",
        "url": "https://pokeapi.co/api/v2/nature/23/"
    },
    {
        "name": "sassy",
        "url": "https://pokeapi.co/api/v2/nature/24/"
    },
    {
        "name": "serious",
        "url": "https://pokeapi.co/api/v2/nature/25/"
    }
]

export const POKEMON_STATS = [
    {
        "base_stat": 78,
        "effort": 0,
        "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
        }
    },
    {
        "base_stat": 84,
        "effort": 0,
        "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
        }
    },
    {
        "base_stat": 78,
        "effort": 0,
        "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
        }
    },
    {
        "base_stat": 109,
        "effort": 3,
        "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
        }
    },
    {
        "base_stat": 85,
        "effort": 0,
        "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
        }
    },
    {
        "base_stat": 100,
        "effort": 0,
        "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
        }
    }
]

export const INITIAL_FILTER_VAL: OptionProps = { name: "placeholder", url: "" }