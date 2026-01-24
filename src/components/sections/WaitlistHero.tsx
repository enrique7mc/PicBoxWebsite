import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DisplayHeading, Label, SerifItalic } from '../ui';
import { AccentSquare } from '../ui';
import { MockupPlaceholder } from '../ui';
import heroImage1 from '../../assets/screenshots/hero.jpg';
import heroImage2 from '../../assets/screenshots/hero-2.jpg';
import heroImage3 from '../../assets/screenshots/hero-3.jpg';
import styles from './WaitlistHero.module.css';
import mockupStyles from '../ui/MockupPlaceholder.module.css';

const heroImages = [heroImage1, heroImage2, heroImage3];

const ROTATION_INTERVAL = 8000; // 8 seconds

export function WaitlistHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(timer);
  }, []);

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
          >
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={heroImages[currentIndex]}
                alt="PicBox app screenshot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={mockupStyles.image}
                style={{ position: 'absolute', inset: 0 }}
              />
            </AnimatePresence>
          </MockupPlaceholder>
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
