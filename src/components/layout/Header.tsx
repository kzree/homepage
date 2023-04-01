import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const Header = () => {
  return (
    <header className={`h-16 w-full bg-primary ${inter.className}`}>
      <nav className="container mx-auto h-full flex items-center justify-between">
        <Link
          className="text-xl font-bold text-gray-light hover:text-secondary transition-all duration-300 ease-in-out"
          href="/"
        >
          Erkki Sula
        </Link>
        <div className="hidden md:block space-x-8">
          <Link
            scroll={false}
            className="text-gray-light hover:text-secondary transition-all duration-300 ease-in-out"
            href="/#about"
          >
            About
          </Link>
          <Link
            scroll={false}
            className="text-gray-light hover:text-secondary transition-all duration-300 ease-in-out"
            href="/#tech"
          >
            Technologies
          </Link>
        </div>
      </nav>
    </header>
  );
};
