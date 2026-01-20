import type { ReactNode, CSSProperties } from 'react';
import styles from './Typography.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElement = 'p' | 'span' | 'div';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface HeadingProps extends TypographyProps {
  as?: HeadingLevel;
  serif?: boolean;
}

interface TextProps extends TypographyProps {
  as?: TextElement;
  muted?: boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}

export function DisplayHeading({ children, as: Tag = 'h1', serif = true, className = '', style }: HeadingProps) {
  return (
    <Tag
      className={`${styles.display} ${serif ? styles.serif : styles.sans} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function Heading({ children, as: Tag = 'h2', serif = false, className = '', style }: HeadingProps) {
  return (
    <Tag
      className={`${styles.heading} ${serif ? styles.serif : styles.sans} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function Subheading({ children, as: Tag = 'h3', className = '', style }: HeadingProps) {
  return (
    <Tag
      className={`${styles.subheading} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function Text({ children, as: Tag = 'p', muted = false, size = 'base', className = '', style }: TextProps) {
  return (
    <Tag
      className={`${styles.text} ${styles[`size-${size}`]} ${muted ? styles.muted : ''} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function Label({ children, className = '', style }: TypographyProps) {
  return (
    <span
      className={`${styles.label} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

export function SerifItalic({ children, className = '' }: TypographyProps) {
  return (
    <span className={`${styles.serifItalic} ${className}`}>
      {children}
    </span>
  );
}
