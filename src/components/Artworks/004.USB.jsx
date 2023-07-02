import React, { useRef, useEffect, useState } from 'react';

import Banner from '../../img/banner_004.jpg';


const Artwork004 = ({ isWideScreen, isNarrowScreen }) => {
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
          maxHeight: '800px',
          backgroundSize: `${bannerWidth}px ${bannerHeight}px`, // 배경 이미지 크기 조절
          backgroundPosition: `${isWideScreen ? '375px' : 0} ${isWideScreen ? 0 : '75px'}`,
          position: 'relative'
        }}>
        <div className="banner-overlay"
          style={{
            backdropFilter: `blur(${blurAmount}px)`,
          }} />
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 100px)',
            left: '0',
            bottom: '0',
            padding: `${isNarrowScreen ? '400px 75px 0 25px' : '400px 50px 0 50px'}`,
            backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1))`,
            textShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          }}>
          <h1>04. 고민 담아가기</h1>
          <p>
            USB 플래시 메모리와 컴퓨터로 이루어진, &lt;당기시오&gt;에서의 경험을 마무리하는 작품
          </p>
        </div>
      </div>
      <div className="main-content">
        <h2>작품 설명</h2>
          <p>
            <strong>&lt;고민 담아가기&gt;</strong>는 USB 플래시 메모리와 컴퓨터로 이루어진, &lt;당기시오&gt;에서의 경험을 마무리하는 작업이다. <br />
            컴퓨터에 연결된 USB에는 ‘고민중’이 전시를 위해 고민해 온 기록이 담겨 있다. <br />
            관객은 USB를 하나씩 지니고 전시 &lt;당기시오&gt;를 떠난다. <br />
            USB는 관객이 재사용할 수 있다.
          </p>
        <h2>작품 작가노트</h2>
        <p>
          모든 사람들은 각자 다른 세상을 산다. <br />
          그럼에도 우리는 기억을 공유하며 공감대를 형성하고, 유사한 경험을 바탕으로 유대를 쌓는다. <br />
          경험하지 못한 시간을 온전히 전달하는 방법으로 데이터를 꼽았다.<br />
          <br />
          USB 메모리는- 이동식 저장장치이다. <br />
          기억을, 즉 시간을 저장한다. <br />
          데이터 조각을 담아서 다른 이에게 온전히 전달한다. <br />
          <br />
          관객은 허브에서 USB를 당겨 뽑음으로써 ‘고민중’의 시간을 전해받는다. <br />
          그리고 언젠가는 이 장치에 관객만의 기억을, 시간을 담을 것이다.<br />
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

export default Artwork004;