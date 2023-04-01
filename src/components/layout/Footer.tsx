import { footer } from '@/data/footer';
import { Socials } from '@/components/common';

export const Footer = () => {
  return (
    <footer className="bg-gray">
      <div className="container mx-auto border-t border-secondary py-8">
        <div className="flex justify-between text-gray-light">
          <p className="font-bold text-gray-light">{footer.copyright}</p>
          <Socials className=" text-gray-light" iconClassName="hover:opacity-75" />
        </div>
      </div>
    </footer>
  );
};
