import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from '../ui';
import styles from './Header.module.css';

export function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>PicBox</span>
        </Link>

        <div className={styles.navSection}>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
