import React, { useRef, useEffect, useState } from 'react';

import Banner from '../../img/banner_002.jpg';

const Artwork002 = ({ isWideScreen }) => {
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
          <h1>02. 문 열어보기</h1>
          <p>가벽, 문과 센서, 빔 프로젝터로 구성한 작업</p>
        </div>
      </div>
      <div className="main-content">
        <h2>작품 설명</h2>
        <p><strong>&lt;문 열어보기&gt;</strong>는 가벽, 문과 센서, 빔 프로젝터로 구성한 작업이다. <br />
          문을 열면 틈새로 빛이 새어나온다. <br />
          빛은 극적으로 번쩍이기도 하고 조용한 순간을 그려내기도 한다. <br />
          관객은 문을 처음 바라볼 때, 문을 당길 때, 문이 완전히 열렸을 때의 순서로 변화하는 표현을 마주할 수 있다.
        </p>

        <h2>작품 작가노트</h2>
        <p>
          문 밖에는 우리가 두려워하는 것들이 있다. <br />
          나의 경우에는, 문 바깥으로 나서는 순간부터 나를 잃어가는 느낌이 두렵다. <br />
          무의미한 시선, 빽빽한 도시의 풍경, 지하철과 선로가 맞물리는 소리나 지나가는 사람들의 웅성임…. 그래서 나는 나의 방으로 도망친다. <br />
          방문을 꼭 닫아놓고 농성한다.<br />
          <br />
          <strong>&lt;문 열어보기&gt;</strong>는 문 밖의 세상이 두려운 아무개를 위한 작업물이다. <br />
          그저 걷다가 바라본 하늘을 떠올리며 세상 밖을 마주해보는 것이다. 여전히 어렵지만 스스로 문을 열고 나가본다. <br />
          멀리 가두어 둔 문 밖의 것들과 당당히 마주해 보고자 한다.
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

export default Artwork002;