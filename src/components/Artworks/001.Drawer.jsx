import React from 'react';
import YouTube from 'react-youtube';

import Banner from '../Banner';

import bannerImg from '../../img/001/banner_001.JPG';
import img01 from '../../img/001/img_01.JPG';
import img02 from '../../img/001/img_02.JPG';
import img03 from '../../img/001/img_03.JPG';
import img04 from '../../img/001/img_04.JPG';
import img05 from '../../img/001/img_05.JPG';
import img06 from '../../img/001/img_06.JPG';
import img07 from '../../img/001/img_07.JPG';
import img08 from '../../img/001/img_08.JPG';
import img09 from '../../img/001/img_09.JPG';
import img10 from '../../img/001/img_10.JPG';
import img11 from '../../img/001/img_11.JPG';


const Artwork001 = ({ isWideScreen, isNarrowScreen }) => {

  return (
    <div>
      <Banner
        imagePath={bannerImg}
        isWideScreen={isWideScreen}
        isNarrowScreen={isNarrowScreen}
        title="01. 서랍 당겨보기"
        description="낡은 서랍과 센서, 스피커로 이루어진 작업"
      />

      <main className="main-content">
        <h2>작품 설명</h2>
        <p>
          <strong>&lt;서랍 당겨보기&gt;</strong>는 낡은 서랍과 센서, 스피커로 이루어진 작업이다. <br />
          서랍 안에는 오랜 세월이 지난 듯 먼지 쌓인 물건들이 있다. <br />
          서랍을 열면, 바다나 숲과 같은 소리가 관객 주위로 들려온다.
        </p>

        <h2>작품 작가노트</h2>
        <YouTube
          videoId='zR-CMXw8-ts'
          opts={{
            width: "540",
            height: "540",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            }
          }}
          onEnd={(e) => { e.target.stopVideo(0); }}
        />
        <div className='caption'>패닉, &lt;내 낡은 서랍속의 바다&gt;, 1998</div>
        <p>
          어릴 적의 나에게 가장 큰 영감이 되던 것은 거실 책상 위 스피커에서 흘러나오던 어머니의 블로그 배경음악이었다. <br />
          패닉의 1998년작 &lt;내 낡은 서랍 속의 바다&gt;를 좋아하셨다. <br />
          이제 막 산수를 배우는 나이부터 이 노래의 가사를 외워 부르곤 했다. <br />
          <br />
          <strong>&lt;서랍 당겨보기&gt;</strong>는 패닉의 노랫말에서 영감을 받은 작업물이다. <br />
          <br />
          어린 시절부터 간직한 당신의 낡은 서랍 속에는 순수했던 자신만의 바다가 있을 것이다. <br />
          그 때에는 참 꿈이 많았고, 내일을 걱정하지 않았다. <br />
          <br />
          서랍 속에 무엇이 있을지는 모르겠다. <br />
          나의 책상을 당기면 오래된 지우개와 공책 몇 권, 연필 같은 것이 바다처럼 밀려온다. <br />
          당신의 낡은 서랍 속에는 어떤 바다가, 어떤 숲이 있을까. <br />
          <br />
          그러니까 어떤 그리움과 추억이 있을까.<br />
          <br />
          <strong>&lt;서랍 당겨보기&gt;</strong>는 낡은 서랍 속 바다를 가진 당신을 위한 작업물이다.
          <br />
          <br />
          <br />
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

export default Artwork001;