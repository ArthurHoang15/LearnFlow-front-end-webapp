import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import './Navbar.css';
import WavesIcon from '@mui/icons-material/Waves';

export const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-container">
        {/* Navbar Menu (Moved to the left) */}
        <Box className="navbar-menu">
          <WavesIcon className="navbar-logo-icon" />
          <Typography component={RouterLink} to="/" className="navbar-item">
            Home
          </Typography>
          <Typography component={RouterLink} to="/learning-hub" className="navbar-item">
            Learning Hub
          </Typography>
          <Typography component={RouterLink} to="/chat" className="navbar-item">
            Chat
          </Typography>
          <Typography component={RouterLink} to="/profile" className="navbar-item">
            Profile
          </Typography>
        </Box>

        {/* Navbar Actions (Buttons) */}
        <Box className="navbar-actions">
          <Button component={RouterLink} to="/signup" variant="outlined" className="navbar-button signup">
            Sign Up
          </Button>
          <Button component={RouterLink} to="/login" variant="contained" className="navbar-button login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};