import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../components/layout';
import { SEO } from '../components/SEO';
import {
  WaitlistHero,
  ValueProp,
  WaitlistForm,
  FeatureTeaser,
  LifestylePreview,
} from '../components/sections';

export function WaitlistPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper footerVariant="minimal">
      <SEO
        title={t('seo.waitlist.title', 'Join the Waitlist')}
        description={t('seo.waitlist.description', 'Be the first to know when PicBox launches. Transform your iPad into a stunning digital photo frame with cinematic Ken Burns effects and smart face detection.')}
      />
      <WaitlistHero />
      <ValueProp />
      <LifestylePreview variant="waitlist" />
      <WaitlistForm />
      <FeatureTeaser />
    </PageWrapper>
  );
}
