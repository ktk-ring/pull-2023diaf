import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './components/MainPage';
import Artists from './components/Artists';
import Artwork000 from './components/Artworks/Artwork000';
import Artwork001 from './components/Artworks/Artwork001';
import Artwork002 from './components/Artworks/Artwork002';
import Artwork003 from './components/Artworks/Artwork003';
import Artwork004 from './components/Artworks/Artwork004';

import Buttons from './components/Buttons';

const App = () => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1250);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 1050);
  const [activeButton, setActiveButton] = useState('main');

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  // 가변폭
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1250);
      setIsNarrowScreen(window.innerWidth <= 1050);
      if (window.innerWidth > 1050) {
        setIsExpanded(false);
      }
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
    <div>
      <div className="app-container">
        <div className="menu">
          <nav>
            {isNarrowScreen ?
              <div className="button-container">
                <div><div>
                </div>
                  <div className="category" />
                  <Link className={`button ${activeButton === 'expand' ? 'active' : ''}`} onClick={toggleExpand}>
                    {!isExpanded ? '페이지 메뉴 펼치기' : '페이지 메뉴 접기'}
                  </Link>
                  <div className="category" />
                </div>
                <div>
                  <div className={`button-container-narrow ${isExpanded ? 'expanded-buttons' : ''}`}>
                    <Buttons
                      activeButton={activeButton}
                      handleButtonClick={handleButtonClick}
                      isWideScreen={isWideScreen}
                      isNarrowScreen={isNarrowScreen}
                      setIsExpanded={setIsExpanded} />
                  </div>
                  {/* )} */}
                </div>
              </div>

              : (
                <div className="button-container">
                  <Buttons
                    activeButton={activeButton}
                    handleButtonClick={handleButtonClick}
                    isWideScreen={isWideScreen} />
                </div>
              )}
          </nav>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/000" element={<Artwork000 />} />
            <Route path="/001" element={<Artwork001 />} />
            <Route path="/002" element={<Artwork002 />} />
            <Route path="/003" element={<Artwork003 />} />
            <Route path="/004" element={<Artwork004 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;