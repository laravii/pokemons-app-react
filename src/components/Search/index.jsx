import React, {useState, useEffect} from 'react';

import axios from 'axios'

import {Grid ,FormContainer, Label, SearchInput, SearchBtn } from './styles';

import {Cards} from '../Cards'

export const Search = (props) => {
  const [pokemon, setPokemon] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [pokeType, setPokeType] = useState("");
  
// chamada assincrona para captura do pokemon
  const getPokemon = async () => {
    const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url);
        toArray.push(res.data);
        setPokeType(res.data.types[0].type.name)
        setPokeData(toArray)
      } catch (e){
        console.log(e)
      }
  }

  useEffect(() => {
    getPokemon();
  }, [])

  const handleChange = (e) =>{
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon()
  }
  return (
    <Grid>
      <Label for='ipt'>Busque um Pokemón por nome ou número</Label>
      <FormContainer onSubmit={handleSubmit}>
          <SearchInput id='ipt' type="text" onChange={handleChange} />
          <SearchBtn onClick={handleSubmit}/>
      </FormContainer>
      {pokeData.map(({id, name, sprites, weight, height}) => {
        return (
          <Cards
          key={id}
          name={name}
          number={id}
          img={sprites.front_default}
          type={pokeType}
          weight={weight}
          height={height} 
          />
        )
      })}
    </Grid>
  );
  }
