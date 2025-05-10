import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import './ChapterCard.css';

interface ChapterCardProps {
  title: string;
  subtitle: string;
  locked: boolean;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ title, subtitle, locked }) => {
  return (
    <Box className="chapter-card">
      <Typography variant="h5" className="chapter-title">
        {title}
      </Typography>
      <Typography variant="body2" className="chapter-subtitle">
        {subtitle}
      </Typography>
      {locked && (
        <Avatar className="lock-icon" sx={{ width: 24, height: 24, bgcolor: 'grey.500' }}>
          🔒
        </Avatar>
      )}
    </Box>
  );
};