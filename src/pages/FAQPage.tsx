import { useTranslation } from 'react-i18next';
import { PageWrapper } from "../components/layout";
import { FAQItem } from "../components/ui";
import styles from "./FAQPage.module.css";

const faqData = {
  gettingStarted: [
    {
      question: "How do I start using PicBox?",
      answer:
        "Download PicBox from the App Store, grant access to your photo library, select an album or photos to display, and tap play. Your iPad instantly becomes a beautiful digital photo frame.",
    },
    {
      question: "What's the best way to set up my iPad as a photo frame?",
      answer:
        "Use a stand that holds your iPad at a comfortable viewing angle. Enable Guided Access in Settings to prevent accidental touches, and keep your iPad plugged in for continuous display.",
    },
    {
      question: "How do I add photos to PicBox?",
      answer:
        "PicBox displays photos directly from your Photos library. Simply organize your favorite photos into albums in the Photos app, then select those albums in PicBox to include them in your slideshow.",
    },
  ],
  automation: [
    {
      question: "How does Auto-Start work?",
      answer:
        "When enabled, if you have PicBox open it automatically begins your last slideshow when you connect your iPad to power. Perfect for a hands-free photo frame experience.",
    },
    {
      question: "Can I use Shortcuts to automate PicBox?",
      answer:
        "Yes! PicBox integrates with Apple Shortcuts, allowing you to start slideshows, switch albums, or control playback through custom automations and Siri voice commands.",
    },
    {
      question: "Can I schedule when PicBox runs?",
      answer:
        "Use the Shortcuts app to create time-based automations. You can schedule PicBox to start in the morning and stop at night, or run only on specific days.",
    },
  ],
  privacy: [
    {
      question: "Do my photos leave my device?",
      answer:
        "Never. Your photos stay entirely on your iPad. PicBox processes everything locally and never uploads, transmits, or stores your photos on any external servers.",
    },
    {
      question: "Is face detection done on-device?",
      answer:
        "Yes, all face detection processing happens directly on your iPad using Apple's on-device Vision framework. No facial data is ever sent anywhere.",
    },
    {
      question: "What data does the weather feature use?",
      answer:
        "The weather overlay uses your device's location to fetch weather data from Apple's WeatherKit. Your location is sent only to Apple for this purpose and is not stored or shared.",
    },
  ],
  compatibility: [
    {
      question: "Does PicBox work on iPhone?",
      answer:
        "Yes, PicBox works on iPhone. However, for the best photo frame experience, we recommend using an iPad. The larger screen makes iPads ideal for displaying your memories.",
    },
    {
      question: "Which iPad models are supported?",
      answer:
        "PicBox supports all iPads running iPadOS 17 or later. This includes iPad Pro, iPad Air, iPad mini, and standard iPad models from recent years.",
    },
    {
      question: "Does it work on older iPads?",
      answer:
        "If your iPad runs iPadOS 17, PicBox will work. Older iPads that cannot update to iPadOS 17 are not supported due to required system features.",
    },
  ],
  features: [
    {
      question: "How does the Ken Burns effect work?",
      answer:
        "The Ken Burns effect adds subtle panning and zooming to your photos, creating gentle motion that brings static images to life.",
    },
    {
      question: "How does face detection keep faces in frame?",
      answer:
        "PicBox detects faces in your photos and intelligently crops and pans to keep them centered during transitions and the Ken Burns effect. This ensures loved ones are never cut off.",
    },
    {
      question: "How does Night Mode work?",
      answer:
        "Night Mode dims the display and adjusts colors to reduce eye strain and avoid disrupting your sleep. You can toggle it on manually whenever you want a softer, warmer display.",
    },
  ],
  performance: [
    {
      question: "Does PicBox affect my iPad's battery health?",
      answer:
        "Running PicBox while plugged in won't harm your battery. Modern iPads have built-in safeguards. For extended use, Apple's battery management keeps your iPad healthy.",
    },
    {
      question: "Can I use PicBox on battery power?",
      answer:
        "Yes, though for best results we recommend plugging in. On battery, PicBox optimizes performance to extend runtime, but continuous display will drain the battery faster.",
    },
    {
      question: "Does the screen stay on continuously?",
      answer:
        "PicBox prevents your iPad from sleeping while the slideshow is active. The display stays on until you stop the slideshow or exit the app.",
    },
  ],
  purchase: [
    {
      question: "Is there a subscription?",
      answer:
        "No subscriptions. PicBox is a one-time purchase that gives you full access to all features forever, including future updates.",
    },
    {
      question: "What's included in the purchase?",
      answer:
        "Everything. All features, all transitions, all customization options, and all future updates are included in the single purchase price.",
    },
    {
      question: "How do I get support?",
      answer:
        "Email us at support@picbox.app. We're happy to help with setup, troubleshooting, or feature requests.",
    },
  ],
  photos: [
    {
      question: "How many photos can PicBox display?",
      answer:
        "There's no limit. PicBox can cycle through your entire photo library if you wish. For the best experience, we recommend curating albums with your favorite memories.",
    },
    {
      question: "Can I create multiple slideshows?",
      answer:
        "Yes, you can save different configurations with different albums, transition styles, and timing settings. Switch between them easily from the main screen.",
    },
    {
      question: "What photo formats are supported?",
      answer:
        "PicBox supports all formats in your Photos library including JPEG, HEIC, PNG, and Live Photos. RAW photos are also supported if they appear in your library.",
    },
  ],
};

