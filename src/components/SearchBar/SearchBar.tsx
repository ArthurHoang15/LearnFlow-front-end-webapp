import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

// 1, 2, 3: Explicitly type debounce and use number for timeoutId (browser)
function debounce<F extends (...args: any[]) => void>(func: F, delay: number) {
  let timeoutId: number | undefined;
  const debounced = (...args: Parameters<F>) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
  // Attach timeoutId for cleanup
  (debounced as any).timeoutId = timeoutId;
  return debounced;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  // 3: Use correct type for ref
  const debouncedSearchRef = useRef<((searchQuery: string) => void) & { timeoutId?: number }>();

  useEffect(() => {
    debouncedSearchRef.current = debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, 300);

    return () => {
      // 5: Use @ts-expect-error instead of @ts-ignore
      // 6: Specify type instead of any
      // @ts-expect-error
      const currentDebounce = debouncedSearchRef.current as { timeoutId?: number };
      if (currentDebounce && currentDebounce.timeoutId !== undefined) {
        clearTimeout(currentDebounce.timeoutId);
      }
    };
  }, [onSearch]);

  useEffect(() => {
    if (debouncedSearchRef.current) {
      debouncedSearchRef.current(query);
    }
  }, [query]);

  return (
    <Box className="search-bar">
      <TextField
        placeholder="Search questions, chapters, lessons..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
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