import React, { useState } from 'react';
import './Vocab.css';
import featureHeadersData from '../../mocks/data/feature-headers.json';
import { useNavigate } from 'react-router-dom';

interface FeatureHeader {
  id: number;
  headerName: string;
  headerDescription: string;
}

interface FeatureHeadersData {
  featureHeaders: FeatureHeader[];
}

const featureHeaders = featureHeadersData as FeatureHeadersData;

const Vocab = () => {
  const navigate = useNavigate();
  const vocabDataArray = featureHeaders.featureHeaders.map(header => {
    if (header.id === 3) return header;
    return null;
  }).filter(item => item !== null) as FeatureHeader[];

  const vocabData = vocabDataArray[0];

  const allTopics = [
    'Animals',
    'Fruits and Vegetables',
    'Weather and Seasons',
    'Daily Activities',
    'Technology and Gadgets',
    'Food and Drinks',
    'Clothing and Fashion',
    'Hobbies and Sports',
    'Jobs and Professions',
    'Health and Body',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(allTopics);

  const handleSearch = () => {
    const searchLower = searchTerm.toLowerCase();
    const filtered = allTopics.filter(topic =>
      topic.toLowerCase().includes(searchLower)
    );
    setFilteredTopics(filtered);
  };

  if (!vocabData) {
    return <div>Error: Vocabulary Boost data not found.</div>;
  }

  return (
    <div className="vocab-container">
      <div className="vocab-header">
        <div>
          <h1 className="vocab-title">Vocabulary Boost</h1>
        </div>
        <div>
          <p className="vocab-description">
            {vocabData.headerDescription.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="vocab-topics">
        <div className="topics-header">
          <h2 className="topics-title">List of Topics</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>Search</button>
            <span className="clear-icon" onClick={() => {
              setSearchTerm('');
              setFilteredTopics(allTopics);
            }}>×</span>
          </div>
        </div>
        <div className="topics-grid">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div key={index} className="topic-card" onClick={() => navigate(`/flashcard/${topic}`)}>
                <h3 className="topic-name">{topic}</h3>
              </div>
            ))
          ) : (
            <div className="no-topics-message">No topics found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocab;