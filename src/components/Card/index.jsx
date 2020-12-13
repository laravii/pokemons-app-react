import React from 'react';

import {
  CardContainer,
  PokeNameDiv,
  PokemonName,
  ImgContainer,
  PokeImg,
  InfosContainer,
  Infos,
  FadeIn
} from './styles';

//usado desconstrutor para pegar as informações do componente pai          
export const Card = ({ name, number, img, type, weight, height }) => {
  const backcolor = `var(--${type})`

  return (
    //a propriedade color passa a cor do background definido nas variáveis globais
    <FadeIn>
      <CardContainer color={backcolor} key={number}>
        <PokeNameDiv>
          <PokemonName>{name.toUpperCase()} </PokemonName>
          <PokemonName>Nº{number}</PokemonName>
        </PokeNameDiv>
        <ImgContainer>
          <PokeImg src={img} />
        </ImgContainer>
        <InfosContainer>
          <Infos area='hab'>Tipo: {type}</Infos>
          <Infos area='height'>Altura: {Math.round(height * 30.48)} cm</Infos>
          <Infos area='weight'> Peso: {Math.round(weight * 0.453592)} kg</Infos>
        </InfosContainer>

      </CardContainer>
    </FadeIn>
  );
}