'use client';
import { PokemonCard } from '@/components/PokemonCard';
import { PokemonStats } from '@/components/PokemonStats';
import { PokemonSearch } from '@/components/PokemonSearch';
import { usePokemon } from '@/hooks/usePokemon';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function PokemonPage() {
  const params = useParams();
  const pokemonId = Number(params?.id) || 1;
  const { pokemon, allPokemon, loading, error, fetchPokemon } = usePokemon();

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  if (loading && !pokemon) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <main className="min-h-screen py-8 px-4">
      <PokemonSearch allPokemon={allPokemon} onSelect={(id) => fetchPokemon(id)} />
      
      {pokemon && (
        <div className="max-w-2xl mx-auto">
          <PokemonCard pokemon={pokemon} />
          
          <div className="flex justify-between mt-6">
            {/* Previous Button */}
            <Link
              href={`/${pokemonId - 1}`}
              className={`flex items-center px-4 py-2 rounded-lg ${pokemonId <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              onClick={(e) => pokemonId <= 1 && e.preventDefault()}
            >
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Previous
            </Link>
            
            {/* Next Button */}
            <Link
              href={`/${pokemonId + 1}`}
              className="flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
            >
              Next
              <ChevronRightIcon className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <PokemonStats stats={pokemon.stats} />
        </div>
      )}
    </main>
  );
}
