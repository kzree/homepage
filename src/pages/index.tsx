import type { NextPage } from 'next';

import { Hero } from '@components/home';
import { PageHead } from '@components/layout';

import seo from '@data/home-seo.json';

const Home: NextPage = () => {
  return (
    <>
      <PageHead data={seo} />
      <Hero />
    </>
  );
};

export default Home;
