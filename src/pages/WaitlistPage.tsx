import { PageWrapper } from '../components/layout';
import {
  WaitlistHero,
  ValueProp,
  WaitlistForm,
  FeatureTeaser,
} from '../components/sections';

export function WaitlistPage() {
  return (
    <PageWrapper footerVariant="minimal">
      <WaitlistHero />
      <ValueProp />
      <WaitlistForm />
      <FeatureTeaser />
    </PageWrapper>
  );
}
