import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Nav from '../../assets/images/Nav.png';
import './Navbar.css';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-container">
        {/* Logo (Visible on All Devices) */}
        <Box className="navbar-brand">
          <img src={Nav} alt="Nav Logo" className="navbar-logo-icon" />
        </Box>

        {/* Hamburger Menu Icon for Mobile/Tablet */}
        <IconButton
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          sx={{ display: { xs: 'block', lg: 'none' } }} // Use lg (1024px) to align with CSS breakpoints
        >
          {mobileMenuOpen ? <CloseIcon className="navbar-close-icon" /> : <MenuIcon />}
        </IconButton>

        {/* Navbar Menu (Horizontal on Desktop, Dropdown on Mobile/Tablet) */}
        <Box
          className={`navbar-menu ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}
          sx={{
            display: { xs: mobileMenuOpen ? 'flex' : 'none', lg: 'flex' }, // Use lg (1024px) to align with CSS breakpoints
          }}
        >
          {/* Menu Items */}
          <Typography component={RouterLink} to="/" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Typography>
          <Typography component={RouterLink} to="/learning-hub" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Learning Hub
          </Typography>
          <Typography component={RouterLink} to="/chat" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Chat
          </Typography>
          <Typography component={RouterLink} to="/profile" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Profile
          </Typography>

          {/* Sign Up and Login Buttons (Only in Dropdown on Mobile/Tablet) */}
          <Box
            className="navbar-actions-mobile"
            sx={{ display: { xs: 'flex', lg: 'none' } }} // Use lg (1024px) to align with CSS breakpoints
          >
            <Button
              component={RouterLink}
              to="/signup"
              variant="outlined"
              className="navbar-button signup"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Button>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              className="navbar-button login"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Button>
          </Box>
        </Box>

        {/* Navbar Actions (Buttons, Visible on Desktop Only) */}
        <Box
          className="navbar-actions"
          sx={{ display: { xs: 'none', lg: 'flex' } }} // Use lg (1024px) to align with CSS breakpoints
        >
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