import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components/layout';
import { About, Hero, OtherSkills, Skills } from '@/components/homepage';
import { PageHead } from '@/components';
import { seo } from '@/data/homepage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <PageHead data={seo} />
      <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)] h-full min-h-screen antialiased text-gray-light">
        <Header />
        <main className={`bg-gray ${inter.className}`}>
          <Hero />
          <About />
          <Skills />
          <OtherSkills />
        </main>
        <Footer />
      </div>
    </>
  );
}
