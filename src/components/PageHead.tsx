import Head from 'next/head';
import { Seo } from '@/types/seo';

interface Props {
  data: Seo;
}

export const PageHead = ({ data }: Props) => {
  const { title, description } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />
    </Head>
  );
};
