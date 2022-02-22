import { Component } from '@/components/core';
import { Banner, Carousel } from '@/components/domain';

export default class App extends Component {
  template() {
    return `
      <header id="header"></header>
      <div id="main" aria-role="main">
        <div id="carousel" aria-role="carousel"></div>
        <div id="banner" aria-role="banner"></div>
      </div>
      <footer id="footer"></footer>
    `;
  }

  mounted() {
    const $carousel = this.$target.querySelector('#carousel');
    const $banner = this.$target.querySelector('#banner');

    new Carousel($carousel);
    new Banner($banner);
  }
}
