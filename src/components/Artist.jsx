import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../img/seoularts.png';

import 이세찬 from '../img/이세찬.jpg';
import 양선아 from '../img/양선아.jpg';
import 이은정 from '../img/이은정.jpg';
import 김동호 from '../img/김동호.jpg';
import 김태균 from '../img/김태균.jpg';

const Artists = () => {
  return (
    <div title='고민중 소개'
      description='작가에 관한 설명'>
      <div className='main-content'>
        <h1>팀 고민중 및 작가 소개</h1>

        <div className='divide' />

        <h2>팀 소개</h2>
        <h3>고민중</h3>
        <h4>CONSIDERING</h4>
        <p>팀 고민중은 미디어아트 작가로서 현대사회의 당위적인 가치와 미적 경험에 대한 고민을 표현하는 예술 작품을 창조하는 예술가들의 모임이다.<br />
          고민중은 독특한 형식과 도전적인 콘셉트를 바탕으로 만들어진 미디어아트를 작업한다.<br />
          &lt;당기시오&gt;는 시각, 청각, 감각을 자극하고 관객의 관찰과 상호작용을 유도하는 다양한 매체와 기술을 활용한다.<br />
          팀 고민중은 매체를 통해 인간의 내면과 외면, 개인과 사회, 기술과 자연 등의 이중성과 충돌을 탐구한다.
          <br /><br />
          팀 고민중의 작품들은 단순한 시각적 효과를 초월하여 심도 있는 메시지와 감성적인 경험을 전달한다.<br />
          &lt;당기시오&gt;는 작품의 형식과 콘텐츠 사이의 조화와 긴장감을 통해 관객에게 독특한 체험을 선사한다.<br />
          이 작품들은 종종 첨단 기술과 예술적 표현의 융합을 통해 현대사회의 복잡한 문제와 도전에 대한 사유를 제시한다.<br />
          <br />
          팀 고민중의 &lt;당기시오&gt;는 창조적이고 혁신적인 미디어아트 작품으로서, 예술과 기술의 경계를 모호하게 만들면서 관객에게 새로운 시각과 경험을 제공한다.<br />
          &lt;당기시오&gt;는 팀 고민중의 예술적 열망과 도전적인 정신을 표현하는 작품들의 집합체로서, 관객들에게 영감과 환기를 주며, 예술과 사회의 상호작용을 통해 더 나은 미래를 모색하고자 한다.
          <br /><br />
          <strong>위 문장들은 ChatGPT를 통해 임의로 생성한 더미 텍스트입니다.<br />
            !! 확정된 문구 아님 !!</strong>
        </p>

        <div className='divide' />

        <h2>작가 소개</h2>

        <div className='profile'>
          <img className='profile-image'
            src={이세찬} alt='이세찬'></img>

          <div className='profile-text'>
            <h3>팀장 이세찬</h3>
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
              <img src={logo} alt='Instagram' className='external-link' />
              인스타그램
            </Link>
            <Link title='유튜브 1IL 일세찬'
              to='https://www.youtube.com/@1ilsec'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={logo} alt='Instagram' className='external-link' />
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
              <img src={logo} alt='Instagram' className='external-link' />
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
              <img src={logo} alt='Instagram' className='external-link' />
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
              <img src={logo} alt='Instagram' className='external-link' />
              인스타그램
            </Link>
            <Link title='유튜브 사금'
              to='https://youtube.com/@user-fk7be1gc7j'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={logo} alt='Instagram' className='external-link' />
              유튜브
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
              <img src={logo} alt='Instagram' className='external-link' />
              인스타그램
            </Link>
            <Link title='유튜브 반지 RING'
              to='https://youtube.com/@ktk_ring'
              target='blank' rel='noreferrer noopener'
              className='button'
              style={{ display: 'flex', margin: 0 }}>
              <img src={logo} alt='Instagram' className='external-link' />
              유튜브
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;