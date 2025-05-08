import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import Signup from '../../assets/images/Signup.png';
import './SignUpPage.css';

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your sign-up logic here (e.g., API call)
  };

  return (
    <Box className="signup-page">
      {/* Left Side: Image */}
      <Box className="signup-image-container">
        <img src={Signup} alt="Sign Up Illustration" className="signup-image" />
      </Box>

      {/* Right Side: Form */}
      <Box className="signup-form-container">
        <Typography variant="h4" component="h1" className="signup-title">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} className="signup-form">
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="signup-button"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" className="signup-login-link">
          Already have an account?{' '}
          <a href="/login">Log in</a>
        </Typography>
      </Box>
    </Box>
  );
};