import {IntroductionSection} from '../../components/Introduction/Introduction.tsx';
import {BenefitSection} from '../../components/Benefit/Benefit.tsx';
import {ExploreSection} from '../../components/Explore/Explore.tsx';
export const HomePage = () => {
  return (
    <div>
      <IntroductionSection />
      <BenefitSection />
      <ExploreSection />
    </div>
  );
};