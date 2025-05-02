import './Footer.css';
import { Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from '../../assets/images/Logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left-grid">
          <div className="footer-logo">
            <img src={Logo} alt="LearnFlow Logo" className="logo-image" />
          </div>
          <div className="footer-contact">
            <Typography variant="body2" className="footer-contact-item">
              <EmailIcon className="footer-contact-icon" />
              HUH@HUHHUH.com
            </Typography>
            <Typography variant="body2" className="footer-contact-item">
              <PhoneIcon className="footer-contact-icon" />
              +12 345 678 910
            </Typography>
            <Typography variant="body2" className="footer-contact-item">
              <LocationOnIcon className="footer-contact-icon" />
              Somewhere in the World
            </Typography>
          </div>
        </div>

        <div className="footer-right-grid">
          <div className="footer-section footer-home">
            <Typography variant="h6" className="footer-heading">
              Home
            </Typography>
            <div className="footer-links">
              <Link href="#" className="footer-link" underline="hover">
                Benefits
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Our Courses
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Our Testimonials
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Our FAQ
              </Link>
            </div>
          </div>

          <div className="footer-section footer-about">
            <Typography variant="h6" className="footer-heading">
              About Us
            </Typography>
            <div className="footer-links">
              <Link href="#" className="footer-link" underline="hover">
                Company
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Achievements
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Our Goals
              </Link>
            </div>
          </div>

          <div className="footer-section footer-social">
            <Typography variant="h6" className="footer-heading">
              Social Profiles
            </Typography>
            <div className="footer-social">
              <IconButton href="#" className="footer-social-icon" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" className="footer-social-icon" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" className="footer-social-icon" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};





  


   