import { motion } from 'framer-motion';
import { DisplayHeading, Label, SerifItalic } from '../ui';
import { AccentSquare } from '../ui';
import { MockupPlaceholder } from '../ui';
import heroImage from '../../assets/screenshots/hero.jpeg';
import styles from './WaitlistHero.module.css';

export function WaitlistHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Label className={styles.badge}>Coming Soon</Label>

          <DisplayHeading className={styles.title}>
            <SerifItalic>Coming</SerifItalic>
            <br />
            <SerifItalic>soon</SerifItalic>
          </DisplayHeading>

          <p className={styles.tagline}>
            THE PHOTO FRAME YOUR iPAD WAS MEANT TO BE
          </p>

          <AccentSquare
            color="gold"
            size={20}
            rotate={12}
            className={styles.accentTopLeft}
          />
          <AccentSquare
            color="sage"
            size={14}
            rotate={-8}
            className={styles.accentBottomRight}
          />
        </motion.div>

        <motion.div
          className={styles.mockupWrapper}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MockupPlaceholder
            variant="ipad"
            rotate={3}
            label="Hero Screenshot"
            image={heroImage}
          />
          <AccentSquare
            color="rose"
            size={28}
            rotate={-15}
            className={styles.accentMockup}
          />
        </motion.div>
      </div>
    </section>
  );
}
