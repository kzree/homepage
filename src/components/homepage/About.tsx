import { about } from '@/data/about';

export const About = () => {
  const { title, description } = about;

  return (
    <section className="container mx-auto py-16" id="about">
      <h2 className="text-3xl font-bold text-black mb-6 border-b border-secondary pb-2 inline-block">
        {title}
      </h2>
      {description.map((item, idx) => (
        <p key={`about-p-${idx}`} className="w-full md:w-3/4 pb-4 last:pb-0">
          {item}
        </p>
      ))}
    </section>
  );
};
