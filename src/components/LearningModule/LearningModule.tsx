import React, { useState, useEffect } from 'react';
import './LearningModule.css';

interface LearningModuleProps {
  header: string;
  subheader: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

export const LearningModule: React.FC<LearningModuleProps> = ({ header, subheader, description, buttonText, imageUrl }) => {
  const [moduleTitle, setModuleTitle] = useState<string>('');
  const [moduleSubheader, setModuleSubheader] = useState<string>('');
  const [moduleDescription, setModuleDescription] = useState<string>('');
  const [actionButtonText, setActionButtonText] = useState<string>('');
  const [imageSource, setImageSource] = useState<string>('');

  useEffect(() => {
    setModuleTitle(header);
    setModuleSubheader(subheader);
    setModuleDescription(description);
    setActionButtonText(buttonText);
    setImageSource(imageUrl);
  }, [header, subheader, description, buttonText, imageUrl]);

  return (
    <div className="container">
      <div className="header-section">
        <div>
          <h2 className="title">{moduleTitle}</h2>
          <h3 className="subheader">{moduleSubheader}</h3>
          <p className="description">{moduleDescription}</p>
        </div>
        <button className="action-button">{actionButtonText}</button>
      </div>
      <div className="image-section" style={{ backgroundImage: `url(${imageSource})` }} />
    </div>
  );
};