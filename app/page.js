import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Pokémon Info App</h1>
      <p className="text-lg mb-8 text-center">
        Search for any Pokémon by name or browse through them using the navigation.
      </p>
      <Link
        href="/1"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Start with Bulbasaur
      </Link>
    </div>
  );
}