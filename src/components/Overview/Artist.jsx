import React from 'react';

import { Link } from 'react-router-dom';

import Banner from '../Banner';

import bannerImg from '../../img/artist/banner_artist.jpg'

import Instagram from '../../img/Instagram.png';
import YouTube from '../../img/YouTube.png';

import 이세찬 from '../../img/이세찬.jpg';
import 양선아 from '../../img/양선아.jpg';
import 이은정 from '../../img/이은정.jpg';
import 김동호 from '../../img/김동호.jpg';
import 김태균 from '../../img/김태균.jpg';

const Artist = ({ isWideScreen, isNarrowScreen }) => {
  return (
    <div>

      <Banner
        imagePath={bannerImg}
        isWideScreen={isWideScreen}
        isNarrowScreen={isNarrowScreen}
        title="팀 고민중 및 작가 소개"
      />

      <main className='main-content'>

        <h1>작가 소개</h1>

        <div className='profile'>
          <img className='profile-image'
            src={이세찬} alt='이세찬'></img>

          <div className='profile-text'>
            <h3>팀장 이세찬 (일세찬)</h3>
            <h4>영상학부 디지털아트전공 2023012<br />
              기획, 아트, 테크 등 총괄</h4>
            <p><strong>작가의 말: </strong><br />
              여전히 고민중입니다.  
            </p>

              <h4>작가 링크</h4>
            <Link title='인스타그램 @1il.sechan'
              to='https://instagram.com/1il.sechan'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={Instagram} alt='Instagram' className='external-link' />
              인스타그램
            </Link>
            <Link title='유튜브 1IL 일세찬'
              to='https://www.youtube.com/@1ilsec'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={YouTube} alt='YouTube' className='external-link' />
              유튜브
            </Link>
          </div>
        </div>

        <div className='profile'>
          <img className='profile-image'
            src={양선아} alt='양선아'></img>

          <div className='profile-text'>
            <h3>팀원 양선아</h3>
            <h4>영상학부 디지털아트전공 2023011<br />
              아트 및 테크 담당</h4>
            <p><strong>작가의 말: </strong><br />
              무사히 졸업할 수 있게 해주세요
            </p>

              <h4>작가 링크</h4>
            <Link title='인스타그램 @xiaoshanshann'
              to='https://instagram.com/xiaoshanshann'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={Instagram} alt='Instagram' className='external-link' />
              인스타그램
            </Link>

          </div>
        </div>

        <div className='profile'>
          <img className='profile-image'
            src={이은정} alt='이은정'></img>
          <div className='profile-text'>
            <h3>팀원 이은정</h3>
            <h4>영상학부 디지털아트전공 2123041<br />
              아트 및 테크 담당</h4>
            <p><strong>작가의 말: </strong><br />
              희망을 찾아온 공간에서 절망을 만났습니다.
            </p>

              <h4>작가 링크</h4>
            <Link title='인스타그램 @ejeong_99'
              to='https://instagram.com/ejeong_99'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={Instagram} alt='Instagram' className='external-link' />
              인스타그램
            </Link>
          </div>
        </div>

        <div className='profile'>
          <img className='profile-image'
            src={김동호} alt='김동호'></img>

          <div className='profile-text'>
            <h3>팀원 김동호</h3>
            <h4>영상학부 디지털아트전공 2223014<br />
              기획 및 아트 담당</h4>
            <p><strong>작가의 말: </strong><br />
              -
            </p>

              <h4>작가 링크</h4>
            <Link title='인스타그램 @sa_gum'
              to='https://instagram.com/sa_gum'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={Instagram} alt='Instagram' className='external-link' />
              인스타그램
            </Link>

          </div>
        </div>

        <div className='profile'>
          <img className='profile-image'
            src={김태균} alt='김태균'></img>
          <div className='profile-text'>
            <h3>팀원 김태균</h3>
            <h4>영상학부 디지털아트전공 2223007<br />
              테크 담당</h4>
            <p><strong>작가의 말: </strong><br />
              학교에 들어온 이후 처음 경험하는 제작 전시입니다. <br />
              처음이어도 잘하고 싶었습니다. <br />
              팀원들과 참 많이 고민했고, 열심히 했습니다.
            </p>

              <h4>작가 링크</h4>
            <Link title='인스타그램 @ktk_ring'
              to='https://instagram.com/ktk_ring'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={Instagram} alt='Instagram' className='external-link' />
              인스타그램
            </Link>
            <Link title='유튜브 반지 RING'
              to='https://youtube.com/@ktk_ring'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={YouTube} alt='YouTube' className='external-link' />
              유튜브
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artist;