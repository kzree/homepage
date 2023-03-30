import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components/layout';
import { Hero, Skills } from '@/components/homepage';
import { PageHead } from '@/components';
import { seo } from '@/data/homepage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <PageHead data={seo} />
      <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)] h-full min-h-screen antialiased">
        <Header />
        <main className={inter.className}>
          <Hero />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}
