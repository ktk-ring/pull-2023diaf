import React, { useRef, useEffect, useState } from 'react';

import Banner from '../../img/banner_000.jpg';


const Artwork000 = ({ isWideScreen }) => {
  const bannerRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState((isWideScreen ? window.innerWidth - 375 : window.innerWidth));
  const [bannerHeight, setBannerHeight] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const image = new Image();
    image.src = Banner;

    image.onload = () => {
      const width = image.width;
      const height = image.height;
      const calculatedWidth = (isWideScreen ? window.innerWidth - 375 : window.innerWidth); // 가로 크기 계산

      setBannerWidth(calculatedWidth);
      setBannerHeight((calculatedWidth / width) * height); // 이미지 비율에 맞게 높이 계산
    };

    const handleResize = () => {
      const calculatedWidth = (isWideScreen ? window.innerWidth - 375 : window.innerWidth); // 가로 크기 계산

      setBannerWidth(calculatedWidth);
      setBannerHeight((calculatedWidth / image.width) * image.height); // 이미지 비율에 맞게 높이 계산
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bannerTop = bannerRef.current.offsetTop;
      const bannerBottom = bannerTop + bannerRef.current.offsetHeight;
      const currentBlurAmount = (scrollY - bannerTop) / (bannerBottom - bannerTop); // 스크롤 백분율 계산

      if (currentBlurAmount >= 0 && currentBlurAmount <= 1) {
        setBlurAmount(20 * currentBlurAmount); // 스크롤 백분율을 상태에 업데이트
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isWideScreen]);

  return (
    <div>
      <div className="banner"
        ref={bannerRef}
        style={{
          backgroundImage: `url(${Banner})`,
          width: `${bannerWidth}px`,
          height: `${bannerHeight}px`,
          maxHeight: '1000px',
          backgroundSize: `${bannerWidth}px ${bannerHeight}px`, // 배경 이미지 크기 조절
          backgroundPosition: `${isWideScreen ? '375px' : 0} ${isWideScreen ? 0 : '75px'}`,
          position: 'relative'
        }}>
        <div className="banner-overlay"
          style={{
            width: '100%',
            height: '100%',
            backdropFilter: `blur(${blurAmount}px)`,
          }} />
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 100px)',
            left: '0',
            bottom: '0',
            padding: '400px 50px 0 50px',
            backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1))`,
            textShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          }}>
          <h1>03. 봄 맞이하기</h1>
          <p>스크린과 빔 프로젝터, 센서와 밧줄로 구성한 작업</p>

        </div>
      </div>
      <div className="main-content">
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
        <img src={Banner} alt='작품 이미지 01' style={{width: '50vw'}}></img>
        <p>
        </p>
      </div>
    </div>
  );
};

export default Artwork000;