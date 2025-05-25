import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ChapterCard } from '../ChapterCard';
import { ChapterContent } from '../ChapterContent';
import './LearningChapters.css';

export const LearningChapters: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);

  const chapters = [
    { id: 1, title: 'Chapter 1', subtitle: 'Introductions', locked: false },
    { id: 2, title: 'Chapter 2', subtitle: 'Greetings', locked: true },
    { id: 3, title: 'Chapter 3', subtitle: 'All about me', locked: true },
  ];

  const lessons = [
    { id: 1, title: 'Lesson 1: Saying how you are', description: 'Talk about how you feel', rating: 4 },
    { id: 2, title: 'Lesson 1: Saying how you are', description: '', rating: 5 },
    { id: 3, title: 'Lesson 1: Saying how you are', description: '', rating: 4 },
  ];

  const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId) || chapters[0];

  const handleChapterSelect = (chapterId: number) => {
    setSelectedChapterId(chapterId);
  };

  const handleLessonSelect = (lessonId: number) => {
    setSelectedLessonId(lessonId);
  };

  return (
    <Box className="learning-container">
      <div className="sidebar">
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            title={chapter.title}
            subtitle={chapter.subtitle}
            locked={chapter.locked}
            isSelected={chapter.id === selectedChapterId}
            onSelect={() => handleChapterSelect(chapter.id)}
          />
        ))}
      </div>
      <Box className="content-area">
        <ChapterContent 
          chapter={selectedChapter} 
          lessons={lessons} 
          selectedLessonId={selectedLessonId}
          onLessonSelect={handleLessonSelect}
        />
      </Box>
    </Box>
  );
};