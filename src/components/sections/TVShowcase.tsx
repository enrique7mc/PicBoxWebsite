import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Heading, Text, Label, SerifItalic } from '../ui';
import { MockupPlaceholder, AccentSquare } from '../ui';
import heroImage from '../../assets/screenshots/hero.jpg';
import kenBurnsImage from '../../assets/screenshots/ken-burns.jpg';
import styles from './TVShowcase.module.css';

export function TVShowcase() {
  const { t } = useTranslation('home');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Label className={styles.badge}>{t('tvShowcase.badge')}</Label>
          <Heading as="h2" serif className={styles.title}>
            <Trans i18nKey="tvShowcase.heading" ns="home">
              Now on your <SerifItalic>big screen</SerifItalic>
            </Trans>
          </Heading>
          <Text muted className={styles.subtitle}>
            {t('tvShowcase.subtitle')}
          </Text>
        </motion.div>

        <motion.div
          className={styles.tvWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <MockupPlaceholder variant="tv" image={heroImage} label="PicBox on Apple TV" />
          <AccentSquare color="gold" size={18} rotate={-12} className={styles.accentLeft} />
          <AccentSquare color="rose" size={14} rotate={15} className={styles.accentRight} />
        </motion.div>

        <motion.div
          className={styles.features}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                <path d="M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
            <Text className={styles.featureTitle}>{t('tvShowcase.features.siriRemote.title')}</Text>
            <Text size="sm" muted>{t('tvShowcase.features.siriRemote.description')}</Text>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14" />
                <rect x="3" y="6" width="12" height="12" rx="2" />
              </svg>
            </div>
            <Text className={styles.featureTitle}>{t('tvShowcase.features.cinematic.title')}</Text>
            <Text size="sm" muted>{t('tvShowcase.features.cinematic.description')}</Text>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <Text className={styles.featureTitle}>{t('tvShowcase.features.ambient.title')}</Text>
            <Text size="sm" muted>{t('tvShowcase.features.ambient.description')}</Text>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
