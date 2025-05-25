import React from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Box, Card, CardContent, Typography, useMediaQuery, useTheme, Stack 
} from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Status badge component for reuse
  const StatusBadge = ({ status }: { status: string }) => (
    <Box
      component="span"
      sx={{
        backgroundColor: status === 'Not Reviewed' ? 'rgba(0, 177, 254, 0.2)' : '#00b1fe',
        color: status === 'Not Reviewed' ? '#00567a' : 'white',
        borderRadius: '8px',
        padding: '4px 12px',
        fontSize: '0.875rem',
        fontWeight: 500,
        display: 'inline-block',
        textAlign: 'center',
        width: isMobile ? 'auto' : '130px',
        minWidth: isMobile ? '80px' : '100px',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {status}
    </Box>
  );

  // Mobile card view
  if (isMobile) {
    return (
      <Stack spacing={2} className="mistake-list-mobile">
        {mistakes.map((mistake) => (
          <Card key={mistake.id} variant="outlined" sx={{ borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                Question {mistake.id}
              </Typography>
              
              <Typography variant="body1" gutterBottom>
                {mistake.question}
              </Typography>
              
              <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Chapter
                  </Typography>
                  <Typography variant="body2">{mistake.chapter}</Typography>
                </Box>
                
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Lesson
                  </Typography>
                  <Typography variant="body2">{mistake.lesson}</Typography>
                </Box>
                
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Your Answer
                  </Typography>
                  <Typography variant="body2">{mistake.yourAnswer}</Typography>
                </Box>
                
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Correct Answer
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#40a829', fontWeight: 600 }}>
                    {mistake.correctAnswer}
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Date Taken
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {mistake.dateTaken}
                  </Typography>
                </Box>
                
                <StatusBadge status={mistake.status} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  }

  // Desktop table view
  return (
    <TableContainer component={Paper} className="mistake-list" sx={{ overflowX: 'auto' }}>
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
                <StatusBadge status={mistake.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};