import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { AccentSquare } from "../ui";
import styles from "./Testimonial.module.css";

export function Testimonial() {
  const { t } = useTranslation('home');

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <AccentSquare
          color="gold"
          size={20}
          rotate={12}
          className={styles.accentTop}
        />

        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>
            {t('testimonial.quote')}
          </p>
          <footer className={styles.attribution}>
            <span className={styles.author}>{t('testimonial.author')}</span>
            <span className={styles.role}>{t('testimonial.role')}</span>
          </footer>
        </blockquote>

        <AccentSquare
          color="sage"
          size={14}
          rotate={-8}
          className={styles.accentBottom}
        />
      </motion.div>
    </section>
  );
}
