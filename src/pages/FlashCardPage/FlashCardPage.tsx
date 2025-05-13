import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FlashCardPage.css';
import topicsData from '../../mocks/data/topics.json';
import { fetchWordDetails } from '../../api/dictionary';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

interface Word {
  word: string;
  pronunciation?: string;
  definition?: string;
  vietnameseTranslation?: string;
  imageUrl?: string;
  showDefinition?: boolean;
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false); 
  const { width, height } = useWindowSize(); 
  const topics = topicsData.topics as Topic[];
  const currentTopic = topics.find(t => t.name === topic);
  const baseWords = currentTopic?.baseWords || [];

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      const fetchedWords: Word[] = [];
      for (const word of baseWords) {
        const wordDetails = await fetchWordDetails(word);
        const enhancedWord = {
          ...wordDetails,
          vietnameseTranslation: `[Bản dịch tiếng Việt cho từ "${word}"]`,
          imageUrl: '/api/placeholder/200/150',
          showDefinition: false
        };
        fetchedWords.push(enhancedWord);
      }
      setWords(fetchedWords);
      setLoading(false);
    };

    setCurrentIndex(0);
    setIsFlipped(false);
    setIsComplete(false); // RESET on topic change
    fetchWords();
  }, [topic, baseWords]);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setIsComplete(false); // Tắt thông báo khi quay lại
    }
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);

      const newWords = [...words];
      newWords[currentIndex + 1] = {
        ...newWords[currentIndex + 1],
        showDefinition: false
      };
      setWords(newWords);
    }

    if (currentIndex === words.length - 1 && isFlipped) {
      setIsComplete(true); 
    }
  };

  const handleFlip = () => {
  setIsFlipped(true);
  if (currentIndex === words.length - 1) {
    setIsComplete(true);
  }
};

  const handleShowDefinition = () => {
    const newWords = [...words];
    newWords[currentIndex] = {
      ...newWords[currentIndex],
      showDefinition: true
    };
    setWords(newWords);
  };

  const handleBackToTopics = () => {
    navigate('/learning-hub/vocabulary-boost');
  };

  const currentWord = words[currentIndex];

  return (
    <div className="flashcard-container">
      <button className="back-button" onClick={handleBackToTopics}>← Back</button>
      <h2 className="flashcard-title">Topic: {topic}</h2>

      {isComplete && <Confetti width={width} height={height} />} {/* SHOW CONFETTI */}
      {isComplete && (
      <>
        <Confetti width={width} height={height} />
        <div className="completion-message">
        🎉 <strong>Congrats! You have completed this topic!</strong> 🎉
        </div>
      </>
      )}

      <div className="flashcard-flip-container">
        <div className={`flashcard-flipper ${isFlipped ? 'flipped' : ''}`}>
          <div className="flashcard-front">
            {loading ? (
              <p>Loading words...</p>
            ) : currentWord ? (
              <>
                <h3 className="flashcard-word">{currentWord.word}</h3>
                <p className="flashcard-pronunciation">{currentWord.pronunciation} 🎵</p>

                {currentWord.showDefinition ? (
                  <p className="flashcard-definition">{currentWord.definition}</p>
                ) : (
                  <p className="flashcard-action" onClick={handleShowDefinition}>
                    (click to view English definition)
                  </p>
                )}
              </>
            ) : (
              <p>No words available for this topic.</p>
            )}
          </div>

          <div className="flashcard-back">
            {loading ? (
              <p>Loading words...</p>
            ) : currentWord ? (
              <>
                <h3 className="flashcard-word">{currentWord.word}</h3>
                <img 
                  src={currentWord.imageUrl} 
                  alt={`Illustration for ${currentWord.word}`} 
                  className="flashcard-image"
                />
                <p className="flashcard-vietnamese">{currentWord.vietnameseTranslation}</p>
              </>
            ) : (
              <p>No words available for this topic.</p>
            )}
          </div>
        </div>
      </div>

      <div className="flashcard-controls">
        <button 
          className="control-button" 
          onClick={handleBack} 
          disabled={currentIndex === 0 || loading}
        >
          ← Previous
        </button>
        <button 
          className="control-button" 
          onClick={handleNext} 
          disabled={currentIndex === words.length - 1 || loading || !isFlipped}
        > 
          Next →
        </button>
        <button 
          className="control-button done-button" 
          onClick={handleFlip} 
          disabled={isFlipped || loading || !currentWord}
        >
          See Translation
        </button>
      </div>
    </div>
  );
};

export default FlashCardPage;
