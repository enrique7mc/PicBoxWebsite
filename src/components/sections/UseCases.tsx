import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Heading, Text, SerifItalic } from '../ui';
import { AccentDot } from '../ui';
import styles from './UseCases.module.css';


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
  const { t } = useTranslation('home');

  const useCases = [
    {
      title: t('useCases.cases.homeOffice.title'),
      description: t('useCases.cases.homeOffice.description'),
    },
    {
      title: t('useCases.cases.kitchen.title'),
      description: t('useCases.cases.kitchen.description'),
    },
    {
      title: t('useCases.cases.family.title'),
      description: t('useCases.cases.family.description'),
    },
    {
      title: t('useCases.cases.nightstand.title'),
      description: t('useCases.cases.nightstand.description'),
    },
  ];

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
            <Trans i18nKey="useCases.heading" ns="home">
              Perfect for <SerifItalic>every</SerifItalic> home
            </Trans>
          </Heading>
          <Text muted className={styles.subtitle}>
            {t('useCases.subtitle')}
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
