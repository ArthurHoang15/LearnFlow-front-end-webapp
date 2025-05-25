import React from 'react';
import { Box, Typography } from '@mui/material';
import './StoryCard.css';

interface StoryCardProps {
  id: number;
  title: string;
  topic: string;
  summary: string;
  uploadDate: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({ id, title, topic, summary, uploadDate }) => {
  return (
    <Box className="story-card">
      <Typography variant="h4" className="story-number">
        {String(id).padStart(2, '0')}
      </Typography>
      <Box className="story-content">
        <Typography variant="h5" className="story-title">
          {title}
        </Typography>
        <Typography variant="body2" className="story-topic">
          Topic: {topic}
        </Typography>
        <Typography variant="body2" className="story-summary">
          {summary}
        </Typography>
        <Typography variant="caption" className="story-upload-date">
          Upload date: {uploadDate}
        </Typography>
      </Box>
    </Box>
  );
};