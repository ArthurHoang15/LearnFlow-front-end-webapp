   import Chapters from '../../assets/images/chapters.png';
   import Chat from '../../assets/images/Chat.png';
   import Mistakes from '../../assets/images/Mistakes.png';
   import Profile from '../../assets/images/Profile.png';
   import Stories from '../../assets/images/Stories.png';
   import Vocab from '../../assets/images/Vocab.png';
   import './Explore.css';
   import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
   import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

   export const ExploreSection = () => {
     return (
       <section className="explore-section">
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
             <button className="explore-button">Learn More</button>
           </div>
           <div className="explore-card">
             <div className="explore-image" style={{ backgroundImage: `url(${Vocab})` }} />
             <h3 className="explore-title">Vocabulary Boost</h3>
             <p className="explore-description">
               Master Words with Flashcards. Explore vocabulary by topic with searchable lists. Flip flashcards to see phonetics, examples, and translations. Hear native pronunciation for better retention.
             </p>
             <button className="explore-button">View All</button>
           </div>
           <div className="explore-card">
             <div className="explore-image" style={{ backgroundImage: `url(${Stories})` }} />
             <h3 className="explore-title">StoriesFlow</h3>
             <p className="explore-description">
               Read & Learn from Real Stories. Browse stories by topic or word type. Tap any word to get meaning, phonetics (US/UK), and word type—all in English. Perfect for immersive reading.
             </p>
             <button className="explore-button">Read a Story</button>
           </div>
           {/* Row 2 */}
           <div className="explore-card">
             <div className="explore-image" style={{ backgroundImage: `url(${Mistakes})` }} />
             <h3 className="explore-title">Mistake Tracker</h3>
             <p className="explore-description">
               Review & Fix Your Errors. Automatically saves your mistakes from lessons. Get explanations, mark as reviewed or not, and turn errors into progress.
             </p>
             <button className="explore-button">Check Mistakes</button>
           </div>
           <div className="explore-card">
             <div className="explore-image" style={{ backgroundImage: `url(${Chat})` }} />
             <h3 className="explore-title">LearnFlow Chat</h3>
             <p className="explore-description">
               Connect & Communicate. Message friends, exchange tips, and send feedback to the LearnFlow team. Learning is better when it’s social.
             </p>
             <button className="explore-button">Join the Conversation</button>
           </div>
           <div className="explore-card">
             <div className="explore-image" style={{ backgroundImage: `url(${Profile})` }} />
             <h3 className="explore-title">Your Profile</h3>
             <p className="explore-description">
               Track Your Journey & Achievements. Update your avatar, view personal stats, and celebrate your learning achievements all in one place.
             </p>
             <button className="explore-button">View Profile</button>
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
             <Accordion className="faq-accordion">
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 <Typography className="faq-question">Question?</Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography className="faq-answer">Answer</Typography>
               </AccordionDetails>
             </Accordion>
             <Accordion className="faq-accordion">
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 <Typography className="faq-question">Question?</Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography className="faq-answer">?</Typography>
               </AccordionDetails>
             </Accordion>
             <Accordion className="faq-accordion">
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 <Typography className="faq-question">Question?</Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography className="faq-answer">?</Typography>
               </AccordionDetails>
             </Accordion>
           </div>
         </div>
       </section>
     );
   };

   
