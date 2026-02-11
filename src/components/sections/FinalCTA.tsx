import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Heading, Text, Label, SerifItalic } from '../ui';
import { LinkButton } from '../ui';
import { AccentSquare, AccentDot } from '../ui';
import styles from './FinalCTA.module.css';

const isEarlyAdopter = import.meta.env.VITE_EARLY_ADOPTER === 'true';

export function FinalCTA() {
  const { t } = useTranslation('home');

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <AccentSquare
          color="rose"
          size={18}
          rotate={15}
          className={styles.accentLeft}
        />

        <Heading as="h2" serif className={styles.title}>
          <Trans i18nKey="finalCta.heading" ns="home">
            Ready to transform your <SerifItalic>iPad?</SerifItalic>
          </Trans>
        </Heading>

        <div className={styles.features}>
          <div className={styles.feature}>
            <AccentDot color="gold" size={8} />
            <Text size="sm">{t('finalCta.features.noSubscription')}</Text>
          </div>
          <div className={styles.feature}>
            <AccentDot color="sage" size={8} />
            <Text size="sm">{t('finalCta.features.worksOffline')}</Text>
          </div>
          <div className={styles.feature}>
            <AccentDot color="rose" size={8} />
            <Text size="sm">{t('finalCta.features.privacyFirst')}</Text>
          </div>
        </div>

        <div className={styles.actions}>
          <LinkButton
            href={t('cta.appStoreUrl', { ns: 'common' })}
            external
            variant="primary"
            size="lg"
            className={styles.appStoreBtn}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
{t('cta.downloadAppStore', { ns: 'common' })}
          </LinkButton>

          <div className={styles.price}>
            <Label>{t(isEarlyAdopter ? 'cta.earlyAdopter' : 'cta.oneTimePurchase', { ns: 'common' })}</Label>
            <span className={styles.priceAmount}>{isEarlyAdopter ? t('cta.earlyAdopterPrice', { ns: 'common' }) : '$4.99'}</span>
          </div>
        </div>

        <AccentSquare
          color="sage"
          size={14}
          rotate={-10}
          className={styles.accentRight}
        />
      </motion.div>
    </section>
  );
}
