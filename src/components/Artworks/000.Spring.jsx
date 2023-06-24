import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import Banner from '../../img/이은정의흔적.png';

const Artwork000 = ({ isWideScreen, isNarrowScreen }) => {
  const bannerRef = useRef(null);
  const [bannerWidth, setBannerWidth] = useState((isWideScreen ? window.innerWidth - 375 : window.innerWidth));
  const [bannerHeight, setBannerHeight] = useState(0);

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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWideScreen]);

  return (
    <div title="03. 봄 맞이하기" description="봄 맞이하기에 관한 설명">
      <div
        className="banner"
        ref={bannerRef}
        style={{
          backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1)), url(${Banner})`,
          width: `${bannerWidth}px`,
          height: `${bannerHeight}px`,
          maxHeight: '1000px',
          backgroundSize: `${bannerWidth}px ${bannerHeight}px`, // 배경 이미지 크기 조절
          backgroundPosition: `${isWideScreen ? '375px' : 0} ${isWideScreen ? 0 : '75px'}`,
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          marginLeft: '50px',
          backgroundColor: `transparent`,
          textShadow: '0 0 15px rgba(0, 0, 0, 0.75)'
        }}>
          <h1>03. 봄 맞이하기</h1>
          <p>밧줄을 당겨서 봄을 맞이하는 작품.</p></div>
      </div>

      <div className="main-content">
        <h2>작품 작가노트</h2>

        <p>
          <YouTube
            style={{
              margin: '25px 0',
            }}
            videoId='iN9z5sfR6EI'
            title='내 낡은 서랍 속의 바다'
            opts={{
              width: "360",
              height: "360",
              playerVars: {
                autoplay: 0,
                loop: 1,
                rel: 0,
                modestbranding: 1,
              }
            }}
          />
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
      <div className="divide" />
        <h2>작품 이미지</h2>
          
        </p>
      </div>
    </div>
  );
};

export default Artwork000;