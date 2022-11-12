import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import styled from 'styled-components';
import PokeCard from '../components/PokeCard';
import SearchBar from '../components/SearchBar';
import { POKEMON_QUERY } from '../graphql/queries';
import { Pokemon, PokemonData, PokemonDataArray } from '../types/Pokemon';

const VerticalPad = styled.View`
  margin: ${(props: { padding: number }) => props.padding}px 
          0px
          ${(props: { padding: number }) => props.padding}px
          0px;
`;

const Title = styled.Text`
  font-size: 25px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: Arial;
  font-weight: bold;
  color: #21386E;
`;

const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

const HomeScreen = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { data } = useQuery<PokemonDataArray>(POKEMON_QUERY);

  useEffect(() => {
    if(data?.pokemon) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  const onSearch = () => {
    //search again
  };

  return (
    <Container>
      <VerticalPad padding={10}>
        <Title>More than 250 Pokemons for you to choose your favorite</Title>
      </VerticalPad>
      <SearchBar onSearch={onSearch}/>
      <FlatList
        data={pokemon}
        renderItem={({ item }) => (
          <PokeCard {...item} id={item.id}/>
        )}
        numColumns={2}
        style={{ marginHorizontal: 30 }}
        contentContainerStyle={{ backgroundColor: 'red', justifyContent: 'space-between' }}
        // ItemSeparatorComponent={() => (<View style={{margin: 10}}/>)}
      />
    </Container>
  );
};

export default HomeScreen;
