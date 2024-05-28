import React from 'react';

import Banner from '../Banner';

import bannerImg from '../../img/000/banner_000.JPG';
import img01 from '../../img/000/img_01.jpg';
import img02 from '../../img/000/img_02.JPG';
import img03 from '../../img/000/img_03.JPG';
import img04 from '../../img/000/img_04.JPG';
import img05 from '../../img/000/img_05.JPG';
import img06 from '../../img/000/img_06.JPG';
import img07 from '../../img/000/img_07.JPG';
import img08 from '../../img/000/img_08.JPG';
import img09 from '../../img/000/img_09.JPG';
import img10 from '../../img/000/img_10.JPG';
import img11 from '../../img/000/img_11.JPG';


const Artwork000 = ({ isWideScreen, isNarrowScreen }) => {

  return (
    <div>
      <Banner
        imagePath={bannerImg}
        isWideScreen={isWideScreen}
        isNarrowScreen={isNarrowScreen}
        title="03. 봄 맞이하기"
        description="스크린과 빔 프로젝터, 센서와 밧줄로 구성한 작업"
      />

      <main className="main-content">
        <h2>작품 설명</h2>
        <p>
          <strong>&lt;봄 맞이하기&gt;</strong>는 스크린과 빔 프로젝터, 센서와 밧줄로 구성한다. <br />
          밧줄을 당기는 관객의 힘에 따라 스크린에 투사되는 공간의 계절과 기후, 시간대 등이 변한다. <br />
          관객은 밧줄을 강하게 당기다가 놓아볼 수도, 힘을 주거나 풀면서 이를 반복해볼 수도 있다.
        </p>
        
        <h2>작품 작가노트</h2>
        <p>
          가끔 시간이 빠르게 흐른다는 것을 깨닫는다. <br />
          바삐 오가던 퇴근길이 문득 달라보이는 날이나, 어느새 밤바람이 차가워졌음을 알고 놀라는 때가 그렇다. <br />
          <br />
          시간은 조금씩, 그러나 확실히 흐른다. <br />
          가끔은 붙잡고 싶을 때가 있다. <br />
          돌려내거나 흘려내고 싶은 적도 많다. <br />
          <br />
          <strong>&lt;봄 맞이하기&gt;</strong>는 이렇게 만들었다. <br />
          <br />
          <strong>&lt;봄 맞이하기&gt;</strong>는 관객의 신체를 강하게 연결함으로써 시간을 움직이는 비현실적 경험을 현실과 이어보는 시도이다. <br />
          말 그대로 시간을 ‘당겨오는’ 느낌을 연출하고자 한다. <br />
          직접, 힘들게, 무겁게! <br />
          <br />
          어두운 겨울밤을 흘려내면 따뜻한 봄날이 있다. <br />
        </p>
        <div className="divide" />
        <h2>작품 이미지</h2>
        <container style={{ justifyContent: 'center' }}>
          <img src={bannerImg} alt='작품 이미지 00' style={{width: '25vw'}}></img>
          <img src={img01} alt='작품 이미지 01' style={{width: '25vw'}}></img>
          <img src={img02} alt='작품 이미지 02' style={{width: '25vw'}}></img>
          <img src={img03} alt='작품 이미지 03' style={{width: '25vw'}}></img>
          <img src={img04} alt='작품 이미지 04' style={{width: '25vw'}}></img>
          <img src={img05} alt='작품 이미지 05' style={{width: '25vw'}}></img>
          <img src={img06} alt='작품 이미지 06' style={{width: '25vw'}}></img>
          <img src={img07} alt='작품 이미지 07' style={{width: '25vw'}}></img>
          <img src={img08} alt='작품 이미지 08' style={{width: '25vw'}}></img>
          <img src={img09} alt='작품 이미지 09' style={{width: '25vw'}}></img>
          <img src={img10} alt='작품 이미지 10' style={{width: '25vw'}}></img>
          <img src={img11} alt='작품 이미지 11' style={{width: '25vw'}}></img>
        </container>
        <p>
        </p>
      </main>
    </div>
  );
};

export default Artwork000;