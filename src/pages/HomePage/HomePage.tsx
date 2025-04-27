import {IntroductionSection} from '../../components/IntroductionSection/IntroductionSection.tsx';
import {BenefitSection} from '../../components/BenefitSection/BenefitSection.tsx';
import {ExploreSection} from '../../components/ExploreSection/ExploreSection.tsx';
export const HomePage = () => {
  return (
    <div>
      <IntroductionSection />
      <BenefitSection />
      <ExploreSection />
    </div>
  );
};