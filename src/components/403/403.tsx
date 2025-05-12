import React from 'react';
import './403.css';
import { useNavigate } from 'react-router-dom';
import NotFoundBg from '../../assets/images/403.png';

const ForbiddenPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-bg-container" style={{ backgroundImage: `url(${NotFoundBg})` }}>
      <div className="notfound-overlay">
        <div className="notfound-content">
          <h2>Access Forbidden</h2>
          <p>Sorry, you don't have permission to access this page.<br/>Please contact the administrator if you believe this is a mistake.</p>
          <button className="notfound-btn" onClick={() => navigate('/')}>Go back Home</button>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage; 