import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Heading, Text, Label, SerifItalic } from '../ui';
import { MockupPlaceholder, AccentSquare, ImageComparisonSlider } from '../ui';
import kenBurnsImage from '../../assets/screenshots/ken-burns.jpg';
import faceDetectionImage from '../../assets/screenshots/face-detection.jpg';
import normalModeImage from '../../assets/screenshots/normal-mode.jpg';
import darkModeImage from '../../assets/screenshots/dark-mode.jpg';
import styles from './FeaturesGrid.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesGrid() {
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
          <Heading as="h2" serif className={styles.title}>
            <Trans i18nKey="featuresGrid.heading" ns="home">
              Everything you need for a <SerifItalic>perfect</SerifItalic> display
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
          {/* Ken Burns Effect - Large card */}
          <motion.article
            className={`${styles.card} ${styles.cardLarge}`}
            variants={itemVariants}
          >
            <div className={styles.cardContent}>
              <Label className={styles.cardLabel}>{t('featuresGrid.kenBurns.label')}</Label>
              <Heading as="h3" serif className={styles.cardTitle}>
                {t('featuresGrid.kenBurns.title')}
              </Heading>
              <Text muted>
                {t('featuresGrid.kenBurns.description')}
              </Text>
            </div>
            <div className={styles.cardMockup}>
              <MockupPlaceholder variant="ipad-small" label="Ken Burns Demo" image={kenBurnsImage} />
            </div>
            <AccentSquare
              color="gold"
              size={16}
              rotate={12}
              className={styles.accentDecor}
            />
          </motion.article>

          {/* Smart Face Detection - Large card */}
          <motion.article
            className={`${styles.card} ${styles.cardLarge}`}
            variants={itemVariants}
          >
            <div className={styles.cardContent}>
              <Label className={styles.cardLabel}>{t('featuresGrid.faceDetection.label')}</Label>
              <Heading as="h3" serif className={styles.cardTitle}>
                {t('featuresGrid.faceDetection.title')}
              </Heading>
              <Text muted>
                {t('featuresGrid.faceDetection.description')}
              </Text>
            </div>
            <div className={styles.cardMockup}>
              <MockupPlaceholder variant="ipad-small" label="Face Detection" image={faceDetectionImage} />
            </div>
            <AccentSquare
              color="sage"
              size={14}
              rotate={-8}
              className={styles.accentDecor}
            />
          </motion.article>

          {/* Night Mode - Full width accent with comparison slider */}
          <motion.article
            className={`${styles.card} ${styles.cardNightMode}`}
            variants={itemVariants}
          >
            <div className={styles.nightModeContent}>
              <div className={styles.nightModeText}>
                <Label className={styles.cardLabel}>{t('featuresGrid.nightMode.label')}</Label>
                <Heading as="h3" serif className={styles.cardTitle}>
                  {t('featuresGrid.nightMode.title')}
                </Heading>
                <Text>
                  {t('featuresGrid.nightMode.description')}
                </Text>
              </div>
              <div className={styles.nightModeSlider}>
                <ImageComparisonSlider
                  beforeImage={normalModeImage}
                  afterImage={darkModeImage}
                  beforeLabel={t('featuresGrid.nightMode.sliderBefore')}
                  afterLabel={t('featuresGrid.nightMode.sliderAfter')}
                  initialPosition={50}
                />
              </div>
            </div>
          </motion.article>

          {/* Privacy - Small card */}
          <motion.article
            className={`${styles.card} ${styles.cardSmall}`}
            variants={itemVariants}
          >
            <Label className={styles.cardLabel}>{t('featuresGrid.privacy.label')}</Label>
            <Heading as="h3" serif className={styles.cardTitle}>
              {t('featuresGrid.privacy.title')}
            </Heading>
            <Text muted>
              {t('featuresGrid.privacy.description')}
            </Text>
          </motion.article>

          {/* Weather Overlay - Large card with weather widget */}
          <motion.article
            className={`${styles.card} ${styles.cardLarge}`}
            variants={itemVariants}
          >
            <div className={styles.cardContent}>
              <Label className={styles.cardLabel}>{t('featuresGrid.weather.label')}</Label>
              <Heading as="h3" serif className={styles.cardTitle}>
                {t('featuresGrid.weather.title')}
              </Heading>
              <Text muted>
                {t('featuresGrid.weather.description')}
              </Text>
            </div>
            <div className={styles.weatherWidget}>
              <span className={styles.weatherWidgetIcon}>{t('featuresGrid.weather.demo.icon')}</span>
              <div className={styles.weatherWidgetInfo}>
                <span className={styles.weatherWidgetTemp}>{t('featuresGrid.weather.demo.temp')}</span>
                <span className={styles.weatherWidgetCondition}>{t('featuresGrid.weather.demo.condition')}</span>
              </div>
            </div>
            <AccentSquare
              color="rose"
              size={14}
              rotate={-10}
              className={styles.accentDecor}
            />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
