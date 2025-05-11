import { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Signup from '../../assets/images/Signup.png';
import './LoginPage.css';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your login logic here (e.g., API call)
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add your Google login logic here (e.g., OAuth flow)
  };

  return (
    <Box className="login-page">
      {/* Left Side: Image */}
      <Box className="login-image-container">
        <img src={Signup} alt="Login Illustration" className="login-image" />
      </Box>

      {/* Right Side: Form */}
      <Box className="login-form-container">
        <Typography variant="h4" component="h1" className="login-title">
          Login
        </Typography>
        <Typography variant="body2" className="login-subtitle">
          Welcome back! Please log in to access your account.
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <Link href="/forgot-password" className="login-forgot-link">
              Forgot Password?
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="login-button"
            sx={{ mt: 1, mb: 1 }}
          >
            Log In
          </Button>
        </form>
        <Box className="login-or-container">
          <Typography className="login-or-text">OR</Typography>
          <Box className="login-or-line" />
        </Box>
        <Button
          onClick={handleGoogleLogin}
          className="login-google-button"
          startIcon={<GoogleIcon />}
        >
          Log in with Google
        </Button>
        <Typography variant="body2" className="login-signup-link" sx={{ mt: 2 }}>
          Don’t have an account? <a href="/signup">Sign Up →</a>
        </Typography>
      </Box>
    </Box>
  );
};