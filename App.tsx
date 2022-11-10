import React from 'react';

import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

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

const onSearch = () => {
};

const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Header/>
      <VerticalPad padding={10}>
        <Title>More than 250 Pokemons for you to choose your favorite</Title>
      </VerticalPad>
      <SearchBar onSearch={onSearch}/>
    </Container>
  );
};

export default App;
