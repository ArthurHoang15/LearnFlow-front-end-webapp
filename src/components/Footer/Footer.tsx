import "./Footer.css";
import { Typography, Link as MuiLink, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from "../../assets/images/Logo.png";

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
              contact@learnflow.com
            </Typography>
            <Typography variant="body2" className="footer-contact-item">
              <PhoneIcon className="footer-contact-icon" />
              +1 (829) 651-3427
            </Typography>
            <Typography variant="body2" className="footer-contact-item">
              <LocationOnIcon className="footer-contact-icon" />
              Ho Chi Minh City, Vietnam
            </Typography>
          </div>
        </div>

        <div className="footer-right-grid">
          <div className="footer-section footer-home">
            <Typography variant="h6" className="footer-heading">
              Home
            </Typography>
            <div className="footer-links">
              <MuiLink href="#" className="footer-link" underline="hover">
                Benefits
              </MuiLink>
              <MuiLink href="#" className="footer-link" underline="hover">
                Our Courses
              </MuiLink>
              <MuiLink href="#" className="footer-link" underline="hover">
                Our Testimonials
              </MuiLink>
              <MuiLink href="#" className="footer-link" underline="hover">
                Our FAQ
              </MuiLink>
            </div>
          </div>

          <div className="footer-section footer-about">
            <MuiLink
              component={RouterLink}
              to="/about-us"
              underline="none"
              className="footer-heading"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#000",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "1rem",
                display: "inline-block",
              }}
            >
              About Us
            </MuiLink>
            <div className="footer-links">
              <MuiLink
                component={RouterLink}
                to="/about-us"
                className="footer-link"
                underline="hover"
              >
                Company
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/about-us"
                className="footer-link"
                underline="hover"
              >
                Achievements
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/about-us"
                className="footer-link"
                underline="hover"
              >
                Our Goals
              </MuiLink>
            </div>
          </div>

          <div className="footer-section footer-social">
            <Typography variant="h6" className="footer-heading">
              Social Profiles
            </Typography>
            <div className="footer-social">
              <IconButton
                href="#"
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                className="footer-social-icon"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="#"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
