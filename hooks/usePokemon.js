import { useState, useEffect } from 'react';
import { getPokemon, getAllPokemon } from '../utils/api';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async (id) => {
    try {
      setLoading(true);
      const data = await getPokemon(id);
      setPokemon(data);
      setError(null);
    } catch (err) {
      setError('Pokémon not found');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const data = await getAllPokemon();
        setAllPokemon(data);
      } catch (err) {
        console.error('Error fetching Pokémon list:', err);
      }
    };
    
    fetchAllPokemon();
  }, []);

  return { pokemon, allPokemon, loading, error, fetchPokemon };
};