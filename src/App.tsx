import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import './App.css';
import {IntroductionSection} from './components/IntroductionSection/IntroductionSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <IntroductionSection/>
      </main>
      <Footer />
    </>
  );
}

export default App;
