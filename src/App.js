import { Component } from '@/components/core';
import { Banner, Carousel, Footer } from '@/components/domain';
import { GNB, IFrame, Popup } from './components/base';
import './global.css';
import './reset.css';

export default class App extends Component {
  template() {
    return `
      <div class="header" aria-role="header"></div>
      <div class="main" aria-role="main">
        <div class="popup" aria-role="aside"></div>
        <div class="IFrame"></div>
        <div class="carousel" aria-role="carousel"></div>
        <div class="banner" aria-role="banner"></div>
      </div>
      <div class="footer" aria-role="footer"></div>
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
