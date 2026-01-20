import { PageWrapper } from '../components/layout';
import {
  WaitlistHero,
  ValueProp,
  WaitlistForm,
  FeatureTeaser,
  LifestylePreview,
} from '../components/sections';

export function WaitlistPage() {
  return (
    <PageWrapper footerVariant="minimal">
      <WaitlistHero />
      <ValueProp />
      <LifestylePreview variant="waitlist" />
      <WaitlistForm />
      <FeatureTeaser />
    </PageWrapper>
  );
}
