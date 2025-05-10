import React from 'react';
import './401.css';
import { useNavigate } from 'react-router-dom';
import NotFoundBg from '../../assets/images/401.png';

const AuthorizationRequiredPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-bg-container" style={{ backgroundImage: `url(${NotFoundBg})` }}>
      <div className="notfound-overlay">
        <div className="notfound-content">
          <h2>Authentication Required</h2>
          <p>Please log in to access this page.<br/>You need to be authenticated to view this content.</p>
          <button className="notfound-btn" onClick={() => navigate('/')}>Go Back Home</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationRequiredPage; 