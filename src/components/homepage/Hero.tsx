import { Socials } from '@/components/common';

export const Hero = () => {
  return (
    <section className="h-[35rem] py-16 bg-primary flex flex-col items-center text-white">
      <div className="bg-secondary w-[9.75rem] h-[9.75rem] rounded-full" />
      <h1 className="text-5xl font-bold mt-5 mb-2 text-secondary">Hi, I am Erkki</h1>
      <p className="text-xl">Full stack developer</p>
      <Socials className="mt-auto" />
    </section>
  );
};
