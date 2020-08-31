import classNames from 'classnames';
import React, { ReactNode } from 'react';

/**
 * Types
 */
interface TextProps {
  children: ReactNode;
  as: keyof JSX.IntrinsicElements;
  fontWeight?: 'text-light' | 'text-normal' | 'text-bold';
  transform?: 'case-none' | 'case-upper';
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'medium'
    | 'dark';
  extraClasses?: string;
  type?:
    | 'title-xxxl'
    | 'title-xxl'
    | 'title-xl'
    | 'title-l'
    | 'title-m'
    | 'title-s'
    | 'paragraph-s'
    | 'paragraph-l'
    | 'subtitle-s'
    | 'subtitle-l'
    | 'caption';
}

/**
 * Components
 */
export const Text = ({
  as,
  fontWeight,
  transform,
  type,
  extraClasses,
  color,
  ...rest
}: TextProps) => {
  const Tag = as;
  const colorStyle = color ? `ion-color-${color} color-base` : null;

  return (
    <Tag className={classNames(fontWeight, transform, type, colorStyle, extraClasses)} {...rest} />
  );
};
