import { gql } from '@apollo/client';

const POKEMON_QUERY = gql`
    query Pokemon {
        pokemon: pokemon_v2_pokemon(limit: 10) {
            name
            id
            types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
        }
    }
`

const SPRITES_QUERY = gql`
    query Sprites {
        sprites: pokemon_v2_pokemonsprites(where: {pokemon_id: {_eq: 1}}) {
            sprites
        }
    }
`

export { POKEMON_QUERY, SPRITES_QUERY };
