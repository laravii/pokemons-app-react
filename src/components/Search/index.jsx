import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import {
  Container,
  DefaultContainer,
  Label,
  SearchInput,
  Loading,
  CardsContainer,
} from './styles';
import { Card } from '../Card';
import load from '../../asserts/loadpikachu.gif';
import { Pagination } from '../Pagination';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export const Search = (props) => {
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [offset, setOffset] = useState(0);
  const limitPerPage = 100;

  const getByNamePokemon = async (name) => {
    setLoading(true);

    try {
      const url = `${name}`;
      const res = await api.get(url);
      const toArray = [];
      toArray.push(res.data);
      setPokeData(toArray);
      setLoading(false);
      return res.data;
    } catch (error) {
      console.log('erro', error);
    }
  };

  const getAllPokemons = async (offset) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const url = `?offset=${offset}&limit=${limitPerPage}`;
        const res = await api.get(url);
        const pokemos = res.data.results;

        setTotalPages(parseInt(res.data.count / limitPerPage));
        const pokemosDetailPromises = pokemos.map(
          async (p) => await getByNamePokemon(p.name)
        );

        Promise.all([...pokemosDetailPromises]).then((values) => {
          setPokeData(values);
          setLoading(false);
        });
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  };

  const toPage = () => {
    setOffset(limitPerPage * (activePage - 1));
  };

  useEffect(() => {
    getAllPokemons(offset);
  }, [activePage, offset]);

  useMemo(() => {
    toPage();
  }, [offset, activePage]);
  const handleChange = (e) => {
    const name = e.target.value;
    name === '' ? getAllPokemons() : getByNamePokemon(name.toLowerCase());
  };
  return (
    <Container>
      <Label htmlFor='ipt'>Busque um Pokemón por nome ou número</Label>
      <DefaultContainer>
        <SearchInput id='ipt' type='text' onChange={handleChange} />
      </DefaultContainer>
      {loading === true ? (
        <DefaultContainer>
          <Loading src={load} />
        </DefaultContainer>
      ) : (
        <CardsContainer>
          {pokeData.map(({ id, name, sprites, weight, height, types }) => {
            return (
              <Card
                key={id}
                name={name}
                number={id}
                img={sprites.front_default}
                type={types[0].type.name}
                weight={weight}
                height={height}
              />
            );
          })}
        </CardsContainer>
      )}
      <Pagination
        pagesTotal={totalPages}
        active={activePage}
        setActive={setActivePage}
      />
    </Container>
  );
};
