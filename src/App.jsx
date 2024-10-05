import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    const updateMainContentPadding = () => {
      let header = document.querySelector('.header');
      let headerHeight = header.clientHeight;
      let mainContent = document.querySelector('.main-content');
      mainContent.style.paddingTop = headerHeight + "px";
      mainContent.style.paddingBottom = headerHeight + "px";
    }

    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize('sm-screen');
      } else if (width >= 768 && width < 1024) {
        setScreenSize('m-screen');
      } else {
        setScreenSize('l-screen');
      }

      updateMainContentPadding();
    };



    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);


  return (
    <div className={`${screenSize}`}>
      <Header />

      <div className="main-content">
        {/* <ScrollToTop /> */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* <PorpertyDetails /> */}
      </div>

    </div>
  )
}

export default App
