import { PageWrapper } from '../components/layout';
import {
  ShowcaseHero,
  FeaturesGrid,
  LifestylePreview,
  UseCases,
  Testimonial,
  FinalCTA,
} from '../components/sections';

export function ShowcasePage() {
  return (
    <PageWrapper footerVariant="full">
      <ShowcaseHero />
      <FeaturesGrid />
      <LifestylePreview />
      <UseCases />
      <Testimonial />
      <FinalCTA />
    </PageWrapper>
  );
}
