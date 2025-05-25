// src/pages/admin/Users.tsx
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import usersData from '../../mocks/data/users.json';
import './Users.css';

interface User {
  id: string;
  username: string;
  email: string;
  'phone number': string;
  address: string;
  dateOfBirth: string;
  isEnabled: boolean;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('Name');
  const [searchQuery, setSearchQuery] = useState('');
    const rowsPerPage = 5;

  useEffect(() => {
    // Initialize users with isEnabled set to true by default
    setUsers(usersData.map(user => ({ ...user, isEnabled: true })));
  }, []);

  const handleToggleUser = (userId: string) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, isEnabled: !user.isEnabled } : user
    ));
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) || // Thêm lọc theo email
      user['phone number'].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRows = filteredUsers.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

  return (
    <Box className="users-container">
      <Box className="users-header">
        <Typography variant="h5" className="users-title">
          List of User
        </Typography>
        <Box className="users-actions">
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
            className="users-search"
          />
          <FormControl variant="outlined" className="users-sort">
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as string)}
              displayEmpty
              renderValue={(value) => `Sort by: ${value}`}
            >
              <MenuItem value="Name">Name</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Phone number">Phone number</MenuItem>
              <MenuItem value="Date of Birth">Date of Birth</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TableContainer component={Paper} className="users-table-container">
        <Table className="users-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header">ID</TableCell>
              <TableCell className="table-header">USERNAME</TableCell>
              <TableCell className="table-header">EMAIL</TableCell> {/* Thêm cột EMAIL */}
              <TableCell className="table-header">PHONE NUMBER</TableCell>
              <TableCell className="table-header">ADDRESS</TableCell>              
              <TableCell className="table-header">DATE OF BIRTH</TableCell>
              <TableCell className="table-header"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user['phone number']}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.dateOfBirth}</TableCell>
                <TableCell className="status-cell">
                  <Switch
                    checked={user.isEnabled}
                    onChange={() => handleToggleUser(user.id)}
                    className={`user-status-switch ${user.isEnabled ? 'enabled' : 'disabled'}`}
                  />
                  <span className={`status-text ${user.isEnabled ? 'enabled' : 'disabled'}`}>
                    {user.isEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className="users-pagination">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
};

export default Users;