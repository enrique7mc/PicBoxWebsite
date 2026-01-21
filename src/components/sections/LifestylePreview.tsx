import { motion } from 'framer-motion';
import { Heading, Text, SerifItalic } from '../ui';
import { AccentSquare } from '../ui';
import lifestyleImage from '../../assets/screenshots/lifestyle.jpeg';
import styles from './LifestylePreview.module.css';

interface LifestylePreviewProps {
  variant?: 'default' | 'waitlist';
}

export function LifestylePreview({ variant = 'default' }: LifestylePreviewProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imagePlaceholder}>
            <img src={lifestyleImage} alt="iPad displaying PicBox in a home setting" className={styles.lifestyleImage} />
          </div>
          <AccentSquare
            color="gold"
            size={20}
            rotate={-12}
            className={styles.accentTopLeft}
          />
          <AccentSquare
            color="sage"
            size={14}
            rotate={8}
            className={styles.accentBottomRight}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Heading as="h2" serif className={styles.title}>
            {variant === 'waitlist' ? (
              <>
                Imagine it in <SerifItalic>your</SerifItalic> home
              </>
            ) : (
              <>
                Designed for <SerifItalic>everyday</SerifItalic> life
              </>
            )}
          </Heading>
          <Text muted className={styles.description}>
            {variant === 'waitlist' ? (
              <>
                PicBox transforms any iPad into a beautiful digital photo frame that
                blends seamlessly into your living space. No clutter, no complexity—just
                your favorite memories on display.
              </>
            ) : (
              <>
                Whether it's on your nightstand, kitchen counter, or living room shelf,
                PicBox turns your iPad into a stunning centerpiece that showcases your
                most precious memories throughout the day.
              </>
            )}
          </Text>
          <AccentSquare
            color="rose"
            size={12}
            rotate={15}
            className={styles.accentContent}
          />
        </motion.div>
      </div>
    </section>
  );
}
