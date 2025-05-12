import './AboutUs.css';
import Logo2 from '../../assets/images/Logo2.png';
import Icon1 from '../../assets/images/Icon1.png';
import Icon2 from '../../assets/images/Icon2.png';
import Icon3 from '../../assets/images/Icon3.png';
import Icon4 from '../../assets/images/Icon4.png';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/login');
  };

  return (
    <div className="aboutus-root">
      {/* About LearnFlow Section */}
      <div className="aboutus-section-row">
        <div className="aboutus-section-title">About LearnFlow</div>
        <div className="aboutus-section-desc">
          Welcome to LearnFlow - the interactive English learning platform designed to make your journey smarter, more engaging, and truly personalized.<br/>
          We combine guided lessons, vocabulary flashcards, real-world stories, and mistake review tools into one seamless experience to help you build lasting language skills. With features tailored for progress tracking and social learning, LearnFlow empowers you to grow your English every day - at your own pace, in your own style.
        </div>
      </div>
      <div className="aboutus-divider" />

      {/* Our Goals Section */}
      <div className="aboutus-section-row goals">
        <div className="aboutus-section-title">Our Goals</div>
        <div className="aboutus-section-desc">
          At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.<br/>
          Through our carefully crafted courses, we aim to
        </div>
      </div>
      <div className="aboutus-goals-grid aboutus-goals-spacing">
        <div className="aboutus-goal-card">
          <img src={Icon4} alt="Deliver Practical Language Skills" className="aboutus-goal-icon" />
          <h3>Deliver Practical Language Skills</h3>
          <p>We focus on helping learners apply English in real-life situations — from everyday conversations to academic and professional contexts. Our lessons are interactive, relevant, and designed for immediate use.</p>
        </div>
        <div className="aboutus-goal-card">
          <img src={Icon3} alt="Encourage Consistent Progress" className="aboutus-goal-icon" />
          <h3>Encourage Consistent Progress</h3>
          <p>Through daily goals, smart feedback, and progress tracking, we motivate learners to study regularly and celebrate every milestone on their language journey.</p>
        </div>
        <div className="aboutus-goal-card">
          <img src={Icon1} alt="Support Personalized Learning" className="aboutus-goal-icon" />
          <h3>Support Personalized Learning</h3>
          <p>We believe every learner is unique. That's why LearnFlow offers flexible paths, from vocabulary flashcards to grammar lessons and story-based learning, all tailored to your level and pace.</p>
        </div>
        <div className="aboutus-goal-card">
          <img src={Icon2} alt="Build a Motivating Community" className="aboutus-goal-icon" />
          <h3>Build a Motivating Community</h3>
          <p>Learning is more fun when shared. With chat features, friend lists, and leaderboards, LearnFlow fosters a supportive environment where learners can connect, compete, and grow together.</p>
        </div>
      </div>

      {/* Together Section */}
      <div className="aboutus-together-card" style={{ '--aboutus-together-bg': `url(${Logo2})` } as React.CSSProperties}>
        <div className="aboutus-together-row">
          <div className="aboutus-together-left">
            <h2><span className="aboutus-highlight">Together</span>, let's transform the way we learn English.</h2>
            <p className="aboutus-together-desc">
              Join us on this exciting journey and unlock your full language potential with LearnFlow.
            </p>
          </div>
          <button className="aboutus-join-btn" onClick={handleJoinNow}>Join Now</button>
        </div>
      </div>
    </div>
  );
}; 