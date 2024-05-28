import React from 'react';

import Banner from '../Banner';

import bannerImg from '../../img/004/banner_004.JPG';
import img01 from '../../img/004/img_01.JPG';
import img02 from '../../img/004/img_02.JPG';
import img03 from '../../img/004/img_03.JPG';
import img04 from '../../img/004/img_04.JPG';
import img05 from '../../img/004/img_05.JPG';
import img06 from '../../img/004/img_06.JPG';
import img07 from '../../img/004/img_07.JPG';


const Artwork004 = ({ isWideScreen, isNarrowScreen }) => {

  return (
    <div>
      <Banner
        imagePath={bannerImg} 
        isWideScreen={isWideScreen} 
        isNarrowScreen={isNarrowScreen} 
        title="04. 고민 담아가기" 
        description="USB 플래시 메모리와 컴퓨터로 이루어진, &lt;당기시오&gt;에서의 경험을 마무리하는 작품" 
      />

      <main className="main-content">
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
        <container style={{ justifyContent: 'center' }}>
          <img src={bannerImg} alt='작품 이미지 00' style={{width: '25vw'}}></img>
          <img src={img01} alt='작품 이미지 01' style={{width: '25vw'}}></img>
          <img src={img02} alt='작품 이미지 02' style={{width: '25vw'}}></img>
          <img src={img03} alt='작품 이미지 03' style={{width: '25vw'}}></img>
          <img src={img04} alt='작품 이미지 04' style={{width: '25vw'}}></img>
          <img src={img05} alt='작품 이미지 05' style={{width: '25vw'}}></img>
          <img src={img06} alt='작품 이미지 06' style={{width: '25vw'}}></img>
          <img src={img07} alt='작품 이미지 07' style={{width: '25vw'}}></img>
        </container>
        <p>
        </p>
      </main>
    </div>
  );
};

export default Artwork004;