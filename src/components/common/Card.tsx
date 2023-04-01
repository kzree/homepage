import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className = '' }: Props) => {
  return (
    <div className={`rounded-xl shadow-xl duration-300 ease-in-out p-5 bg-gray-dark ${className}`}>
      {children}
    </div>
  );
};
