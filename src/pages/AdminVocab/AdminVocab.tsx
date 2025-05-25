import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import topicsData from '../../mocks/data/topics.json';
import './AdminVocab.css';

interface Topic {
  id: number;
  name: string;
  baseWords: string[];
  isEnabled: boolean;
}

const AdminVocab: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [newTopic, setNewTopic] = useState({ name: '', baseWords: '' });

  useEffect(() => {
    fetchTopics();
  }, []);

  // TODO: Replace with actual API call
  const fetchTopics = async () => {
    try {
      setLoading(true);
      // Simulate API call
      // const response = await fetch('api/topics');
      // const data = await response.json();
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Add isEnabled field to mock data
      const topicsWithEnabled = topicsData.topics.map(topic => ({
        ...topic,
        isEnabled: true
      }));
      setTopics(topicsWithEnabled);
      setError(null);
    } catch (err) {
      setError('Failed to fetch topics');
      console.error('Error fetching topics:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (topic?: Topic) => {
    if (topic) {
      setEditingTopic(topic);
      setNewTopic({
        name: topic.name,
        baseWords: topic.baseWords.join(', ')
      });
    } else {
      setEditingTopic(null);
      setNewTopic({ name: '', baseWords: '' });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingTopic(null);
    setNewTopic({ name: '', baseWords: '' });
  };

  // TODO: Replace with actual API call
  const handleSaveTopic = async () => {
    try {
      if (!newTopic.name || !newTopic.baseWords) {
        alert('Please fill in all fields');
        return;
      }

      const baseWordsArray = newTopic.baseWords
        .split(',')
        .map(word => word.trim())
        .filter(word => word);

      if (baseWordsArray.length === 0) {
        alert('Please add at least one word');
        return;
      }

      const topicData = {
        id: editingTopic?.id || topics.length + 1,
        name: newTopic.name,
        baseWords: baseWordsArray,
        isEnabled: editingTopic?.isEnabled ?? true
      };

      // TODO: Implement API calls
      // if (editingTopic) {
      //   await fetch(`api/topics/${editingTopic.id}`, {
      //     method: 'PUT',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(topicData),
      //   });
      // } else {
      //   await fetch('api/topics', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(topicData),
      //   });
      // }

      if (editingTopic) {
        setTopics(topics.map(t => t.id === editingTopic.id ? topicData : t));
      } else {
        setTopics([...topics, topicData]);
      }

      handleCloseDialog();
    } catch (err) {
      console.error('Error saving topic:', err);
      alert('Failed to save topic');
    }
  };

  // TODO: Replace with actual API call
  const handleToggleTopic = async (id: number) => {
    try {
      // await fetch(`api/topics/${id}/toggle`, { method: 'POST' });
      setTopics(topics.map(topic =>
        topic.id === id ? { ...topic, isEnabled: !topic.isEnabled } : topic
      ));
    } catch (err) {
      console.error('Error toggling topic:', err);
      alert('Failed to toggle topic status');
    }
  };

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className="admin-vocab-container">
      <Box className="admin-vocab-header">
        <Typography variant="h5" className="admin-vocab-title">
          Vocabulary Topics
        </Typography>
        <Box className="admin-vocab-actions">          <TextField
            variant="outlined"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="admin-vocab-search"
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
              ),
            }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            className="add-topic-button"
          >
            Add Topic
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Box className="loading-container">
          <CircularProgress style={{ color: '#00b1fe' }} />
        </Box>
      ) : error ? (
        <Box className="error-container">
          <Typography color="error">{error}</Typography>
        </Box>
      ) : (
        <Box className="topics-grid">
          {filteredTopics.map((topic) => (
            <Box key={topic.id} className="topic-card">
              <Typography variant="h6" className="topic-name">
                {topic.name}
              </Typography>
              <Box className="topic-words">
                {topic.baseWords.map((word, index) => (
                  <Typography key={index} className="topic-word">
                    {word}
                  </Typography>
                ))}
              </Box>
              <Box className="topic-actions">
                <IconButton
                  onClick={() => handleOpenDialog(topic)}
                  className="edit-button"
                >
                  <EditIcon />
                </IconButton>
                <Box className="topic-status">
                  <Switch
                    checked={topic.isEnabled}
                    onChange={() => handleToggleTopic(topic.id)}
                    className={`topic-switch ${topic.isEnabled ? 'enabled' : 'disabled'}`}
                  />
                  <Typography className={`status-text ${topic.isEnabled ? 'enabled' : 'disabled'}`}>
                    {topic.isEnabled ? 'Enabled' : 'Disabled'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {editingTopic ? 'Edit Topic' : 'Add New Topic'}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Topic Name"
            value={newTopic.name}
            onChange={(e) => setNewTopic({ ...newTopic, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Words (comma-separated)"
            value={newTopic.baseWords}
            onChange={(e) => setNewTopic({ ...newTopic, baseWords: e.target.value })}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            helperText="Enter words separated by commas"
          />
        </DialogContent>        <DialogActions>
          <Button onClick={handleCloseDialog} className="dialog-cancel-button">
            Cancel
          </Button>
          <Button 
            onClick={handleSaveTopic} 
            variant="contained" 
            className="dialog-save-button"
          >
            {editingTopic ? 'Save Changes' : 'Add Topic'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminVocab;