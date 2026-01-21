import { motion } from 'framer-motion';
import { Heading, Text, Label, SerifItalic } from '../ui';
import { MockupPlaceholder, AccentSquare } from '../ui';
import kenBurnsImage from '../../assets/screenshots/ken-burns.jpeg';
import faceDetectionImage from '../../assets/screenshots/face-detection.jpeg';
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

          {/* Weather Overlay - Full width accent */}
          <motion.article
            className={`${styles.card} ${styles.cardAccent}`}
            variants={itemVariants}
          >
            <div className={styles.accentContent}>
              <div className={styles.accentText}>
                <Label className={styles.cardLabel}>Live Data</Label>
                <Heading as="h3" serif className={styles.cardTitle}>
                  Weather Overlay
                </Heading>
                <Text>
                  Optional weather widget displays current conditions, so your
                  photo frame doubles as an at-a-glance weather station.
                </Text>
              </div>
              <div className={styles.weatherPreview}>
                <span className={styles.weatherIcon}>☀️</span>
                <div className={styles.weatherInfo}>
                  <span className={styles.weatherTemp}>72°</span>
                  <span className={styles.weatherCondition}>Clear</span>
                </div>
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

          {/* Night Mode - Small card */}
          <motion.article
            className={`${styles.card} ${styles.cardSmall}`}
            variants={itemVariants}
          >
            <Label className={styles.cardLabel}>Thoughtful</Label>
            <Heading as="h3" serif className={styles.cardTitleSmall}>
              Night Mode
            </Heading>
            <Text size="sm" muted>
              Screen dims automatically at night. Respects your sleep schedule
              while keeping your photos ready.
            </Text>
            <AccentSquare
              color="rose"
              size={12}
              rotate={15}
              className={styles.smallCardAccent}
            />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
