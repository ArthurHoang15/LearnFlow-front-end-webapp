import React from 'react';
import { Box, Typography } from '@mui/material';
import './ChapterContent.css';

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  locked: boolean;
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  rating: number;
}

interface LessonCardProps {
  title: string;
  description: string;
  rating: number;
}

interface ChapterContentProps {
  chapter: Chapter;
  lessons: Lesson[];
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, rating }) => {
  return (
    <Box className="lesson-card">
      <Typography variant="body1" className="lesson-title">
        {title}
      </Typography>
      <Typography variant="body2" className="lesson-description">
        {description}
      </Typography>
      <Box className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
            ★
          </span>
        ))}
      </Box>
    </Box>
  );
};

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, lessons }) => {
  return (
    <Box className="chapter-content">
      <Typography variant="h4" className="content-title">
        {chapter.title}
      </Typography>
      <Typography variant="body2" className="content-subtitle">
        {chapter.subtitle}
      </Typography>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          description={lesson.description}
          rating={lesson.rating}
        />
      ))}
    </Box>
  );
};