import './Introduction.css';
import LearnFlow from '../../assets/images/LearnFlow.png';
import Wave from '../../assets/images/Wave.png';

export const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-text">
        <div className="h1-box fade-in">
          <h1>
            <img src={Wave} alt="Wave" className="wave-icon" />
            <span className="highlight">Unlock</span>Your English Potential
          </h1>
        </div>
        <h2 className="fade-in">With Engaging Lessons, Games, and Social Learning Tools.</h2>
        <p className="typing">
          <span className="typing-text">Join LearnFlow and Learn English the FUN, Smart Way.</span>
        </p>
      </div>
      <div className="introduction-image fade-in" style={{ backgroundImage: `url(${LearnFlow})` }} />
    </section>
  );
};