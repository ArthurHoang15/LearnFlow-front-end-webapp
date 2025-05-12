import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FlashCardPage.css';
import topicsData from '../../mocks/data/topics.json';
import { fetchWordDetails } from '../../api/dictionary';

interface Word {
  word: string;
  pronunciation?: string;
  definition?: string;
}

interface Topic {
  id: number;
  name: string;
  baseWords: string[];
}



const FlashCardPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  const topics = topicsData.topics as Topic[];
  const currentTopic = topics.find(t => t.name === topic);
  const baseWords = currentTopic?.baseWords || [];

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      const fetchedWords: Word[] = [];
      for (const word of baseWords) {
        const wordDetails = await fetchWordDetails(word);
        fetchedWords.push(wordDetails);
      }
      setWords(fetchedWords);
      setLoading(false);
    };

    setCurrentIndex(0);
    setShowDefinition(false);
    fetchWords();
  }, [topic, baseWords]);

  const handleBack = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    setShowDefinition(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    setShowDefinition(false);
  };

  const handleDone = () => {
    setShowDefinition(true);
  };

  const handleBackToTopics = () => {
    navigate('/learning-hub/vocabulary-boost');
  };

  const currentWord = words[currentIndex];

  return (
    <div className="flashcard-container">
      <button className="back-button" onClick={handleBackToTopics}>← Back</button>
      <h2 className="flashcard-title">Topic: {topic}</h2>
      <div className="flashcard-card">
        {loading ? (
          <p>Loading words...</p>
        ) : currentWord ? (
          <>
            <h3 className="flashcard-word">{currentWord.word}</h3>
            <p className="flashcard-pronunciation">{currentWord.pronunciation} 🎵</p>
            {!showDefinition && (
              <p className="flashcard-action" onClick={handleDone}>
                (click to view definition)
              </p>
            )}
            {showDefinition && (
              <p className="flashcard-definition">{currentWord.definition}</p>
            )}
          </>
        ) : (
          <p>No words available for this topic.</p>
        )}
      </div>
      <div className="flashcard-controls">
        <button className="control-button" onClick={handleBack} disabled={currentIndex === 0 || loading}>
          ← Previous
        </button>
        <button className="control-button" onClick={handleNext} disabled={currentIndex === words.length - 1 || loading}>
          Next →
        </button>
        <button className="control-button done-button" onClick={handleDone} disabled={showDefinition || loading || !currentWord}>
          Done
        </button>
      </div>
    </div>
  );
};

export default FlashCardPage;