import React from 'react';
import { Box, Pagination as MUIPagination } from '@mui/material';
import './Pagination.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Box className="pagination-container">
      <MUIPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#333',
            borderColor: '#ddd',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#00b1fe',
            borderColor: '#00b1fe',
            color: 'white', 
            '&:hover': {
              backgroundColor: '#0095d9',
            },
          },
          '& .MuiPaginationItem-previousNext': {
            color: '#00b1fe',
            borderColor: '#00b1fe',
            '&:hover': {
              backgroundColor: 'rgba(0, 177, 254, 0.04)',
            },
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      />
    </Box>
  );
};