'use client';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export const PokemonSearch = ({ allPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allPokemon.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered.slice(0, 10));
      setShowDropdown(true);
    } else {
      setFilteredPokemon([]);
      setShowDropdown(false);
    }
  }, [searchTerm, allPokemon]);

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Pokémon by name..."
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
      </div>
      
      {showDropdown && filteredPokemon.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredPokemon.map((pokemon) => (
            <li
              key={pokemon.name}
              className="p-2 hover:bg-gray-100 cursor-pointer capitalize"
              onClick={() => {
                const id = pokemon.url.split('/').slice(-2, -1)[0];
                router.push(`/${id}`);
                setSearchTerm('');
                setShowDropdown(false);
              }}
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};