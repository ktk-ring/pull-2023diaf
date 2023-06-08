import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import ArtworkPage from './components/ArtworkPage';

const App = () => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="sidebar">
          <nav>
            <div className="button-container">
              <Link to="/" className="button">메인 화면</Link>
              <Link to="/000" className="button">{isWideScreen ? '000: 밧줄 당기기' : '000'}</Link>
              <Link to="/001" className="button">{isWideScreen ? '001: 서랍 당기기' : '001'}</Link>
              <Link to="/002" className="button">{isWideScreen ? '002: 방문 당기기' : '002'}</Link>
              <Link to="/003" className="button">{isWideScreen ? '003: 미정' : '003'}</Link>
              <Link to="/004" className="button">{isWideScreen ? '004: USB 당기기' : '004'}</Link>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/000" element={<ArtworkPage />} />
          <Route path="/001" element={<ArtworkPage />} />
          <Route path="/002" element={<ArtworkPage />} />
          <Route path="/003" element={<ArtworkPage />} />
          <Route path="/004" element={<ArtworkPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;