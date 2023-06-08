import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import Artwork000 from './components/Artwork000';
import Artwork001 from './components/Artwork001';
import Artwork002 from './components/Artwork002';
import Artwork003 from './components/Artwork003';
import Artwork004 from './components/Artwork004';
import logo from './img/seoularts.png';

const App = () => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);
  const [activeButton, setActiveButton] = useState('');

  // 가변폭
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 페이지별 사이드바 버튼 색상
  useEffect(() => {
    const storedActiveButton = localStorage.getItem('activeButton');
    if (storedActiveButton) {
      setActiveButton(storedActiveButton);
    }
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    localStorage.setItem('activeButton', buttonName);
  };
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="menu">
          <nav>
            <div className="button-container">
              <Link to="/"
                style={{ display: 'flex', alignItems: 'center'}}
                onClick={() => handleButtonClick('main')}>
                <img src={logo} alt="Logo" className="button-image-title" />
                {isWideScreen ? <h1>고민중</h1> : ''}
              </Link>

              <Link to="/"
                className={`button ${activeButton === 'main' ? 'active' : ''}`}
                onClick={() => handleButtonClick('main')}
              >
              {isWideScreen ? '메인: 작품 개요' : '작품 개요'}
              </Link>

              <Link to="/000"
                className={`button ${activeButton === '000' ? 'active' : ''}`}
                onClick={() => handleButtonClick('000')}
              >
                {isWideScreen ? '000: 밧줄 당기기' : '밧줄'}
              </Link>

              <Link to="/001"
                className={`button ${activeButton === '001' ? 'active' : ''}`}
                onClick={() => handleButtonClick('001')}
              >
                {isWideScreen ? '001: 서랍 당기기' : '서랍'}
              </Link>

              <Link to="/002"
                className={`button ${activeButton === '002' ? 'active' : ''}`}
                onClick={() => handleButtonClick('002')}
              >
                {isWideScreen ? '002: 방문 당기기' : '방문'}
              </Link>

              <Link to="/003"
                className={`button ${activeButton === '003' ? 'active' : ''}`}
                onClick={() => handleButtonClick('003')}
              >
                {isWideScreen ? '003: ??? 당기기' : '미정'}
              </Link>

              <Link to="/004"
                className={`button ${activeButton === '004' ? 'active' : ''}`}
                onClick={() => handleButtonClick('004')}
              >
                {isWideScreen ? '004: USB 당기기' : 'USB'}
              </Link>
              
              {isWideScreen && (
                <Link to="https://instagram.com/digitalartsfestival_sia"
                target="blank" rel="noreferrer noopener"
                  style={{ display: 'flex', alignItems: 'center' }}
                  onClick={() => handleButtonClick('main')}>
                  <img src={logo} alt="Logo" className="button-image-caption" />
                  {isWideScreen ? '디지털아트페스티벌 공식 인스타그램' : ''}
                </Link>
              )}
              
            </div>
          </nav>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/000" element={<Artwork000 />} />
            <Route path="/001" element={<Artwork001 />} />
            <Route path="/002" element={<Artwork002 />} />
            <Route path="/003" element={<Artwork003 />} />
            <Route path="/004" element={<Artwork004 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;