import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Text, SerifItalic } from '../ui';
import { AccentDot } from '../ui';
import styles from './ValueProp.module.css';

export function ValueProp() {
  const { t } = useTranslation('home');

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
          <Trans
            i18nKey="valueProp.description"
            ns="home"
            components={{ cinematic: <SerifItalic /> }}
          />
        </Text>
      </motion.div>
    </section>
  );
}
