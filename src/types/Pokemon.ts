export interface Pokemon {
    name: string;
    id: number;
    types: Array<{ type: { name: string } }>
}

export interface PokemonData {
    pokemon: Pokemon[];
}