import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import Banner from '../../img/banner_001.jpg';


const Artwork001 = ({ isWideScreen, isNarrowScreen }) => {
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
            padding: `${isNarrowScreen ? '400px 75px 0 25px' : '400px 50px 0 50px'}`,
            backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1))`,
            textShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          }}>
          <h1>01. 서랍 당겨보기</h1>
          <p>스크린과 빔 프로젝터, 센서와 밧줄로 구성한 작업</p>

        </div>
      </div>
      <div className="main-content">
        <h2>작품 설명</h2>
        <p>
          <strong>&lt;서랍 당겨보기&gt;</strong>는 낡은 서랍과 센서, 스피커로 이루어진 작업이다. <br />
          서랍 안에는 오랜 세월이 지난 듯 먼지 쌓인 물건들이 있다. <br />
          서랍을 열면, 바다나 숲과 같은 소리가 관객 주위로 들려온다.
        </p>

        <h2>작품 작가노트</h2>
        <YouTube
          videoId='iN9z5sfR6EI'
          opts={{
            width: "540",
            height: "540",
            playerVars: {
              autoplay: 0,
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
        <p>
        </p>
      </div>
    </div>
  );
};

export default Artwork001;