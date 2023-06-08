import React from 'react';

import 이세찬 from '../img/이세찬.png';
import 양선아 from '../img/양선아.png';
import 이은정 from '../img/이은정.png';
import 김동호 from '../img/김동호.png';
import 김태균 from '../img/김태균.png';

const Artists = () => {
  return (
    <div title="고민중 소개"
      description="작가에 관한 설명">
      <div>
        <h1>팀 고민중 및 작가 소개</h1>

        <div className="divide" />

        <h2>팀 소개</h2>
        <p>팀에 대한 세부 정보가 여기에 들어갑니다.</p>

        <div className="divide" />

        <h2>작가 소개</h2>
        <p>작가에 대한 세부 정보가 여기에 들어갑니다.</p>

        <div className="profile">
          <img className="profile-image"
            src={이세찬}></img>
          <h3>일세찬</h3>
          <h4>팀장, 기획, 아트, 테크 등 총괄</h4>
          <p>세부 설명이 여기에 들어갑니다.</p>
        </div>

        <div className="profile">
          <img className="profile-image"
            src={양선아}></img>
          <h3>양선아</h3>
          <h4>아트, 테크</h4>
          <p>세부 설명이 여기에 들어갑니다.</p>
        </div>

        <div className="profile">
          <img className="profile-image"
            src={이은정}></img>
          <h3>이은정</h3>
          <h4>아트, 테크
          </h4>
          <p>세부 설명이 여기에 들어갑니다.</p>
        </div>

        <div className="profile">
          <img className="profile-image"
            src={김동호}></img>
          <h3>김동호</h3>
          <h4>기획, 아트</h4>
          <p>세부 설명이 여기에 들어갑니다.</p>
        </div>

        <div className="profile">
          <img className="profile-image"
            src={김태균}></img>
          <h3>김태균</h3>
          <h4>테크</h4>
          <p>세부 설명이 여기에 들어갑니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Artists;