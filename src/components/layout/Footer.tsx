import { footer } from '@/data/footer';
import { Socials } from '@/components/common';

export const Footer = () => {
  return (
    <footer className="bg-purple py-8">
      <div className="container mx-auto">
        <div className="flex justify-between text-white">
          <p className="font-bold">{footer.copyright}</p>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
