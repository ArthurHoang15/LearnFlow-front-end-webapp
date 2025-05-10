import { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Signup from '../../assets/images/Signup.png';
import './SignUpPage.css';

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirm password field
    agreeTerms: false, // State for terms checkbox
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'agreeTerms' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms of Use and Privacy Policy');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form submitted:', formData);
    // Add your sign-up logic here (e.g., API call)
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign-up clicked');
    // Add your Google sign-up logic here (e.g., OAuth flow)
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
        <Typography variant="body2" className="signup-subtitle">
          Create an account to unlock exclusive features
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                color="primary"
              />
            }
            label="I agree with Terms of Use and Privacy Policy"
            sx={{ mt: 1, mb: 1}}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="signup-button"
            sx={{ mt: 1 }}
            disabled={!formData.agreeTerms} // Disable button if terms not agreed
          >
            Sign Up
          </Button>
        </form>
        <Box className="signup-or-container">
          <Typography className="signup-or-text">OR</Typography>
          <Box className="signup-or-line" />
        </Box>
        <Button
          onClick={handleGoogleSignUp}
          className="signup-google-button"
          startIcon={<GoogleIcon />}
        >
          Sign Up with Google
        </Button>
        <Typography variant="body2" className="signup-login-link" sx={{ mt: 2 }}>
          Already have an account? <a href="/login">Log in →</a>
        </Typography>
      </Box>
    </Box>
  );
};