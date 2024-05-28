import React from 'react';
import YouTube from 'react-youtube';

import Banner from '../Banner';

import bannerImg from '../../img/statement/banner_statement.JPG'

const Statement = ({ isWideScreen, isNarrowScreen }) => {

  return (
    <div>

      <Banner
        imagePath={bannerImg}
        isWideScreen={isWideScreen}
        isNarrowScreen={isNarrowScreen}
        title="<당기시오> 작가 노트"
      />

      <main className='main-content'>

        <h1>고민중의 ‘당기시오’는-</h1>
        <p>팀 고민중은 전시 &lt;당기시오&gt;를 통해 각 작가가 소망했던 무언가를 ‘당겨오는’ 경험을 공유한다.
          <br /><br />
          무언가를 당긴다는 것은 우리에게 있어 가장 일상적인 행위이나 동시에 가장 와닿지 않는 힘이기도 하다. 단적인 예시로 편의점에 들어갈 때가 있다. ‘당기시오’라는 글자를 제대로 읽지 않아서 문을 밀어버리고, 도어스톱에 가로막힌 유리벽이 나에게 충격을 주는 경우가 이것이다.
          <br />
          돌이켜보면 당긴다는 행위는 이미 주변에 만연하다. 은행 창구의 번호표를 뽑는 것이나, 오래된 서랍을 열어보는 것, 줄자를 꺼내 측량하거나 심지어는 문을 여는 행위까지. 사람들은 언제나 무언가를 당기고 있다.
          <br /><br />
          그렇다면 ‘왜 당길까’?
          <br />
          나는 무언가를 원할 때 당긴다. 휴면계좌에 담긴 몇만 원을 인출하기 위하여, 서랍 속의 볼펜을 꺼내어 쓰기 위하여, 작품 전시를 위한 실측에 나서거나 그저 집 밖을 잠시 나가고 싶을 때 당긴다. 그리하여 원하는 것을 얻기 위해 당기는 것이다.
          <br />
          작품을 설계하며 가장 길게 고민했던 지점은 ‘무엇을 욕망하는가’에 가깝다. 사람이 무언가를 원할 때 당긴다면, 내가 가지지 못했던-그러나 아주 간절히 욕망했던-무언가를 당겨볼 수 있는 작품을 만들어보고 싶었다. 그러니까, <strong>아무리 당겨보려 해도 좀처럼 다가오질 않는 것들</strong>을 말이다.

          그걸 당길 수 있으면 좋겠다.</p>

          <div className="divide" />
          <h1>아카이빙 영상</h1>
          <YouTube
              videoId='LfcHTssjon8'
              opts={{
                width: "960",
                height: "540",
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                  modestbranding: 1,
                }
              }}
              onEnd={(e) => { e.target.stopVideo(0); }}
            />
      </main>
    </div>
  );
};

export default Statement;