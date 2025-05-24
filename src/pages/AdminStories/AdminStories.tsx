// src/pages/admin/AdminStories.tsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import storiesData from '../../mocks/data/stories.json';
import './AdminStories.css';

interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  pages: number;
  published: string;
}

const AdminStories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('Title');
  const [searchQuery, setSearchQuery] = useState('');
  const [editStory, setEditStory] = useState<Story | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const rowsPerPage = 5;

  useEffect(() => {
    setStories(storiesData);
  }, []);

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRows = filteredStories.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleDeleteStory = (id: string) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  const handleEditStory = (story: Story) => {
    setEditStory(story);
    setOpenEditDialog(true);
  };

  const handleEditChange = (field: keyof Story, value: string | number) => {
    if (editStory) {
      setEditStory({ ...editStory, [field]: value });
    }
  };

  const handleSaveEdit = () => {
    if (editStory) {
      setStories(
        stories.map((story) =>
          story.id === editStory.id ? editStory : story
        )
      );
      setOpenEditDialog(false);
    }
  };

  return (
    <Box className="stories-container">
      <Box className="stories-header">
        <Typography variant="h5" className="stories-title">
          List of Stories
        </Typography>
        <Box className="stories-actions">
          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearchQuery('')}>
                    <Typography className="clear-search">X</Typography>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="stories-search"
          />
          <FormControl variant="outlined" className="stories-sort">
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as string)}
              displayEmpty
              renderValue={(value) => `Sort by: ${value}`}
            >
              <MenuItem value="Title">Title</MenuItem>
              <MenuItem value="Author">Author</MenuItem>
              <MenuItem value="Pages">Pages</MenuItem>
              <MenuItem value="Published">Published</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TableContainer component={Paper} className="stories-table-container">
        <Table className="stories-table">
          <TableHead>
            <TableRow>
              <TableCell className="stories-table-header">ID</TableCell>
              <TableCell className="stories-table-header">TITLE</TableCell>
              <TableCell className="stories-table-header">DESCRIPTION</TableCell>
              <TableCell className="stories-table-header">AUTHOR</TableCell>
              <TableCell className="stories-table-header">PAGES</TableCell>
              <TableCell className="stories-table-header">PUBLISHED</TableCell>
              <TableCell className="stories-table-header"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStories
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((story) => (
                <TableRow key={story.id}>
                  <TableCell>{story.id}</TableCell>
                  <TableCell>{story.title}</TableCell>
                  <TableCell>{story.description}</TableCell>
                  <TableCell>{story.author}</TableCell>
                  <TableCell>{story.pages}</TableCell>
                  <TableCell>{story.published}</TableCell>
                  <TableCell>
                    <IconButton
                      className="action-button"
                      onClick={() => handleEditStory(story)}
                    >
                      <EditIcon className="action-icon edit" />
                    </IconButton>
                    <IconButton
                      className="action-button"
                      onClick={() => handleDeleteStory(story.id)}
                    >
                      <DeleteIcon className="action-icon delete" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className="stories-pagination">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>

      {editStory && (
        <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
          <DialogTitle>Edit Story</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              value={editStory.title}
              onChange={(e) => handleEditChange('title', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              value={editStory.description}
              onChange={(e) => handleEditChange('description', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Author"
              value={editStory.author}
              onChange={(e) => handleEditChange('author', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Pages"
              type="number"
              value={editStory.pages}
              onChange={(e) => handleEditChange('pages', parseInt(e.target.value))}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Published"
              value={editStory.published}
              onChange={(e) => handleEditChange('published', e.target.value)}
              fullWidth
              margin="normal"
            />
          </DialogContent>          <DialogActions>
            <Button 
              onClick={() => setOpenEditDialog(false)} 
              className="edit-dialog-cancel"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSaveEdit} 
              className="edit-dialog-save"
            >
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default AdminStories;