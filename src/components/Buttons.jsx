import React from 'react';
import { Link } from 'react-router-dom';

import pull from '../img/Logo_F3F3F3.png';
import DIAF2023 from '../img/DIAF2023_Profile.webp';
import Instagram from '../img/Instagram.png';
import YouTube from '../img/YouTube.png';

const Buttons = ({ activeButton, handleButtonClick, isWideScreen, isNarrowScreen, setIsExpanded }) => {

  return (
    <div className={`${!isNarrowScreen ? 'menu' : 'menu-narrow'}`}>
      {!isNarrowScreen && (
        <div>
          <Link to="/"
            className="title"
            style={{ alignItems: "center" }}
            onClick={() => handleButtonClick('main')}>
            <img src={pull} alt="Logo" className="button-image-title" />
          </Link>
        </div>)}

      <div className="category">{isWideScreen ? '전시 개요' : ''}</div>

      <Link to="/"
        className={`button ${activeButton === 'main' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('main')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '디지털아트페스티벌: 멀티페어링 소개' : '전시'}
      </Link>

      <Link to="/statement"
        className={`button ${activeButton === 'statement' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('statement')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '작품 <당기시오> 작가 노트' : '작품'}
      </Link>

      <Link to="/artist"
        className={`button ${activeButton === 'artist' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('artist')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '팀 고민중 및 작가 소개' : '작가'}
      </Link>

      <div className="category">{isWideScreen ? '작품 상세' : ''}</div>

      <Link to="/001"
        className={`button ${activeButton === '001' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('001')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '01. 서랍 당겨보기' : '서랍'}
      </Link>

      <Link to="/002"
        className={`button ${activeButton === '002' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('002')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '02. 문 열어보기' : '문'}
      </Link>

      <Link to="/000"
        className={`button ${activeButton === '000' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('000')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '03. 봄 맞이하기' : '봄'}
      </Link>

      <Link to="/004"
        className={`button ${activeButton === '004' ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick('004')
          isNarrowScreen && setIsExpanded(false)
        }}>
        {isWideScreen || isNarrowScreen ? '04. 고민 담아가기' : '고민'}
      </Link>


      {isWideScreen && (
        <div style={{ width: '100%' }}>
          <div className="category">관련 웹사이트</div>

          <Link to="https://www.youtube.com/@DIAF_ENTER"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={DIAF2023} alt="DIAF" className="external-link"
              style={{ borderRadius: '25%', marginLeft: 0 }} />
            디지털아트페스티벌 웹사이트
          </Link>

          <Link to="https://www.youtube.com/@DIAF_MULTI-PAIRING"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={YouTube} alt="YouTube" className="external-link"
              style={{ borderRadius: '25%', marginLeft: 0 }} />
            디지털아트페스티벌 유튜브
          </Link>

          <Link to="https://instagram.com/digitalartsfestival_sia"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={Instagram} alt="Instagram" className="external-link"
              style={{ borderRadius: '25%', marginLeft: 0 }} />
            디지털아트페스티벌 인스타그램
          </Link>

          <Link to="https://instagram.com/sia_digitalart"
            target="blank" rel="noreferrer noopener"
            className="button">
            <img src={Instagram} alt="Instagram" className="external-link"
              style={{ borderRadius: '25%', marginLeft: 0 }} />
            디지털아트 전공 학회 인스타그램
          </Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;