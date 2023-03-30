import { majorSkills } from '@/data/homepage';

export const Skills = () => {
  return (
    <section className="py-16 container mx-auto" id="tech">
      <h2 className="text-3xl font-bold text-black mb-6">{majorSkills.title}</h2>
      {majorSkills.skills.map(({ description, title, icon: Icon }, idx) => (
        <div className="last:mb-0 mb-5 rounded-xl shadow-xl p-5 bg-white" key={`skill-${idx}`}>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Icon size={40} />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
};
