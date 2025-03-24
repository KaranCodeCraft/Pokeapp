import Image from 'next/image';
import { PokemonType } from './PokemonType';

export const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map((type) => (
              <PokemonType key={type.slot} type={type.type.name} />
            ))}
          </div>
        </div>
        <span className="text-gray-500 text-xl">#{pokemon.id}</span>
      </div>
      
      <div className="flex justify-center my-6">
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  );
};