import { ClassNamesProp, ReactComponent } from '@typings/common/React';
import { ThemeColor } from '@enum/ThemeColor';
import clsx from 'clsx';

const buttonVariants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  link: 'btn-link',
};

const buttonSizes = {
  lg: 'btn-lg',
  md: 'btn-md',
  sm: 'btn-sm',
  xs: 'btn-xs',
};

const buttonWidths = {
  regular: '',
  wide: 'btn-wide',
  full: 'btn-block',
};

interface Props extends ClassNamesProp {
  variant?: ThemeColor;
  onClick?: () => void;
  size?: keyof typeof buttonSizes;
  width?: keyof typeof buttonWidths;
}

export const Button: ReactComponent<Props> = ({
  children,
  onClick,
  className,
  width = 'regular',
  size = 'md',
  variant = ThemeColor.Primary,
}) => {
  const classes = clsx({
    btn: true,
    [buttonVariants[variant]]: true,
    [buttonSizes[size]]: true,
    [buttonWidths[width]]: true,
    className: !!className,
  });
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
