import { Component } from '@/components/core';
import './Banner.css';

export default class Banner extends Component {
  setup() {
    this.$state = {
      items: [
        {
          id: 1,
          src: './images/banner1.png',
          link: 'https://kukka.kr/brand/story/',
          direction: 'left',
          title: '꾸까 브랜드 이야기',
          desc: '꽃으로 라이프스타일을 만들어가는 <br /> kukka의 문화를 소개해요.',
          more: 'Brand story',
        },
        {
          id: 2,
          src: './images/banner2.png',
          link: 'https://kukka.kr/brand/showroom/',
          direction: 'right',
          title: '꾸까 오프라인 쇼룸',
          desc: '꽃을 가까이서 만져보고 향기도 맡아보고, <br /> 꽃 속에서 작은 휴식을 누릴 수 있는 kukka의 오프라인 쇼룸',
          more: '꾸까 쇼룸 안내',
        },
      ],
    };
  }

  template() {
    const { items } = this.$state;

    return `
		<div class="container-fluid">
			<ul class="row banner-list">
				${items
          .map(
            ({ id, src, link, direction, title, desc, more }) => `
					<li class="col-sm-6 banner-item" id='${id}'>
					<a href=${link} class="banner-link">
					<img class="banner-img" src="${src}" alt="" aria-hidden/>
					<div class="info ${direction}">
						<h2 class="banner-title">${title}</h2>
						<p class="banner-desc">${desc}</p>
						<button class="banner-more">${more}</button>
						</div>
						</a>
					</li>
				`
          )
          .join('')}
			</ul>
			</div>
		`;
  }
}
