import { motion } from 'framer-motion';
import styles from './AccentSquare.module.css';

type AccentColor = 'gold' | 'sage' | 'rose';

interface AccentSquareProps {
  color?: AccentColor;
  size?: number;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AccentSquare({
  color = 'gold',
  size = 24,
  rotate = 0,
  className = '',
  style,
}: AccentSquareProps) {
  return (
    <motion.div
      className={`${styles.square} ${styles[color]} ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  );
}

export function AccentDot({
  color = 'gold',
  size = 8,
  className = '',
  style,
}: Omit<AccentSquareProps, 'rotate'>) {
  return (
    <motion.div
      className={`${styles.dot} ${styles[color]} ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    />
  );
}
