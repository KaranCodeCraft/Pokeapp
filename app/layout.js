import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Pokémon Info App',
  description: 'A simple app to display Pokémon information using the PokéAPI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-500 text-white py-4 shadow-md">
          <div className="container mx-auto px-4">
            <Link href="/" className="text-2xl font-bold">
              Pokémon Info
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}