import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AccentDot } from '../ui';
import styles from './Footer.module.css';

interface FooterProps {
  variant?: 'minimal' | 'full';
}

export function Footer({ variant = 'minimal' }: FooterProps) {
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
            &copy; {currentYear} PicBox. All rights reserved.
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
              The photo frame your iPad was meant to be.
            </p>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Navigate</h4>
            <nav className={styles.linksList}>
              <Link to="/" className={styles.link}>Waitlist</Link>
              <Link to="/app" className={styles.link}>App</Link>
            </nav>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <nav className={styles.linksList}>
              <a href="#" className={styles.link}>Press Kit</a>
              <a href="#" className={styles.link}>Support</a>
              <a href="#" className={styles.link}>Privacy Policy</a>
            </nav>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} PicBox. All rights reserved.
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
