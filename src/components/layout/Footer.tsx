import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AccentDot } from '../ui';
import styles from './Footer.module.css';

interface FooterProps {
  variant?: 'minimal' | 'full';
}

export function Footer({ variant = 'minimal' }: FooterProps) {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  if (variant === 'minimal') {
    return (
      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <span className={styles.logo}>PicBox</span>
            <AccentDot color="sage" size={6} />
          </div>
          <p className={styles.copyright}>
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </motion.footer>
    );
  }

  return (
    <motion.footer
      className={`${styles.footer} ${styles.full}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.fullGrid}>
          <div className={styles.brandColumn}>
            <span className={styles.logo}>PicBox</span>
            <p className={styles.tagline}>
              {t('footer.tagline')}
            </p>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>{t('footer.navigate.title')}</h4>
            <nav className={styles.linksList}>
              <Link to="/" className={styles.link}>{t('footer.navigate.waitlist')}</Link>
              <Link to="/app" className={styles.link}>{t('footer.navigate.app')}</Link>
            </nav>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>{t('footer.resources.title')}</h4>
            <nav className={styles.linksList}>
              <Link to="/faq" className={styles.link}>{t('footer.resources.faq')}</Link>
              <a href="mailto:support@picbox.app" className={styles.link}>{t('footer.resources.support')}</a>
              <Link to="/privacy" className={styles.link}>{t('footer.resources.privacy')}</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className={styles.dots}>
            <AccentDot color="gold" size={6} />
            <AccentDot color="sage" size={6} />
            <AccentDot color="rose" size={6} />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
