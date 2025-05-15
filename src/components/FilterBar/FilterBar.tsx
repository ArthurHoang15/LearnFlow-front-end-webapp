import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, IconButton, Tooltip } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './FilterBar.css';

interface FilterBarProps {
  onFilterBarChange: (filters: { chapter: string; lesson: string; status: string }) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onFilterBarChange }) => {
  const [chapter, setChapter] = useState<string>('All');
  const [lesson, setLesson] = useState<string>('All');
  const [status, setStatus] = useState<string>('All');

  useEffect(() => {
    onFilterBarChange({ chapter, lesson, status });
  }, [chapter, lesson, status, onFilterBarChange]);

  const chapterOptions = [
    'All', 'Basic Grammar', 'Spelling', 'Prepositions', 
    'Articles', 'Punctuation'
  ];
  
  const lessonOptions = [
    'All', 'Past Tense', 'Double Letters', 'Interest Prepositions', 
    'A vs An', 'Commas'
  ];

  const formControlStyle = {
    minWidth: 150,
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#00b1fe',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00b1fe',
      },
    }
  };

  const handleReset = () => {
    setChapter('All');
    setLesson('All');
    setStatus('All');
  };

  return (
    <Box className="filter-container" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Tooltip title="Reset filters">
        <IconButton 
          onClick={handleReset} 
          size="small"
          sx={{ 
            color: '#00b1fe',
            '&:hover': {
              backgroundColor: 'rgba(0, 177, 254, 0.1)'
            }
          }}
        >
          <RestartAltIcon />
        </IconButton>
      </Tooltip>

      <FormControl size="small" sx={formControlStyle}>
        <InputLabel>Chapter</InputLabel>
        <Select
          value={chapter}
          label="Chapter"
          onChange={(e) => setChapter(e.target.value as string)}
        >
          {chapterOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl size="small" sx={formControlStyle}>
        <InputLabel>Lesson</InputLabel>
        <Select
          value={lesson}
          label="Lesson"
          onChange={(e) => setLesson(e.target.value as string)}
        >
          {lessonOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl size="small" sx={formControlStyle}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value as string)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Reviewed">Reviewed</MenuItem>
          <MenuItem value="Not Reviewed">Not Reviewed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};