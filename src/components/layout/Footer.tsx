import { footer } from '@/data/footer';
import { Socials } from '@/components/common';

export const Footer = () => {
  const { copyright, sourceCode } = footer;

  return (
    <footer className="bg-gray">
      <div className="container mx-auto border-t border-secondary py-8">
        <div className="flex justify-between text-gray-light">
          <div className="flex gap-2">
            <p className="font-bold text-gray-light">{copyright}</p>•
            <a className="hover:text-secondary duration-300 ease-in-out" href={sourceCode.url}>
              {sourceCode.text}
            </a>
          </div>
          <Socials className="text-gray-light" iconClassName="hover:text-secondary" />
        </div>
      </div>
    </footer>
  );
};
