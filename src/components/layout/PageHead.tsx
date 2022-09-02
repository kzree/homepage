import Head from 'next/head';

import { ReactComponent } from '@typings/common/react';
import { Seo } from '@typings/common/seo';

interface Props {
  data: Seo;
}

export const PageHead: ReactComponent<Props> = ({ data }) => {
  const { title, description, keywords } = data;

  return (
    <Head>
      <title>{`${title} - Kzree`}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords.join(',')} key="keywords" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
