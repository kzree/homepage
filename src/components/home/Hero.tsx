import Image from 'next/image';

import { Heading } from '@components/common/typography';

import { ReactComponent } from '@typings/common/react';

import data from '@data/hero.json';
import styles from '@style/hero.module.css';

export const Hero: ReactComponent = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-5 gap-8 h-100 py-16">
      <div className="flex flex-col justify-center xl:col-span-3">
        <Heading level={1} className={styles.animated}>
          {data.bigText}
        </Heading>
        <p className={`text-lg uppercase tracking-widest ${styles.animated}`}>{data.smallText}</p>
      </div>
      <div className="xl:col-span-2">
        <Image
          src="/image/me.png"
          alt="image of me"
          className="grayscale hover:grayscale-0 transition-all duration-1000"
          width="1000"
          height="1000"
        />
      </div>
    </div>
  );
};
