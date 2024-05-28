import React from 'react';

import PULL_Poster from '../../img/PULL_poster.jpg'
import DIAF_Poster from '../../img/DIAF_poster.jpg'

const MainPage = ({ isWideScreen, isNarrowScreen }) => {
  return (
    <div className="main-content">
      <h1>팀 고민중 - 당기시오</h1>
      <h2>Team CONSIDERING - PULL</h2>
      
      <div className="divide" />
      <h2>전시 정보</h2>
      <div style={{ display: 'flex' }}>
        <div style={{
          marginRight: `${isWideScreen ? '50px' : '25px'}`
        }}>
          <img src={DIAF_Poster} alt='디지털아트페스티벌 포스터'
            style={{
              width: '28vw',
              minWidth: '100px',
              maxWidth: '620px'
            }} />
          {!isNarrowScreen &&
            <div className='caption'>
              디지털아트페스티벌: 멀티페어링
            </div>}
        </div>
        <div>
          <img src={PULL_Poster} alt='당기시오 포스터'
            style={{
              width: '28vw',
              minWidth: '100px',
              maxWidth: '620px'
            }} />
          {!isNarrowScreen &&
            <div className='caption'>
              고민중 - &lt;당기시오&gt;
            </div>}
        </div>
      </div>
      <h3>
        2023 디지털아트 페스티벌: 멀티페어링<br />
        2023 DIAF: MULTI-PAIRING
      </h3>
      <h3>
        2023.06.30 - 07.02 | 10:00 - 18:00<br />
        서울예술대학교 ATEC
      </h3>
      <h4>
        @digitalartsfestival_sia
      </h4>
    </div>
  );
};

export default MainPage;