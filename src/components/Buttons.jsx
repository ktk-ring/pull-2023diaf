import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/seoularts.png';

const Buttons = ({ activeButton, handleButtonClick, isWideScreen, isNarrowScreen, setIsExpanded }) => {


  return (
    <div className={`${!isNarrowScreen ? 'menu' : 'menu-narrow'}`} style={{ transition: 'all 0.6s ease' }}>
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

      <div className="category">{isWideScreen ? '전시 개요' : ''}</div>
      <Link to="/"
        className={`button ${activeButton === 'main' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('main')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '<당기시오> 작가 노트' : '작가 노트'}
      </Link>

      <Link to="/artists"
        className={`button ${activeButton === 'artists' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('artists')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '고민중 팀 및 작가 소개' : '작가 소개'}
      </Link>

      <div className="category">{isWideScreen ? '작품 상세' : ''}</div>
      <Link to="/000"
        className={`button ${activeButton === '000' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('000')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '#00: 밧줄 당기기' : '#00 밧줄'}
      </Link>

      <Link to="/001"
        className={`button ${activeButton === '001' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('001')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '#01: 서랍 당기기' : '#01 서랍'}
      </Link>

      <Link to="/002"
        className={`button ${activeButton === '002' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('002')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '#02: 방문 당기기' : '#02 방문'}
      </Link>

      <Link to="/003"
        className={`button ${activeButton === '003' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('003')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '#03: ??? 당기기' : '#03 미정'}
      </Link>

      <Link to="/004"
        className={`button ${activeButton === '004' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('004')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '#04: USB 당기기' : '#04 USB'}
      </Link>


      {isWideScreen && (
        <div style={{ width: '100%' }}>
          <div className="divide" style={{ marginTop: 25, marginBottom: 25 }} />
          <div className="category">외부 링크</div>
          <Link to="https://instagram.com/1il.sechan"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={logo} alt="Instagram" className="external-link" />
            고민중 인스타그램 (1il.sechan)
          </Link>

          <Link to="https://www.youtube.com/@DIAF_ENTER"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={logo} alt="YouTube" className="external-link" />
            디지털아트페스티벌 유튜브 채널
          </Link>

          <Link to="https://instagram.com/digitalartsfestival_sia"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={logo} alt="Instagram" className="external-link" />
            디지털아트페스티벌 인스타그램
          </Link>

          <Link to="https://instagram.com/sia_digitalart"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={logo} alt="Instagram" className="external-link" />
            디지털아트전공 인스타그램
          </Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;