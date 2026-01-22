import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DisplayHeading, Text, Label, SerifItalic } from '../ui';
import { LinkButton } from '../ui';
import { MockupPlaceholder } from '../ui';
import { AccentSquare } from '../ui';
import heroImage1 from '../../assets/screenshots/hero.jpg';
import heroImage2 from '../../assets/screenshots/hero-2.jpg';
import heroImage3 from '../../assets/screenshots/hero-3.jpg';
import styles from './ShowcaseHero.module.css';

const heroImages = [heroImage1, heroImage2, heroImage3];
const ROTATION_INTERVAL = 5000;

export function ShowcaseHero() {
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
          <DisplayHeading className={styles.title}>
            Your memories,
            <br />
            <SerifItalic>beautifully</SerifItalic> displayed
          </DisplayHeading>

          <Text size="lg" muted className={styles.subtitle}>
            Transform your iPad into a stunning digital photo frame with cinematic
            effects and intelligent framing.
          </Text>

          <div className={styles.actions}>
            <LinkButton
              href="#"
              variant="primary"
              size="lg"
              className={styles.appStoreBtn}
            >
              <svg
                className={styles.appleLogo}
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </LinkButton>

            <div className={styles.price}>
              <Label>One-time purchase</Label>
              <span className={styles.priceAmount}>$4.99</span>
            </div>
          </div>

          <AccentSquare
            color="gold"
            size={18}
            rotate={15}
            className={styles.accentLeft}
          />
        </motion.div>

        <motion.div
          className={styles.mockupWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MockupPlaceholder
            variant="ipad"
            rotate={-2}
            label="Main App Screenshot"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={heroImages[currentIndex]}
                alt="PicBox app screenshot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AnimatePresence>
          </MockupPlaceholder>
          <AccentSquare
            color="sage"
            size={24}
            rotate={-10}
            className={styles.accentMockup}
          />
          <AccentSquare
            color="rose"
            size={14}
            rotate={20}
            className={styles.accentMockup2}
          />
        </motion.div>
      </div>
    </section>
  );
}
