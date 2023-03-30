import { socials } from '@/data/socials';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Socials = ({ className = '' }: Props) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {socials.map(({ link, icon: Icon, name }) => (
        <Link href={link} key={`social-${name}`}>
          <Icon
            size={40}
            className="hover:text-secondary transition-all duration-300 ease-in-out"
          />
        </Link>
      ))}
    </div>
  );
};
