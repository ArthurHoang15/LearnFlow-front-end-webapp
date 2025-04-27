import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
       
      </main>
      <Footer />
    </>
  );
}

export default App;
