import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Heading, Text, Label, SerifItalic } from '../ui';
import { MockupPlaceholder, ImageComparisonSlider } from '../ui';
import { AccentDot } from '../ui';
import kenBurnsImage from '../../assets/screenshots/ken-burns.jpg';
import faceDetectionImage from '../../assets/screenshots/face-detection.jpg';
import normalModeImage from '../../assets/screenshots/normal-mode.jpg';
import darkModeImage from '../../assets/screenshots/dark-mode.jpg';
import styles from './FeatureTeaser.module.css';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeatureTeaser() {
  const { t } = useTranslation('home');

  const features = [
    {
      number: '01',
      title: t('featureTeaser.features.kenBurns.title'),
      description: t('featureTeaser.features.kenBurns.description'),
      label: t('featureTeaser.features.kenBurns.label'),
      image: kenBurnsImage,
    },
    {
      number: '02',
      title: t('featureTeaser.features.autoStart.title'),
      description: t('featureTeaser.features.autoStart.description'),
      label: t('featureTeaser.features.autoStart.label'),
      hasSlider: true,
    },
    {
      number: '03',
      title: t('featureTeaser.features.faceDetection.title'),
      description: t('featureTeaser.features.faceDetection.description'),
      label: t('featureTeaser.features.faceDetection.label'),
      image: faceDetectionImage,
    },
  ] as const;

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
          <Heading as="h2" serif className={styles.title}>
            <Trans i18nKey="featureTeaser.heading" ns="home">
              A glimpse of what's <SerifItalic>coming</SerifItalic>
            </Trans>
          </Heading>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.number}
              className={styles.card}
              variants={itemVariants}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{feature.number}</span>
                <AccentDot
                  color={
                    feature.number === '01'
                      ? 'gold'
                      : feature.number === '02'
                      ? 'sage'
                      : 'rose'
                  }
                  size={8}
                />
              </div>
              {'hasSlider' in feature && feature.hasSlider ? (
                <MockupPlaceholder
                  variant="ipad-small"
                  label={feature.label}
                  className={styles.mockup}
                >
                  <ImageComparisonSlider
                    beforeImage={normalModeImage}
                    afterImage={darkModeImage}
                    beforeAlt={t('featureTeaser.comparison.beforeAlt')}
                    afterAlt={t('featureTeaser.comparison.afterAlt')}
                    beforeLabel={t('featureTeaser.comparison.before')}
                    afterLabel={t('featureTeaser.comparison.after')}
                  />
                </MockupPlaceholder>
              ) : (
                <MockupPlaceholder
                  variant="ipad-small"
                  label={feature.label}
                  image={'image' in feature ? feature.image : undefined}
                  className={styles.mockup}
                />
              )}
              <div className={styles.cardContent}>
                <Label className={styles.featureTitle}>{feature.title}</Label>
                <Text size="sm" muted>
                  {feature.description}
                </Text>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
