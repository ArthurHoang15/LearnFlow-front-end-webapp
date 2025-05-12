import React from 'react';
import './404.css';
import { useNavigate } from 'react-router-dom';
import NotFoundBg from '../../assets/images/404.png';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-bg-container" style={{ backgroundImage: `url(${NotFoundBg})` }}>
      <div className="notfound-overlay">
        <div className="notfound-content">
          <h2>Page Not Found</h2>
          <p>Sorry, the page you're looking for does not exist or has been moved.<br/>Please go back to the Home page.</p>
          <button className="notfound-btn" onClick={() => navigate('/')}>Go back Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 