import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">LearnFlow</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Trang chủ</Link>
        <Link to="/courses" className="navbar-item">Khóa học</Link>
        <Link to="/about" className="navbar-item">Giới thiệu</Link>
      </div>
    </nav>
  );
};