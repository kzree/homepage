import { socials } from '@/data/socials';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  className?: string;
  iconClassName?: string;
}

export const Socials = ({ className = '', iconClassName }: Props) => {
  const iconClasses = clsx('transition-all duration-300 ease-in-out', iconClassName, {
    'hover:text-secondary': !iconClassName,
  });

  return (
    <div className={`flex gap-2 ${className}`}>
      {socials.map(({ link, icon: Icon, name }) => (
        <Link href={link} key={`social-${name}`}>
          <Icon size={40} className={iconClasses} />
        </Link>
      ))}
    </div>
  );
};
