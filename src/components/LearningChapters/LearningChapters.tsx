import React from 'react';
import { Box } from '@mui/material';
import { ChapterCard } from '../ChapterCard';
import { ChapterContent } from '../ChapterContent';
import './LearningChapters.css';

const LearningChapters: React.FC = () => {
  const chapters = [
    { id: 1, title: 'Chapter 1', subtitle: 'Introductions', locked: false },
    { id: 2, title: 'Chapter 2', subtitle: 'Greetings', locked: true },
    { id: 3, title: 'Chapter 3', subtitle: 'All about me', locked: true },
  ];

  const lessons = [
    { id: 1, title: 'Lesson1: Saying how you are', description: 'Talk about how you feel', rating: 4 },
    { id: 2, title: 'Lesson1: Saying how you are', description: '', rating: 5 },
    { id: 3, title: 'Lesson1: Saying how you are', description: '', rating: 4 },
  ];

  return (
    <Box className="learning-container">
      <Box className="sidebar">
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            title={chapter.title}
            subtitle={chapter.subtitle}
            locked={chapter.locked}
          />
        ))}
      </Box>
      <Box className="content-area">
        <ChapterContent chapter={chapters[0]} lessons={lessons} />
      </Box>
    </Box>
  );
};

export default LearningChapters;