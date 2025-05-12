import { AboutUs } from '../../components/AboutUs';
import { useEffect } from 'react';

export const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutus-page-container">
      <AboutUs />
    </div>
  );
}; 