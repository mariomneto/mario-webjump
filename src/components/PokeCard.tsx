import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import { Pokemon } from '../types/Pokemon';

const Card = styled.View`
    justify-content: space-around;
    align-items: center;
    margin: 10px 10px 10px 10px;
    width: 40%;
    height: 200px;
    border-radius: 20px;
    background-color: #47D0B0;
`;

const IdTag = styled.View`
    background-color: #FFCB05;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 20px;
    height: 20px;
    width: 50px;
    top: -10px;
`;

const PokemonView = styled.View`
    background-color: #71E5C9;
    width: 100px;
    height: 100px;
    border-radius: 150px;
    margin-top: 10px;
`;

const Title = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
`;

const TypeTag = styled.View`
    background-color: #46C0A3;
    justify-content: center;
    align-items: center;
    margin: 2px;
    padding: 0px 10px 0px 10px;
    border-radius: 24px;
    height: 24px;
`;

const PokeCard: React.FC<Pokemon> = ({ name, id, types }) => {
    return (
        <Card>
            <IdTag>
                <Text>#{id}</Text>
            </IdTag>
           <PokemonView/>
           <View style={{ alignItems: 'center' }}>
                <Title>{name}</Title>
                <View style={{ flexDirection: 'row' }}>
                    {types.map(t => (
                        <TypeTag>
                            <Text style={{ color: 'white' }}>{t.type.name}</Text>
                        </TypeTag>
                    ))}
                </View>
           </View>
        </Card>
    )
}

export default PokeCard