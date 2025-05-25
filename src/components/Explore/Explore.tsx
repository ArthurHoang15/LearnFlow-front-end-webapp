import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import Chapters from '../../assets/images/chapters.png';
import Chat from '../../assets/images/Chat.png';
import Mistakes from '../../assets/images/Mistakes.png';
import Profile from '../../assets/images/Profile.png';
import Stories from '../../assets/images/Stories.png';
import Vocab from '../../assets/images/Vocab.png';
import './Explore.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchAndSelectRandomFaqs, Faq } from '../../api/faq.ts';

export const ExploreSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Navigation function using switch
  const handleNavigation = (destination: string) => {
    switch (destination) {
      case 'chapters':
        navigate('/learning-hub/smart-learning');
        break;
      case 'vocabulary':
        navigate('/learning-hub/vocabulary-boost');
        break;
      case 'stories':
        navigate('/learning-hub/stories-flow');
        break;
      case 'mistakes':
        navigate('/learning-hub/mistake-tracker');
        break;
      case 'chat':
        navigate('/chat');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        navigate('/');
    }
  };

  // Fetch and select random FAQs using the utility function
  useEffect(() => {
    const loadFaqs = async () => {
      const selectedFaqs = await fetchAndSelectRandomFaqs(3); // Select 3 FAQs
      setFaqs(selectedFaqs);
    };

    loadFaqs();
  }, []);

  // Intersection Observer for fade-in effect
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
    <section ref={sectionRef} className="explore-section">
      <h2 className="explore-heading">Explore LearnFlow</h2>
      <p className="explore-subheading">
        Discover all the tools you need to boost your English — from smart flashcards and interactive quizzes to daily goals, pronunciation practice, and social learning features.
      </p>
      <div className="explore-grid">
        {/* Row 1 */}
        <div className="explore-card">
          <div className="explore-image" style={{ backgroundImage: `url(${Chapters})` }} />
          <h3 className="explore-title">Smart Learning</h3>
          <p className="explore-description">
            Learn English Step-by-Step. Follow structured chapters with interactive lessons like fill-in-the-blank, drag-and-drop, and instant feedback to build grammar and sentence skills.
          </p>
          <button className="explore-button" onClick={() => handleNavigation('chapters')}>Learn More</button>
        </div>
        <div className="explore-card">
          <div className="explore-image" style={{ backgroundImage: `url(${Vocab})` }} />
          <h3 className="explore-title">Vocabulary Boost</h3>
          <p className="explore-description">
            Master Words with Flashcards. Explore vocabulary by topic with searchable lists. Flip flashcards to see phonetics, examples, and translations. Hear native pronunciation for better retention.
          </p>
          <button className="explore-button" onClick={() => handleNavigation('vocabulary')}>View All</button>
        </div>
        <div className="explore-card">
          <div className="explore-image" style={{ backgroundImage: `url(${Stories})` }} />
          <h3 className="explore-title">StoriesFlow</h3>
          <p className="explore-description">
            Read & Learn from Real Stories. Browse stories by topic or word type. Tap any word to get meaning, phonetics (US/UK), and word type—all in English. Perfect for immersive reading.
          </p>
          <button className="explore-button" onClick={() => handleNavigation('stories')}>Read a Story</button>
        </div>
        {/* Row 2 */}
        <div className="explore-card">
          <div className="explore-image" style={{ backgroundImage: `url(${Mistakes})` }} />
          <h3 className="explore-title">Mistake Tracker</h3>
          <p className="explore-description">
            Review & Fix Your Errors. Automatically saves your mistakes from lessons. Get explanations, mark as reviewed or not, and turn errors into progress.
          </p>
          <button className="explore-button" onClick={() => handleNavigation('mistakes')}>Check Mistakes</button>
        </div>
        <div className="explore-card">
          <div className="explore-image" style={{ backgroundImage: `url(${Chat})` }} />
          <h3 className="explore-title">LearnFlow Chat</h3>
          <p className="explore-description">
            Connect & Communicate. Message friends, exchange tips, and send feedback to the LearnFlow team. Learning is better when it's social.
          </p>
          <button className="explore-button" onClick={() => handleNavigation('chat')}>Join the Conversation</button>
        </div>
        <div className="explore-card">
          <div className="explore-image" style={{ backgroundImage: `url(${Profile})` }} />
          <h3 className="explore-title">Your Profile</h3>
          <p className="explore-description">
            Track Your Journey & Achievements. Update your avatar, view personal stats, and celebrate your learning achievements all in one place.
          </p>
          <button className="explore-button" onClick={() => handleNavigation('profile')}>View Profile</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <div className="faq-heading-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subheading">
            Still have any questions? Contact our Team via HUH@HUHHUH.com
          </p>
        </div>
        <div className="faq-list">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <Accordion key={index} className="faq-accordion">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className="faq-question">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Typography>Loading FAQs...</Typography>
          )}
        </div>
      </div>
    </section>
  );
};

