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
  isSelected: boolean; 
  onSelect: () => void;
}

interface ChapterContentProps {
  chapter: Chapter;
  lessons: Lesson[];
  selectedLessonId: number; 
  onLessonSelect: (lessonId: number) => void; 
}

export const LessonCard: React.FC<LessonCardProps> = ({ 
  title, 
  description, 
  rating, 
  isSelected, 
  onSelect 
}) => {
  return (
    <Box 
      className={`lesson-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <Typography 
        variant="body1" 
        className="lesson-title"
        sx={{ fontFamily: '"Poppins", sans-serif',
          fontWeight: '500',
          fontSize: '1.5rem',
         }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        className="lesson-description"
        sx={{ fontWeight: 'normal',
          fontSize: '1.3rem',
         }}>
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

export const ChapterContent: React.FC<ChapterContentProps> = ({ 
  chapter, 
  lessons, 
  selectedLessonId,
  onLessonSelect
}) => {
  return (
    <Box className="chapter-content">
      <Typography 
        variant="h4" 
        className="content-title"
        sx={{ fontFamily: '"Poppins", sans-serif',
          fontWeight: 'bold',
          fontSize: '3rem',
        }}
      >
        {chapter.title}
      </Typography>
      <Typography 
        variant="body2" 
        className="content-subtitle"
        sx={{ fontWeight: 'normal', 
          fontSize: '1.5rem',
        }}>
        {chapter.subtitle}
      </Typography>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          description={lesson.description}
          rating={lesson.rating}
          isSelected={lesson.id === selectedLessonId}
          onSelect={() => onLessonSelect(lesson.id)}
        />
      ))}
    </Box>
  );
};