import React from 'react';
import { Typography, Avatar } from '@mui/material';
import './ChapterCard.css';

interface ChapterCardProps {
  title: string;
  subtitle: string;
  locked: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ title, subtitle, locked, isSelected, onSelect }) => {
  return (
    <div className={`chapter-card ${isSelected ? 'selected' : ''} ${locked ? 'locked' : ''}`}
    onClick={locked ? undefined : onSelect}>
      <Typography 
        variant="h5" 
        className="chapter-title"
        sx={{ fontFamily: '"Poppins", sans-serif', 
          fontWeight: '600', 
          fontSize: '1.5rem' 
        }}>
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        className="chapter-subtitle"
        sx={{ fontWeight: '500', 
          fontSize: '1.3rem'
        }}>
        {subtitle}
      </Typography>
      {locked && (
        <Avatar className="lock-icon" sx={{ width: 30, height: 30 }}>
          🔒
        </Avatar>
      )}
    </div>
  );
};