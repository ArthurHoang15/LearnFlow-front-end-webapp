// src/pages/admin/AdminLearningHub.tsx
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExtensionIcon from '@mui/icons-material/Extension';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate
import './AdminLearningHub.css';

const AdminLearningHub: React.FC = () => {
  const navigate = useNavigate(); // Hook để điều hướng
  const learningItems = [
    { id: 1, name: 'Stories Flow', icon: <MenuBookIcon /> },
    { id: 2, name: 'Vocabulary boost', icon: <ExtensionIcon /> },
  ];

  const handleEditClick = (itemName: string) => {
    if (itemName === 'Stories Flow') {
      navigate('/admin/stories'); // Chuyển đến trang AdminStories
    } else if (itemName === 'Vocabulary boost') {
      navigate('/admin/vocab'); // Chuyển đến trang AdminVocab
    }
    // Không làm gì với Smart Learning vì chưa có yêu cầu
  };

  return (
    <Box className="learning-hub-container admin-learning-hub">
      {learningItems.map((item) => (
        <Box key={item.id} className="learning-hub-item">
          <Box className="item-icon">{item.icon}</Box>
          <Typography className="item-name">{item.name}</Typography>
          <Box className="item-actions">
            {item.name !== 'Smart Learning' && ( // Chỉ hiển thị nút Edit cho Stories Flow và Vocabulary boost
              <IconButton
                className="action-button edit"
                disableRipple
                onClick={() => handleEditClick(item.name)}
              >
                <EditIcon />
                <Typography className="action-text">Edit</Typography>
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AdminLearningHub;