import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/seoularts.png';

const Buttons = ({ activeButton, handleButtonClick, isWideScreen, isNarrowScreen }) => {


  return (
    <div className="menu">
      {!isNarrowScreen && (
        <div>
          <Link to="/"
            className="title"
            style={{ alignItems: "center" }}
            onClick={() => handleButtonClick('main')}>
            <img src={logo} alt="Logo" className="button-image-title" />
            {isWideScreen ? <h1 style={{ marginLeft: 5 }}>고민중, &lt;당기시오&gt;</h1> : ''}
          </Link>
        </div>)}
        
      <div>
        <h2 style={{marginLeft: 20}}>전시 개요</h2>
        <Link to="/"
          className={`button ${activeButton === 'main' ? 'active' : ''}`}
          onClick={() => handleButtonClick('main')}
        >
          {isWideScreen ? '<당기시오> 작품 개요' : '작품 개요'}
        </Link>

        <Link to="/artists"
          className={`button ${activeButton === 'artists' ? 'active' : ''}`}
          onClick={() => handleButtonClick('artists')}
        >
          {isWideScreen ? '고민중 작가 소개' : '작가 소개'}
        </Link>

        <h2 style={{marginLeft: 20}}>작품 상세</h2>
        <Link to="/000"
          className={`button ${activeButton === '000' ? 'active' : ''}`}
          onClick={() => handleButtonClick('artist')}
        >
          {isWideScreen ? '#00: 밧줄 당기기' : '#00 밧줄'}
        </Link>

        <Link to="/001"
          className={`button ${activeButton === '001' ? 'active' : ''}`}
          onClick={() => handleButtonClick('001')}
        >
          {isWideScreen ? '#01: 서랍 당기기' : '#01 서랍'}
        </Link>

        <Link to="/002"
          className={`button ${activeButton === '002' ? 'active' : ''}`}
          onClick={() => handleButtonClick('002')}
        >
          {isWideScreen ? '#02: 방문 당기기' : '#02 방문'}
        </Link>

        <Link to="/003"
          className={`button ${activeButton === '003' ? 'active' : ''}`}
          onClick={() => handleButtonClick('003')}
        >
          {isWideScreen ? '#03: ??? 당기기' : '#03 미정'}
        </Link>

        <Link to="/004"
          className={`button ${activeButton === '004' ? 'active' : ''}`}
          onClick={() => handleButtonClick('004')}
        >
          {isWideScreen ? '#04: USB 당기기' : '#04 USB'}
        </Link>
      </div>
        <h2 style={{marginLeft: 20}}>외부 링크</h2>
      {isWideScreen && (
        <div>
          <Link to="https://instagram.com/1il.sechan"
            target="blank" rel="noreferrer noopener"
            className="button"
            onClick={() => handleButtonClick('main')}>
            <img src={logo} alt="Logo" className="external-link" />
            {isWideScreen ? '고민중 인스타그램' : ''}
          </Link>

          <Link to="https://www.youtube.com/@DIAF_ENTER"
            target="blank" rel="noreferrer noopener"
            className="button"
            onClick={() => handleButtonClick('main')}>
            <img src={logo} alt="Logo" className="external-link" />
            {isWideScreen ? '디지털아트페스티벌 유튜브 채널' : ''}
          </Link>

          <Link to="https://instagram.com/digitalartsfestival_sia"
            target="blank" rel="noreferrer noopener"
            className="button"
            onClick={() => handleButtonClick('main')}>
            <img src={logo} alt="Logo" className="external-link" />
            {isWideScreen ? '디지털아트페스티벌 인스타그램' : ''}
          </Link>

          <Link to="https://instagram.com/sia_digitalart"
            target="blank" rel="noreferrer noopener"
            className="button"
            onClick={() => handleButtonClick('main')}>
            <img src={logo} alt="Logo" className="external-link" />
            {isWideScreen ? '디지털아트전공 인스타그램' : ''}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;