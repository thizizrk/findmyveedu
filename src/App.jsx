import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Properties from './pages/Properties/Properties'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize('sm-screen');
      } else if (width >= 768 && width < 1024) {
        setScreenSize('m-screen');
      } else {
        setScreenSize('l-screen');
      }
    };



    updateScreenSize();
    // let header = document.querySelector('.header');
    // let headerHeight = header.clientHeight + "px";
    // let mainContent = document.querySelector('.main-content');
    // mainContent.style.paddingTop = headerHeight;
    // mainContent.style.paddingBottom = headerHeight;
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);


  return (
    <div className={`${screenSize} container`}>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
