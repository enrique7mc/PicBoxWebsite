import { motion } from 'framer-motion';
import { Heading, Text, Label, SerifItalic } from '../ui';
import { MockupPlaceholder, ImageComparisonSlider } from '../ui';
import { AccentDot } from '../ui';
import kenBurnsImage from '../../assets/screenshots/ken-burns.jpg';
import faceDetectionImage from '../../assets/screenshots/face-detection.jpg';
import normalModeImage from '../../assets/screenshots/normal-mode.jpg';
import darkModeImage from '../../assets/screenshots/dark-mode.jpg';
import styles from './FeatureTeaser.module.css';

const features = [
  {
    number: '01',
    title: 'Ken Burns Effect',
    description: 'Subtle, cinematic pan and zoom brings your photos to life.',
    label: 'Ken Burns Demo',
    image: kenBurnsImage,
  },
  {
    number: '02',
    title: 'Always Ready',
    description: 'Auto-start on power and night mode for 24/7 display.',
    label: 'Night Mode',
    hasSlider: true,
  },
  {
    number: '03',
    title: 'Smart Face Detection',
    description: 'Intelligent framing keeps faces perfectly centered.',
    label: 'Face Detection',
    image: faceDetectionImage,
  },
] as const;

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
            A glimpse of what's <SerifItalic>coming</SerifItalic>
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
                    beforeAlt="Normal display mode"
                    afterAlt="Dark display mode"
                    beforeLabel="Normal"
                    afterLabel="Dark"
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
