import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

import styled from 'styled-components';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';

const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache({
    addTypename: false
  })
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Header/>
        <HomeScreen/>
      </Container>
    </ApolloProvider>
  );
};

export default App;