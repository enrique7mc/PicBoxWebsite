import { motion } from 'framer-motion';
import styles from './MockupPlaceholder.module.css';

interface MockupPlaceholderProps {
  variant?: 'ipad' | 'ipad-small' | 'square';
  rotate?: number;
  label?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export function MockupPlaceholder({
  variant = 'ipad',
  rotate = 0,
  label,
  image,
  className = '',
  children,
}: MockupPlaceholderProps) {
  return (
    <motion.div
      className={`${styles.mockup} ${styles[variant]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.screen}>
        {children ? (
          children
        ) : image ? (
          <img src={image} alt={label || 'Screenshot'} className={styles.image} />
        ) : (
          <>
            <div className={styles.gradient} />
            {label && <span className={styles.label}>{label}</span>}
          </>
        )}
      </div>
      {(variant === 'ipad' || variant === 'ipad-small') && (
        <div className={styles.frame}>
          <div className={styles.bezelTop}>
            <div className={styles.camera} />
          </div>
        </div>
      )}
    </motion.div>
  );
}
