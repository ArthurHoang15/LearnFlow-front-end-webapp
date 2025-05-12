import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import './MistakeList.css';

interface Mistake {
  id: number;
  question: string;
  chapter: string;
  lesson: string;
  yourAnswer: string;
  correctAnswer: string;
  dateTaken: string;
  status: string;
}

interface MistakeListProps {
  mistakes: Mistake[];
}

export const MistakeList: React.FC<MistakeListProps> = ({ mistakes }) => {
  return (
    <TableContainer component={Paper} className="mistake-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Question</TableCell>
            <TableCell>Chapter</TableCell>
            <TableCell>Lesson</TableCell>
            <TableCell>Your Answer</TableCell>
            <TableCell>Correct Answer</TableCell>
            <TableCell>Date Taken</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mistakes.map((mistake) => (
            <TableRow key={mistake.id}>
              <TableCell>{mistake.id}</TableCell>
              <TableCell>{mistake.question}</TableCell>
              <TableCell>{mistake.chapter}</TableCell>
              <TableCell>{mistake.lesson}</TableCell>
              <TableCell>{mistake.yourAnswer}</TableCell>
              
              <TableCell sx={{ color: '#40a829', fontWeight: 600 }}>
                {mistake.correctAnswer}
              </TableCell>
              
              <TableCell sx={{ fontWeight: 'bold' }}>
                {mistake.dateTaken}
              </TableCell>
              
              <TableCell>
                <Box
                  component="span"
                  sx={{
                    backgroundColor: mistake.status === 'Not Reviewed' ? 'rgba(0, 177, 254, 0.2)' : '#00b1fe',
                    color: mistake.status === 'Not Reviewed' ? '#00567a' : 'white',
                    borderRadius: '8px',
                    padding: '4px 12px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    display: 'inline-block',
                    textAlign: 'center',
                    width: '130px',         
                    minWidth: '100px',     
                    maxWidth: '100%',       
                    whiteSpace: 'nowrap',   
                    overflow: 'hidden',     
                    textOverflow: 'ellipsis', 
                    '@media (max-width: 768px)': {
                      width: 'auto',        
                      minWidth: '80px',     
                    }
                  }}
                >
                  {mistake.status}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};