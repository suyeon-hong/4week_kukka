import { Component } from '@/components/core';
import { END_POINT } from '@/utils/constants';
import './Carousel.css';
import './TagList.css';

const getColor = (location) => {
  switch (location) {
    case '광화문점':
      return 'gwang';
    case '잠실점':
      return 'jam';
    case '월계점':
      return 'wolgye';
    case '구로점':
      return 'guro';
    case '부산동래점':
      return 'dongrae';
    default:
      return '';
  }
};

export default class Carousel extends Component {
  setup() {
    this.$state = {
      main: {
        id: 1,
        src: './images/carousel1.jpeg',
        link: `${END_POINT}/class/contents/381/`,
        desc: '매주 새로운 커리큘럼으로 배우는',
        title: '플라워 클래스 자세히 보기',
      },
      items: [
        {
          id: 2,
          src: './images/carousel2.jpeg',
          link: `${END_POINT}/class/contents/401/`,
          title: '오아시스 리스(2/21~2/27)',
          price: '79,000원',
          tags: [
            {
              location: '광화문점',
              link: `${END_POINT}/class/contents/398/`,
            },
            {
              location: '잠실점',
              link: `${END_POINT}/class/contents/399/`,
            },
            {
              location: '월계점',
              link: `${END_POINT}/class/contents/400/`,
            },
            {
              location: '구로점',
              link: `${END_POINT}/class/contents/401/`,
            },
            {
              location: '송파점',
              link: `${END_POINT}/class/contents/402/`,
            },
            {
              location: '부산동래점',
              link: `${END_POINT}/class/contents/403/`,
            },
          ],
        },
        {
          id: 3,
          src: './images/carousel3.jpeg',
          link: `${END_POINT}/class/contents/408/`,
          title: '클래식 핸드타이드(2/28~3/6)',
          price: '79,000원',
          tags: [
            {
              location: '잠실점',
              link: `${END_POINT}/class/contents/405/`,
            },
            {
              location: '월계점',
              link: `${END_POINT}/class/contents/406/`,
            },
            {
              location: '구로점',
              link: `${END_POINT}/class/contents/407/`,
            },
            {
              location: '송파점',
              link: `${END_POINT}/class/contents/408/`,
            },
            {
              location: '부산동래점',
              link: `${END_POINT}/class/contents/409/`,
            },
          ],
        },
      ],
    };
  }
  template() {
    const { main, items } = this.$state;
    const { id, src, link, title, desc } = main;

    return `
    <h3 class="title">
      <span>꽃과 함께 하는 일상,</span><strong>플라워클래스</strong>
      <button class="more">더보기</button>
    </h3>
    <div class="carousel-wrapper">
      <div class="carousel-nav-button" aria-role="nav">
        <button class="prev" aria-label="이전으로"></button>
        <button class="next" aria-label="다음으로"></button>
      </div>
    <div data-id="${id}" class="carousel-active">
    <a href=${link} class="active-link">
      <img class="active-thmbnail" src=${src} alt=${desc} aria-hidden/>
      <h3 class="active-info">
        <p class="active-desc">${desc}</p>
        <strong class="active-title">${title}</strong>
      </h3>
    </a>
    </div>
    <ul class="carousel-list">
    ${items
      .map(
        ({ id, src, link, title, price, tags }) => `
      <li data-id='${id}' class="carousel-item">
        <a href=${link} class="carousel-link">
        <img class="carousel-thmbnail" src="${src}" alt="${desc}" aria-hidden />
        </a>
        <div class="carousel-info">
          <p class="carousel-title">${title}</p>
          <strong class="carousel-price">${price}</strong>
          <ul class="tag-list">
            ${tags
              .map(
                ({ location, link }) => `
              <li class="tag-item">
                <a href=${link} class="tag-link">
                  <button class="tag-button ${getColor(
                    location
                  )}">${location}</button>
                </a>
              </li>
              `
              )
              .join('')}
          </ul>
       </div>
      </li>
    `
      )
      .join('')}
  </ul>
  </div>
 `;
  }
}
