import Link from 'next/link';

import { ThemeSwitcher } from '@components/layout/ThemeSwitcher';

import { ReactComponent } from '@typings/common/react';

import headerData from '@data/header.json';

interface Props {
  text: string;
  href: string;
  openNewTab?: boolean;
}

const HeaderLink: ReactComponent<Props> = ({ text, href, openNewTab = false }) => (
  <div>
    <Link href={href} passHref>
      <a
        target={openNewTab ? '_blank' : ''}
        className="capitalize hover:text-base-content/60 transition-all duration-200 ease-in"
      >
        {text}
      </a>
    </Link>
  </div>
);

export const Header: ReactComponent = () => {
  const { links } = headerData;

  return (
    <header className="h-16 ">
      <div className="container mx-auto flex justify-end items-center h-full">
        <div className="flex gap-6">
          {links.map(({ text, href, newTab }, idx) => (
            <HeaderLink key={`header-link-${idx}`} text={text} href={href} openNewTab={newTab} />
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
