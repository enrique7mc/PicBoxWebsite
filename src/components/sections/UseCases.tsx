import { motion } from 'framer-motion';
import { Heading, Text, SerifItalic } from '../ui';
import { AccentDot } from '../ui';
import styles from './UseCases.module.css';

const useCases = [
  {
    title: 'Repurpose old iPads',
    description: "Give your old iPad a new life as a dedicated photo display instead of letting it collect dust.",
  },
  {
    title: 'Kitchen countertop display',
    description: 'Perfect for the kitchen—show family photos while you cook, with weather at a glance.',
  },
  {
    title: 'Family photo showcase',
    description: 'Keep grandparents connected with automatically updating photos of the grandkids.',
  },
  {
    title: 'Nightstand companion',
    description: 'Wake up to your favorite memories. Night mode ensures it won\'t disturb your sleep.',
  },
];

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function UseCases() {
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
            Perfect for <SerifItalic>every</SerifItalic> home
          </Heading>
          <Text muted className={styles.subtitle}>
            Discover how PicBox fits into your daily life.
          </Text>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {useCases.map((useCase, index) => (
            <motion.article key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.cardHeader}>
                <AccentDot
                  color={index % 3 === 0 ? 'gold' : index % 3 === 1 ? 'sage' : 'rose'}
                  size={10}
                />
              </div>
              <Text className={styles.cardTitle}>{useCase.title}</Text>
              <Text size="sm" muted>
                {useCase.description}
              </Text>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
