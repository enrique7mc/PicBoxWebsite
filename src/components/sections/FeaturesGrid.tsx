import { motion } from 'framer-motion';
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
            Everything you need for a <SerifItalic>perfect</SerifItalic> display
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
              <Label className={styles.cardLabel}>Cinematic</Label>
              <Heading as="h3" serif className={styles.cardTitle}>
                Ken Burns Effect
              </Heading>
              <Text muted>
                Subtle, elegant pan and zoom animations bring your photos to life,
                just like a professional documentary. Each photo gets its own
                carefully crafted movement.
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
              <Label className={styles.cardLabel}>Intelligent</Label>
              <Heading as="h3" serif className={styles.cardTitle}>
                Smart Face Detection
              </Heading>
              <Text muted>
                Advanced AI detects faces in your photos and ensures they're always
                perfectly framed, even during pan and zoom animations.
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
                <Label className={styles.cardLabel}>Thoughtful</Label>
                <Heading as="h3" serif className={styles.cardTitle}>
                  Night Mode
                </Heading>
                <Text>
                  Enable Night Mode to dim your display after dark. Perfect for
                  bedrooms and living spaces where a bright screen would be distracting.
                </Text>
              </div>
              <div className={styles.nightModeSlider}>
                <ImageComparisonSlider
                  beforeImage={normalModeImage}
                  afterImage={darkModeImage}
                  beforeLabel="Normal"
                  afterLabel="Night"
                  initialPosition={50}
                />
              </div>
            </div>
          </motion.article>

          {/* Auto-Start - Small card */}
          <motion.article
            className={`${styles.card} ${styles.cardSmall}`}
            variants={itemVariants}
          >
            <Label className={styles.cardLabel}>Convenient</Label>
            <Heading as="h3" serif className={styles.cardTitleSmall}>
              Auto-Start
            </Heading>
            <Text size="sm" muted>
              Automatically launches when you plug in power. Perfect for
              nightstands and kitchen counters.
            </Text>
          </motion.article>

          {/* Weather Overlay - Large card with weather widget */}
          <motion.article
            className={`${styles.card} ${styles.cardLarge}`}
            variants={itemVariants}
          >
            <div className={styles.cardContent}>
              <Label className={styles.cardLabel}>Live Data</Label>
              <Heading as="h3" serif className={styles.cardTitle}>
                Weather Overlay
              </Heading>
              <Text muted>
                Optional weather widget displays current conditions, so your
                photo frame doubles as an at-a-glance weather station.
              </Text>
            </div>
            <div className={styles.weatherWidget}>
              <span className={styles.weatherWidgetIcon}>☀️</span>
              <div className={styles.weatherWidgetInfo}>
                <span className={styles.weatherWidgetTemp}>72°</span>
                <span className={styles.weatherWidgetCondition}>Clear</span>
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
