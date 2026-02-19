import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../components/layout';
import { SEO } from '../components/SEO';
import {
  ShowcaseHero,
  FeaturesGrid,
  TVShowcase,
  LifestylePreview,
  UseCases,
  Testimonial,
  FinalCTA,
} from '../components/sections';

export function ShowcasePage() {
  const { t } = useTranslation();

  return (
    <PageWrapper footerVariant="full">
      <SEO
        title={t('seo.showcase.title', 'Digital Photo Frame App')}
        description={t('seo.showcase.description', 'PicBox transforms your iPad into a beautiful digital photo frame. Features cinematic Ken Burns effects, smart face detection, and seamless photo library integration.')}
      />
      <ShowcaseHero />
      <FeaturesGrid />
      <TVShowcase />
      <LifestylePreview />
      <UseCases />
      <Testimonial />
      <FinalCTA />
    </PageWrapper>
  );
}
