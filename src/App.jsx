import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './components/Overview/Main';
import Statement from './components/Overview/Statement';
import Artist from './components/Overview/Artist';
import Artwork000 from './components/Artworks/000.Spring';
import Artwork001 from './components/Artworks/001.Drawer';
import Artwork002 from './components/Artworks/002.Door';
import Artwork004 from './components/Artworks/004.USB';

import FaviconForLight from './img/favicon_dark.svg'
import FaviconForDark from './img/favicon_light.svg'

import Buttons from './components/Buttons';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 768);
  
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 1080);

  const [activeButton, setActiveButton] = useState('main');

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setIsDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const faviconPath = isDarkMode ? FaviconForDark : FaviconForLight;
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = faviconPath;
    }
  }, [isDarkMode]);
  
  // 창 가변 크기
  useEffect(() => {
    const handleWidthChange = () => {
      setIsWideScreen(window.innerWidth > 1200);
      setIsNarrowScreen(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setIsExpanded(false);
      }
    };

    const handleHeightChange = () => {
      setIsTallScreen(window.innerHeight > 500);
    };

    handleWidthChange(); // 초기화

    window.addEventListener('resize', handleWidthChange);
    window.addEventListener('resize', handleHeightChange);

    return () => {
      window.removeEventListener('resize', handleWidthChange);
      window.removeEventListener('resize', handleHeightChange);
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
    <div className="app-container">
      {isNarrowScreen ?
        <div className="menu">
          <div className="button-container">
            <Link className={`button ${activeButton === 'expand' ? 'active' : ''}`} onClick={toggleExpand}>
              {!isExpanded ? '페이지 메뉴 펼치기' : '페이지 메뉴 접기'}
            </Link>
          </div>
          <div className={`button-container-narrow ${isExpanded ? 'expanded' : ''}`}>
              <Buttons
                activeButton={activeButton}
                handleButtonClick={handleButtonClick}
                isWideScreen={isWideScreen}
                isNarrowScreen={isNarrowScreen}
                isTallScreen={isTallScreen}
                setIsExpanded={setIsExpanded} />
            </div>
        </div>

        : (
          <Buttons
            activeButton={activeButton}
            handleButtonClick={handleButtonClick}
            isWideScreen={isWideScreen} />
        )}
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage
            isWideScreen={isWideScreen}
            isNarrowScreen={isNarrowScreen} />} />
          <Route path="/statement" element={<Statement
            isWideScreen={isWideScreen}
            isNarrowScreen={isNarrowScreen} />} />
          <Route path="/artist" element={<Artist
            isWideScreen={isWideScreen}
            isNarrowScreen={isNarrowScreen} />} />
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
  );
};

export default App;