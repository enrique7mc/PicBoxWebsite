import { motion } from 'framer-motion';
import { Text, SerifItalic } from '../ui';
import { AccentDot } from '../ui';
import styles from './ValueProp.module.css';

export function ValueProp() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.dotWrapper}>
          <AccentDot color="gold" size={10} />
        </div>
        <Text size="xl" className={styles.text}>
          Transform your iPad into a stunning digital photo frame with{' '}
          <SerifItalic>cinematic</SerifItalic> Ken Burns effects and intelligent
          face detection that keeps your loved ones perfectly framed. No subscriptions,
          no cloud dependency—just your photos, beautifully displayed.
        </Text>
      </motion.div>
    </section>
  );
}
