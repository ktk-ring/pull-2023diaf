import React, { useRef, useEffect, useState } from 'react';

import Banner from '../../img/banner_002.png';


const Artwork002 = ({ isWideScreen, isNarrowScreen }) => {
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
    <div title="02. 문 열어보기" description="문 열어보기에 관한 설명">
      <div
        className="banner"
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
        <div
          className="banner-overlay"
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
            padding: '400px 50px 25px 50px',
            backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1))`,
            textShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          }}>
          <h1>02. 문 열어보기</h1>
          <p>
            <strong>&lt;문 열어보기&gt;</strong>는 가벽, 문과 센서, 빔 프로젝터로 구성한 작업이다. <br />
            문을 열면 틈새로 빛이 새어나온다. <br />
            빛은 극적으로 번쩍이기도 하고 조용한 순간을 그려내기도 한다. <br />
            관객은 문을 처음 바라볼 때, 문을 당길 때, 문이 완전히 열렸을 때의 순서로 변화하는 표현을 마주할 수 있다.</p>
        </div>
      </div>
      <div className="main-content">
        <h2>작품 작가노트</h2>
        <p>
          가끔 시간이 빠르게 흐른다는 것을 깨닫는다. <br />
          바삐 오가던 퇴근길이 문득 달라보이는 날이나, 어느새 밤바람이 차가워졌음을 알고 놀라는 때가 그렇다. <br />
          <br />
          시간은 조금씩, 그러나 확실히 흐른다. <br />
          가끔은 붙잡고 싶을 때가 있다. <br />
          돌려내거나 흘려내고 싶은 적도 많다. <br />
          <br />
          <strong>&lt;문 열어보기&gt;</strong>는 이렇게 만들었다. <br />
          <br />
          <strong>&lt;문 열어보기&gt;</strong>는 관객의 신체를 강하게 연결함으로써 시간을 움직이는 비현실적 경험을 현실과 이어보는 시도이다. <br />
          말 그대로 시간을 ‘당겨오는’ 느낌을 연출하고자 한다. <br />
          직접, 힘들게, 무겁게! <br />
          <br />
          어두운 겨울밤을 흘려내면 따뜻한 봄날이 있다. <br />
        </p>
        <div className="divide" />
        <h2>작품 이미지</h2>
        <img src={Banner} style={{width: '50vw'}}></img>
        <p>
        </p>
      </div>
    </div>
  );
};

export default Artwork002;