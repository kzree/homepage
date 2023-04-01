import { otherSkills } from '@/data/homepage';
import { Card } from '@/components/common';

export const OtherSkills = () => {
  const { title, columns } = otherSkills;

  return (
    <section className="container mx-auto py-16" id="other-tech">
      <h2 className="text-3xl font-bold mb-6 border-b border-secondary pb-2 inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map(({ title, items }, idx) => (
          <Card key={`tech-${idx}`}>
            <h3 className="text-xl font-bold mb-2 border-b border-secondary inline-block">
              {title}
            </h3>
            <ul className="ml-4">
              {items.map((item, idx) => (
                <li key={`tech-item-${idx}`} className="list-disc py-1">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