const troubleshooting = [
  {
    question: "PicBox won't start automatically",
    answer:
      "Ensure Auto-Start is enabled in PicBox settings. Check that Shortcuts automation permissions are granted in Settings > Shortcuts > Automation. If using Guided Access, you may need to configure it to allow the automation.",
  },
  {
    question: "Photos aren't showing up",
    answer:
      "Verify PicBox has permission to access your photo library in Settings > Privacy > Photos. Make sure the albums you selected actually contain photos. Try selecting a different album to test.",
  },
  {
    question: "Weather isn't displaying",
    answer:
      "Check that location services are enabled for PicBox in Settings > Privacy > Location Services. The weather feature requires an internet connection to fetch current conditions.",
  },
  {
    question: "Screen keeps turning off",
    answer:
      "Make sure the slideshow is actively playing (not paused). Check Settings > Display & Brightness > Auto-Lock and consider using Guided Access for a dedicated photo frame setup.",
  },
];

const tips = [
  {
    question: "Best stand/mount recommendations",
    answer:
      "Look for stands with adjustable angles and sturdy bases. For wall mounting, consider a low-profile mount with easy access to charging. Magnetic stands work great for quick removal when you need your iPad.",
  },
  {
    question: "Optimal photo album organization",
    answer:
      "Create dedicated albums in Photos for your frame. Curate 50-200 of your best shots for variety without repetition. Consider seasonal albums you can swap throughout the year.",
  },
  {
    question: "Automating with Shortcuts",
    answer:
      "Set up automations to start PicBox when plugging in, stop at bedtime, or switch albums on different days. Combine with Focus modes for a fully automated experience.",
  },
  {
    question: "Getting the most out of Night Mode",
    answer:
      "Night Mode works best when your iPad is in a bedroom or living space. Enable it in the evening to reduce blue light exposure. Adjust the dimming level to your preference for comfortable viewing.",
  },
];

export function FAQPage() {
  const { t } = useTranslation('faq');

  return (
    <PageWrapper footerVariant="minimal">
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t('page.title')}</h1>
          <p className={styles.intro}>
            {t('page.intro')}
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.gettingStarted')}</h2>
          <div className={styles.faqList}>
            {faqData.gettingStarted.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.automation')}</h2>
          <div className={styles.faqList}>
            {faqData.automation.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.privacy')}</h2>
          <div className={styles.faqList}>
            {faqData.privacy.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.compatibility')}</h2>
          <div className={styles.faqList}>
            {faqData.compatibility.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.features')}</h2>
          <div className={styles.faqList}>
            {faqData.features.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.performance')}</h2>
          <div className={styles.faqList}>
            {faqData.performance.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.purchase')}</h2>
          <div className={styles.faqList}>
            {faqData.purchase.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>{t('sections.photos')}</h2>
          <div className={styles.faqList}>
            {faqData.photos.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.specialSection}`}>
          <h2 className={styles.categoryTitle}>{t('sections.troubleshooting')}</h2>
          <p className={styles.sectionIntro}>
            Having issues? Check these common solutions.
          </p>
          <div className={styles.faqList}>
            {troubleshooting.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.specialSection}`}>
          <h2 className={styles.categoryTitle}>{t('sections.tips')}</h2>
          <p className={styles.sectionIntro}>
            Get more out of your PicBox experience.
          </p>
          <div className={styles.faqList}>
            {tips.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <section className={styles.contact}>
          <h2 className={styles.categoryTitle}>{t('sections.stillQuestions')}</h2>
          <p>
            {t('contact.text')}{" "}
            <a href="mailto:support@picbox.app" className={styles.link}>
              {t('contact.email')}
            </a>.
          </p>
        </section>
      </article>
    </PageWrapper>
  );
}
