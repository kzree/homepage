import { otherSkills } from '@/data/homepage';

export const OtherSkills = () => {
  const { title, columns } = otherSkills;

  return (
    <section className="container mx-auto py-16" id="other-tech">
      <h2 className="text-3xl font-bold text-black mb-6 border-b border-secondary pb-2 inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map(({ title, items }, idx) => (
          <div
            className="rounded-xl shadow-xl hover:shadow-secondary/20 duration-300 ease-in-out p-5 bg-white"
            key={`tech-${idx}`}
          >
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
          </div>
        ))}
      </div>
    </section>
  );
};
