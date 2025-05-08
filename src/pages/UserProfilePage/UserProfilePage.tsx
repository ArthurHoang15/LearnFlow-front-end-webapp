import React, { useState, useRef } from 'react';
import { Box, Avatar, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './UserProfilePage.css';

export const UserProfilePage: React.FC = () => {
  const [fullName, setFullName] = useState<string>('User1');
  const [dateOfBirth, setDateOfBirth] = useState<string>('DD/MM/YYYY');
  const [email, setEmail] = useState<string>('????@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('0123456789');
  const [address, setAddress] = useState<string>('Somewhere in the world');

  const [avatarUrl, setAvatarUrl] = useState<string>("https://via.placeholder.com/100");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  const getTextFieldStyle = (label: string) => {
    const extraPadding = Math.min(label.length * 1.5, 50); 
    
    return {
      backgroundColor: '#f5f5f5',
      '& .MuiOutlinedInput-root': { 
        borderRadius: '0.25rem',
        '& input': {
          padding: '14px 14px'
        }
      },
      '& .MuiOutlinedInput-notchedOutline': {
        paddingLeft: '10px',
        paddingRight: `${30 + extraPadding}px`, 
      },
      '& .MuiInputLabel-root': { 
        color: 'black',
        fontWeight: 600,
        fontSize: '1.3rem',
        transform: 'translate(14px, 16px) scale(1)'
      },
      '& .MuiInputLabel-root.Mui-focused': {
        fontWeight: 700,
        color: '#007bff',
        transform: 'translate(14px, -9px) scale(0.75)'
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(14px, -9px) scale(0.75)'
      }
    };
  };

  return (
    <div className="profile-container">
        <div className="left-column">
            <div className="avatar-section">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    style={{ display: 'none' }}
                />
            
                <div className="avatar-container" onClick={triggerFileInput}>
                    <Avatar 
                    src={avatarUrl} 
                    alt="User Avatar" 
                    sx={{ 
                        width: 200, 
                        height: 200,
                        cursor: 'pointer',
                        '&:hover': {
                        opacity: 0.8,
                        }
                    }} 
                    />
                    <div className="avatar-overlay">
                        <EditIcon color="action" />
                        <p className="avatar-hint">Click to change avatar</p>
                    </div>               
            </div>
            
        </div>
            <div className="achievement-section">
                <h2 className="achievement-title">Achievements</h2>
            </div>
        </div>
      <Box className="form-section">
        <TextField
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          sx={getTextFieldStyle("Full Name")}
        />
        <TextField
          label="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          sx={getTextFieldStyle("Date of Birth")}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          size="small" 
          sx={getTextFieldStyle("Email")}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          sx={getTextFieldStyle("Phone Number")}
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          sx={getTextFieldStyle("Address")}
        />
        <Box className="button-group">
          <Button
            variant="outlined"
            className="cancel-button"
            sx={{
              backgroundColor: '#d1e7ff',
              color: '#333',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.75rem 2.25rem',
              textTransform: 'none',
              width: '10rem',
              fontWeight: 700
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="save-button"
            sx={{
              backgroundColor: '#00b1fe',
              borderRadius: '0.5rem',
              padding: '0.75rem 2rem',
              textTransform: 'none',
              width: '10rem',
              fontWeight: 700
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
};