import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../components/layout';
import styles from './PrivacyPage.module.css';

export function PrivacyPage() {
  const { t } = useTranslation('privacy');

  return (
    <PageWrapper footerVariant="minimal">
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t('page.title')}</h1>
          <p className={styles.lastUpdated}>{t('page.lastUpdated')}</p>
        </header>

        <section className={styles.section}>
          <p className={styles.intro}>
            {t('page.intro')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.dataAccess.title')}</h2>

          <h3 className={styles.subheading}>{t('sections.dataAccess.photoLibrary.title')}</h3>
          <p>
            {t('sections.dataAccess.photoLibrary.content')}
          </p>

          <h3 className={styles.subheading}>{t('sections.dataAccess.location.title')}</h3>
          <p>
            {t('sections.dataAccess.location.content')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.dataCollect.title')}</h2>
          <p>
            {t('sections.dataCollect.content')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.thirdParty.title')}</h2>

          <h3 className={styles.subheading}>{t('sections.thirdParty.weatherKit.title')}</h3>
          <p>
            {t('sections.thirdParty.weatherKit.content')}
          </p>

          <h3 className={styles.subheading}>{t('sections.thirdParty.appStore.title')}</h3>
          <p>
            {t('sections.thirdParty.appStore.content')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.dataStorage.title')}</h2>
          <p>
            {t('sections.dataStorage.content')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.children.title')}</h2>
          <p>
            {t('sections.children.content')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.changes.title')}</h2>
          <p>
            {t('sections.changes.content')}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t('sections.contact.title')}</h2>
          <p>
            {t('sections.contact.content')}{' '}
            <a href="mailto:support@picbox.app" className={styles.link}>
              {t('sections.contact.email')}
            </a>.
          </p>
        </section>
      </article>
    </PageWrapper>
  );
}
