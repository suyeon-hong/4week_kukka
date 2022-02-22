import { Component } from '@/components/core';
import { Banner, Carousel, Footer } from '@/components/domain';
import { GNB, IFrame, Popup } from './components/base';

export default class App extends Component {
  template() {
    return `
      <header class="header"></header>
      <div class="main" aria-role="main">
        <div class="IFrame"></div>
        <div class="carousel" aria-role="carousel"></div>
        <div class="banner" aria-role="banner"></div>
      </div>
      <footer class="footer" aria-role="footer"></footer>
<!--      <aside class="popup"></aside>-->
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('.header');
    const $IFrame = this.$target.querySelector('.IFrame');
    const $carousel = this.$target.querySelector('.carousel');
    const $banner = this.$target.querySelector('.banner');
    const $footer = this.$target.querySelector('.footer');
    const $popup = this.$target.querySelector('.popup');

    new GNB($header);
    new IFrame($IFrame);
    new Carousel($carousel);
    new Banner($banner);
    new Footer($footer);
    new Popup($popup);
  }
}
