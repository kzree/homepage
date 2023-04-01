import { majorSkills } from '@/data/homepage';
import { Card } from '@/components/common';

export const Skills = () => {
  const { skills, title } = majorSkills;
  return (
    <section className="py-16" id="tech">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-secondary pb-2 inline-block">
          {title}
        </h2>
        {skills.map(({ description, title, icon: Icon }, idx) => (
          <Card key={`skill-${idx}`} className="mb-5 last:mb-0">
            <h3 className="text-xl font-bold mb-2 border-b border-secondary inline-block">
              {title}
            </h3>
            <p>{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
