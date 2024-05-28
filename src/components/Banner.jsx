import React, { useEffect, useRef, useState } from 'react';

const Banner = ({ imagePath, isWideScreen, isNarrowScreen, title, description }) => {
  const bannerRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState((isWideScreen ? window.innerWidth - 375 : window.innerWidth));
  const [bannerHeight, setBannerHeight] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const image = new Image();
    image.src = imagePath;

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
  }, [imagePath, isWideScreen]);

  return (
    <div className="banner"
      ref={bannerRef}
      style={{
        backgroundImage: `url(${imagePath})`,
        width: `${bannerWidth}px`,
        height: `${bannerHeight}px`,
        maxHeight: '800px',
        backgroundSize: `${bannerWidth}px ${bannerHeight}px`,
        backgroundPosition: `${isWideScreen ? '375px' : 0} ${isWideScreen ? 0 : '75px'}`,
        position: 'relative'
      }}>
      <div className="banner-overlay"
      style={{
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blurAmount}px)`,
      }} />
      <div style={{
        position: 'absolute',
        width: 'calc(100% - 100px)',
        left: '0',
        bottom: '0',
        padding: `${isNarrowScreen ? '400px 75px 0 25px' : '400px 50px 0 50px'}`,
        backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1))`,
        textShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
      }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;