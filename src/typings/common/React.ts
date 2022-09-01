import { FC, PropsWithChildren } from 'react';

export type ReactComponent<T = {}> = FC<PropsWithChildren<T>>;

export interface ClassNamesProp {
  className?: string;
}
