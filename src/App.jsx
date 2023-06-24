import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './components/Statement';
import Artist from './components/Artist';
import Artwork000 from './components/Artworks/000.Spring';
import Artwork001 from './components/Artworks/001.Drawer';
import Artwork002 from './components/Artworks/002.Door';
import Artwork004 from './components/Artworks/004.USB';

import Buttons from './components/Buttons';

const App = () => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 768);

  const [activeButton, setActiveButton] = useState('main');

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  // 가변폭
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1200);
      setIsNarrowScreen(window.innerWidth < 768);
      if (window.innerWidth > 768) {
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
          {isNarrowScreen ?
            <div className="button-container">
              <Link className={`button ${activeButton === 'expand' ? 'active' : ''}`} onClick={toggleExpand}>
                {!isExpanded ? '페이지 메뉴 펼치기' : '페이지 메뉴 접기'}
              </Link>
              <div className={`button-container-narrow ${isExpanded ? 'expanded-buttons' : ''}`}>
                <Buttons
                  activeButton={activeButton}
                  handleButtonClick={handleButtonClick}
                  isWideScreen={isWideScreen}
                  isNarrowScreen={isNarrowScreen}
                  setIsExpanded={setIsExpanded} />
              </div>
            </div>

            : (
              <Buttons
                activeButton={activeButton}
                handleButtonClick={handleButtonClick}
                isWideScreen={isWideScreen} />
            )}
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/000" element={<Artwork000
              isWideScreen={isWideScreen}
              isNarrowScreen={isNarrowScreen} />} />
            <Route path="/001" element={<Artwork001
              isWideScreen={isWideScreen}
              isNarrowScreen={isNarrowScreen} />} />
            <Route path="/002" element={<Artwork002
              isWideScreen={isWideScreen}
              isNarrowScreen={isNarrowScreen} />} />
            <Route path="/004" element={<Artwork004
              isWideScreen={isWideScreen}
              isNarrowScreen={isNarrowScreen} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;