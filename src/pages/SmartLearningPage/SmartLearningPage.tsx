import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { ChapterCard } from '../../components/ChapterCard';
import { ChapterContent } from '../../components/ChapterContent';
import { FeatureHeader } from '../../components/FeatureHeader';
import './SmartLearningPage.css';

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

export const SmartLearningPage: React.FC = () => {
  const chapters: Chapter[] = [
    { id: 1, title: 'Chapter 1', subtitle: 'Introductions', locked: false },
    { id: 2, title: 'Chapter 2', subtitle: 'Greetings', locked: true },
    { id: 3, title: 'Chapter 3', subtitle: 'All about me', locked: true },
  ];

  const lessons: { [key: number]: Lesson[] } = {
    1: [
      { id: 1, title: 'Lesson 1: Saying how you are', description: 'Talk about how you feel', rating: 4 },
      { id: 2, title: 'Lesson 2: Introductions', description: '', rating: 5 },
      { id: 3, title: 'Lesson 3: Basic phrases', description: '', rating: 4 },
    ],
    2: [
      { id: 1, title: 'Lesson 1: Formal greetings', description: 'Learn formal greetings', rating: 3 },
      { id: 2, title: 'Lesson 2: Informal greetings', description: '', rating: 4 },
    ],
    3: [
      { id: 1, title: 'Lesson 1: About me', description: 'Introduce yourself', rating: 4 },
      { id: 2, title: 'Lesson 2: My family', description: '', rating: 3 },
    ],
  };

  const navigate = useNavigate(); // Add this hook
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1); 

  const handleChapterSelect = (chapterId: number) => {
    const chapter = chapters.find((ch) => ch.id === chapterId);
    if (chapter && !chapter.locked) {
      setSelectedChapterId(chapterId);
      if (lessons[chapterId] && lessons[chapterId].length > 0) {
        setSelectedLessonId(lessons[chapterId][0].id);
      }
    }
  };

  // Modified to navigate to lesson page
  const handleLessonSelect = (lessonId: number) => {
    setSelectedLessonId(lessonId);
    // Navigate to the lesson page with chapter and lesson IDs
    navigate(`/learning-hub/smart-learning/chapter-${selectedChapterId}/lesson-${lessonId}`);
  };

  const selectedChapter = chapters.find((chapter) => chapter.id === selectedChapterId) || chapters[0];
  const selectedLessons = lessons[selectedChapterId] || [];

  return (
    <Box className="smart-learning-page">
      <FeatureHeader headerName="Smart Learning" />
      <div className="course-list">
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
        <div className="content-area">
          <ChapterContent 
            chapter={selectedChapter} 
            lessons={selectedLessons}
            selectedLessonId={selectedLessonId}
            onLessonSelect={handleLessonSelect}
          />
        </div>
      </div>
    </Box>
  );
};