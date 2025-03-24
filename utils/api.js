import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemon = async (id) => {
  const response = await api.get(`pokemon/${id}`);
  return response.data;
};

export const getAllPokemon = async () => {
  const response = await api.get('pokemon?limit=1000');
  return response.data.results;
};