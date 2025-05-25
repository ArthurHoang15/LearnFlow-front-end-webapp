import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { StoryCard } from '../../components/StoryCard';
import { FeatureHeader } from '../../components/FeatureHeader';
// import { useNavigate } from 'react-router-dom';
import './StoriesFlowPage.css';

interface Story {
  id: number;
  title: string;
  topic: string;
  summary: string;
  uploadDate: string;
}

export const StoriesFlowPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const stories: Story[] = [
    {
      id: 1,
      title: 'The Power of Lifelong Learning: Why You Should Never Stop Learning',
      topic: 'Personal Development',
      summary: 'This article explores the importance of continuous learning in today\'s fast-paced world. It discusses how staying updated with new skills and knowledge can benefit individuals personally and professionally, while fostering adaptability, cognitive health, and career success.',
      uploadDate: 'November 6, 2024',
    },
    {
      id: 2,
      title: 'Adapting to Change: The Role of Continuous Learning in Career Success',
      topic: 'Health & Wellness',
      summary: 'Focusing on the professional advantages of continuous learning, this article highlights how acquiring new skills and knowledge is essential for remaining competitive in the ever-evolving job market.',
      uploadDate: 'August 21, 2024',
    },
    {
      id: 3,
      title: 'Unlocking Innovation: How Lifelong Learning Benefits the Workplace',
      topic: 'Business & Innovation',
      summary: 'This article emphasizes how continuous learning in the workplace can lead to increased innovation, productivity, and employee satisfaction, ultimately benefiting organizations.',
      uploadDate: 'November 1, 2024',
    },
  ];

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className="story-flow-page">
      <FeatureHeader headerName='Stories Flow'/>
      <Box className="story-flow-content">
        <Box className="header">
          <Typography variant="h4" className="title">
            List of Stories
          </Typography>
          <TextField
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
          />
        </Box>
        <div className="story-list">
          {filteredStories.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              title={story.title}
              topic={story.topic}
              summary={story.summary}
              uploadDate={story.uploadDate}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};