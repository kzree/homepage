import Image from 'next/image';

import { ReactComponent } from '@typings/common/React';

import data from '@data/hero.json';
import styles from '@style/hero.module.css';

export const Hero: ReactComponent = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-5 gap-8 h-100 py-16">
      <div className="flex flex-col justify-center xl:col-span-3">
        <h1 className={`text-7xl whitespace-pre-line tracking-wide pb-4 ${styles.animated}`}>
          {data.bigText}
        </h1>
        <p className={`text-lg uppercase tracking-widest ${styles.animated}`}>{data.smallText}</p>
      </div>
      <div className="xl:col-span-2">
        <Image
          src="/image/me.png"
          alt="image of me"
          className="grayscale"
          width="1000"
          height="1000"
        />
      </div>
    </div>
  );
};
