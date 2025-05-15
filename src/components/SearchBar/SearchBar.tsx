import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  // Handle search when Enter key is pressed or search icon is clicked
  const handleSearch = () => {
    onSearch(query);
  };

  // Handle key press events, specifically Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box className="search-bar">
      <TextField
        placeholder="Search questions, chapters, lessons..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch} edge="start">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ 
          backgroundColor: '#fff', 
          borderRadius: '4px',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#00b1fe',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00b1fe',
            },
          }
        }}
      />
    </Box>
  );
};