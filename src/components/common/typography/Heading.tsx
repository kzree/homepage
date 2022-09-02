import { ClassNamesProp, ReactComponent } from '@typings/common/react';
import { HeadingLevel } from '@typings/common/typography';

interface Props extends ClassNamesProp {
  level: HeadingLevel;
}

export const Heading: ReactComponent<Props> = ({ children, className = '', level = 2 }) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={`text-6xl lg:text-7xl whitespace-pre-line tracking-widest uppercase ${className}`}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={`text-6xl lg:text-7xl whitespace-pre-line tracking-widest uppercase ${className}`}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`whitespace-pre-line tracking-widest uppercase ${className}`}>{children}</h3>
      );
    default:
      return null;
  }
};
