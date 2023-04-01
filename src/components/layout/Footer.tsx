import { footer } from '@/data/footer';
import { Socials } from '@/components/common';

export const Footer = () => {
  return (
    <footer className="bg-gray">
      <div className="container mx-auto border-t border-primary py-8">
        <div className="flex justify-between text-black">
          <p className="font-bold">{footer.copyright}</p>
          <Socials className="text-black" iconClassName="hover:opacity-75" />
        </div>
      </div>
    </footer>
  );
};
