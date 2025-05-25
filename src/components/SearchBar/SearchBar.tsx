import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box className="search-bar" sx={{ padding: isMobile ? '0.75rem 0.5rem' : '1rem' }}>
      <TextField
        placeholder={isMobile ? "Search..." : "Search questions, chapters, lessons..."}
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