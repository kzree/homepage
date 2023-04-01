import { majorSkills } from '@/data/homepage';

export const Skills = () => {
  const { skills, title } = majorSkills;
  return (
    <section className="py-16" id="tech">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-secondary pb-2 inline-block">
          {title}
        </h2>
        {skills.map(({ description, title, icon: Icon }, idx) => (
          <div
            className="last:mb-0 mb-5 rounded-xl shadow-xl p-5 bg-gray-dark"
            key={`skill-${idx}`}
          >
            <h3 className="text-xl font-bold mb-2 border-b border-secondary inline-block">
              {title}
            </h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
