// src/components/Navbar/AdminNavbar.tsx
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person'; // Icon for Admin
import Nav from '../../assets/images/Nav.png';
import './AdminNavbar.css';

export const AdminNavbar = () => {
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
          sx={{ display: { xs: 'block', lg: 'none' } }}
        >
          {mobileMenuOpen ? <CloseIcon className="navbar-close-icon" /> : <MenuIcon />}
        </IconButton>

        {/* Navbar Menu (Horizontal on Desktop, Dropdown on Mobile/Tablet) */}
        <Box
          className={`navbar-menu ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}
          sx={{
            display: { xs: mobileMenuOpen ? 'flex' : 'none', lg: 'flex' },
          }}
        >
          {/* Admin Menu Items */}
          <Typography component={RouterLink} to="/admin/users" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Users
          </Typography>
          <Typography component={RouterLink} to="/admin/learning-hub" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Learning Hub
          </Typography>
          <Typography component={RouterLink} to="/admin/feedback" className="navbar-item" onClick={() => setMobileMenuOpen(false)}>
            Feedback
          </Typography>
        </Box>

        {/* Admin and Avatar Group (Visible on All Devices) */}
        <Box className="navbar-admin-group">
          <Typography
            component={RouterLink}
            to="/admin/profile"
            className="navbar-admin-text"
            onClick={() => setMobileMenuOpen(false)}
          >
            Admin
          </Typography>
          <IconButton
            component={RouterLink}
            to="/admin/profile"
            className="navbar-avatar-button"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PersonIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};