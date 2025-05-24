import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { AdminNavbar } from './components/AdminNavbar';
import './App.css';

function App() {
  return (
    <>
      <AdminNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
