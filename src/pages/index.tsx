import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components/layout';
import { Hero } from '@/components/homepage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)] h-full min-h-screen antialiased">
      <Header />
      <main className={inter.className}>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
