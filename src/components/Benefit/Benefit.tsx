import { useEffect, useRef } from 'react';
import './Benefit.css';
export const BenefitSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="benefit-section">
      <h2 className="benefit-heading">Benefits</h2>
      <p className="benefit-subheading">
        "LearnFlow gives you a complete English learning experience — fun, effective, and inspiring. Take one step forward every day!"
      </p>
      <div className="benefit-grid">
        <div className="benefit-card">
          <span className="benefit-number">01</span>
          <h3 className="benefit-title">Unlock Your English Skills</h3>
          <p className="benefit-description">
            with Interactive Learning, Daily Challenges & Social Progress Tracking. Join LearnFlow and Master Language with Joy.
          </p>
        </div>
        <div className="benefit-card">
          <span className="benefit-number">02</span>
          <h3 className="benefit-title">Empower Your English Journey</h3>
          <p className="benefit-description">
            with Vocabulary Games, Pronunciation Practice, and Social Learning Tools. Experience Learning Like Never Before on LearnFlow.
          </p>
        </div>
        <div className="benefit-card">
          <span className="benefit-number">03</span>
          <h3 className="benefit-title">Learn Smarter, Not Harder</h3>
          <p className="benefit-description">
            with Flashcards, Quizzes, Storytelling & Personalized Progress. Step into the Future of English Learning with LearnFlow.
          </p>
        </div>
        <div className="benefit-row-two">
          <div className="benefit-card">
            <span className="benefit-number">04</span>
            <h3 className="benefit-title">Unlock Fun & Fluent English</h3>
            <p className="benefit-description">
              through Mini Games, Daily Goals. Join LearnFlow and Level Up Every Day.
            </p>
          </div>
          <div className="benefit-card">
            <span className="benefit-number">05</span>
            <h3 className="benefit-title">Level Up Your Language Skills</h3>
            <p className="benefit-description">
              with Adaptive Quizzes, Smart Feedback, and a Friendly Learning Community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


  