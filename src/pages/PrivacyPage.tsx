import { PageWrapper } from '../components/layout';
import styles from './PrivacyPage.module.css';

export function PrivacyPage() {
  return (
    <PageWrapper footerVariant="minimal">
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: January 21, 2025</p>
        </header>

        <section className={styles.section}>
          <p className={styles.intro}>
            PicBox is designed with your privacy in mind. We believe your photos and personal
            data belong to you, and we've built our app to keep it that way.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Data We Access</h2>

          <h3 className={styles.subheading}>Photo Library</h3>
          <p>
            PicBox accesses your photo library to display your photos as slideshows. Your photos
            are accessed directly on your device and are <strong>never uploaded, transmitted, or
            stored on any external servers</strong>. All photo processing, including face detection
            for smart cropping, happens entirely on your device.
          </p>

          <h3 className={styles.subheading}>Location</h3>
          <p>
            If you enable the weather overlay feature, PicBox requests access to your device's
            location to display current weather conditions. Your location data is sent only to
            Apple's WeatherKit service to retrieve weather information. We do not store, log,
            or transmit your location to any other service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Data We Collect</h2>
          <p>
            <strong>We do not collect any personal data.</strong> PicBox does not have user accounts,
            does not require registration, and does not collect analytics or usage data. Your photos,
            settings, and preferences are stored locally on your device and are never transmitted
            to us or any third party.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Third-Party Services</h2>

          <h3 className={styles.subheading}>Apple WeatherKit</h3>
          <p>
            When the weather overlay is enabled, PicBox uses Apple's WeatherKit API to fetch
            weather data. This requires sending your approximate location to Apple. Apple's
            handling of this data is governed by{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Apple's Privacy Policy
            </a>.
          </p>

          <h3 className={styles.subheading}>App Store</h3>
          <p>
            PicBox is distributed through the Apple App Store. Apple may collect data related
            to app downloads and purchases according to their privacy policy. We receive only
            anonymized, aggregated analytics from Apple about app usage.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Data Storage</h2>
          <p>
            All app settings and preferences (such as slideshow timing, transition styles, and
            album selections) are stored locally on your device using Apple's standard data
            storage mechanisms. This data is included in your iCloud backup if you have iCloud
            Backup enabled, but is never transmitted to us.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Children's Privacy</h2>
          <p>
            PicBox does not knowingly collect any information from children. The app simply
            displays photos already on your device and does not collect, store, or transmit
            any personal information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected
            on this page with an updated revision date. We encourage you to review this policy
            periodically.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or PicBox's privacy practices,
            please contact us at{' '}
            <a href="mailto:support@picbox.app" className={styles.link}>
              support@picbox.app
            </a>.
          </p>
        </section>
      </article>
    </PageWrapper>
  );
}
