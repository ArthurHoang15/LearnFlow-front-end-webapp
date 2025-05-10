import React from 'react';
import './500.css';
import { useNavigate } from 'react-router-dom';
import NotFoundBg from '../../assets/images/500.png';

const InternalServerErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-bg-container" style={{ backgroundImage: `url(${NotFoundBg})` }}>
      <div className="notfound-overlay">
        <div className="notfound-content">
          <h2>Internal Server Error</h2>
          <p>Oops! Something went wrong on our end.<br/>Our team has been notified and is working to fix the issue.</p>
          <button className="notfound-btn" onClick={() => navigate('/')}>Go Back Home</button>
        </div>
      </div>
    </div>
  );
};

export default InternalServerErrorPage; 