import { PageWrapper } from '../components/layout';
import {
  ShowcaseHero,
  FeaturesGrid,
  UseCases,
  Testimonial,
  FinalCTA,
} from '../components/sections';

export function ShowcasePage() {
  return (
    <PageWrapper footerVariant="full">
      <ShowcaseHero />
      <FeaturesGrid />
      <UseCases />
      <Testimonial />
      <FinalCTA />
    </PageWrapper>
  );
}
