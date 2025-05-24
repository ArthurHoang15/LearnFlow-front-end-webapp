// src/pages/admin/Feedback.tsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  CircularProgress,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import './Feedback.css';

interface Feedback {
  id: number;
  user: string;
  comment: string;
  answer: string;
}

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newAnswer, setNewAnswer] = useState<{ [key: number]: string }>({});
  const [editingAnswer, setEditingAnswer] = useState<number | null>(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // TODO: Implement actual API calls
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // const response = await fetch('api/feedbacks');
      // const data = await response.json();
      
      // Temporary mock data
      const mockData = [
        {
          id: 1,
          user: 'John Doe',
          comment: 'The learning materials are very helpful! I especially enjoyed the interactive exercises.',
          answer: 'Thank you for your feedback! We\'re glad you found the materials helpful.',
        },
        {
          id: 2,
          user: 'Jane Smith',
          comment: 'Could you add more practice exercises? The current ones are great but I would love more variety.',
          answer: '',
        },
        {
          id: 3,
          user: 'Mike Johnson',
          comment: 'The interface is very user-friendly. The navigation between chapters is smooth.',
          answer: 'We appreciate your feedback about the interface!',
        },
      ];
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFeedbacks(mockData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch feedbacks');
      console.error('Error fetching feedbacks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (id: number, value: string) => {
    setNewAnswer({ ...newAnswer, [id]: value });
  };

  const handleEditAnswer = (id: number) => {
    const feedback = feedbacks.find(f => f.id === id);
    if (feedback) {
      setEditingAnswer(id);
      setNewAnswer({ ...newAnswer, [id]: feedback.answer });
    }
  };

  // TODO: Implement API call for submitting answer
  const handleSubmitAnswer = async (id: number) => {
    try {
      // TODO: Replace with actual API call
      // await fetch(`api/feedbacks/${id}/answer`, {
      //   method: editingAnswer === id ? 'PUT' : 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ answer: newAnswer[id] }),
      // });
      
      setFeedbacks(
        feedbacks.map((f) =>
          f.id === id ? { ...f, answer: newAnswer[id] || '' } : f
        )
      );
      setNewAnswer({ ...newAnswer, [id]: '' });
      setEditingAnswer(null);
    } catch (err) {
      console.error('Error submitting answer:', err);
      // TODO: Add error handling UI
    }
  };

  return (
    <Box className="feedback-container">
      <Typography variant="h5" className="feedback-title">
        User Feedbacks
      </Typography>
      {loading ? (
        <Box className="loading-container">
          <CircularProgress style={{ color: '#00b1fe' }} />
        </Box>
      ) : error ? (
        <Box className="error-container">
          <Typography color="error">{error}</Typography>
        </Box>
      ) : (
        <Box className="feedback-list">
          {feedbacks.length === 0 ? (
            <Typography className="no-feedback">No feedbacks available</Typography>
          ) : (
            feedbacks.map((feedback) => (
              <Box key={feedback.id} className="feedback-card">
                <Box className="feedback-content">
                  <Typography className="feedback-user">
                    Feedback from: {feedback.user}
                  </Typography>
                  <Typography className="feedback-comment">{feedback.comment}</Typography>
                  {feedback.answer && editingAnswer !== feedback.id ? (
                    <Box className="answer-section">
                      <Typography>Answer:</Typography>
                      <Typography>{feedback.answer}</Typography>
                      <IconButton
                        className="edit-button"
                        onClick={() => handleEditAnswer(feedback.id)}
                        title="Edit answer"
                      >
                        <EditIcon />
                      </IconButton>
                    </Box>
                  ) : (
                    <Box className="answer-input-section">
                      <TextField
                        value={newAnswer[feedback.id] || ''}
                        onChange={(e) =>
                          handleAnswerChange(feedback.id, e.target.value)
                        }
                        placeholder="Write your answer here..."
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={2}
                        className="answer-input"
                      />
                      <IconButton
                        className="action-button"
                        onClick={() => handleSubmitAnswer(feedback.id)}
                        title={editingAnswer === feedback.id ? "Save changes" : "Submit answer"}
                      >
                        {editingAnswer === feedback.id ? <CheckIcon /> : <AddIcon />}
                      </IconButton>
                    </Box>
                  )}
                </Box>
              </Box>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default Feedback;