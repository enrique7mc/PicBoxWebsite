import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  children: ReactNode;
  footerVariant?: 'minimal' | 'full';
}

export function PageWrapper({ children, footerVariant = 'minimal' }: PageWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <motion.main
        className={styles.main}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.main>
      <Footer variant={footerVariant} />
    </div>
  );
}
