import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../ui';
import styles from './Header.module.css';

export function Header() {
  const { t } = useTranslation('common');
  const location = useLocation();
  const isShowcase = location.pathname === '/app';

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
          <nav className={styles.nav}>
            <Link
              to="/"
              className={`${styles.navLink} ${!isShowcase ? styles.active : ''}`}
            >
              {t('nav.waitlist')}
            </Link>
            <Link
              to="/app"
              className={`${styles.navLink} ${isShowcase ? styles.active : ''}`}
            >
              {t('nav.app')}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
