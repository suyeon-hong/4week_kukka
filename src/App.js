import { Component } from '@/components/core';
import { GNB } from './components/base';
import { IFrame } from '@/components/base';
import { Banner } from '@/components/domain';
import { Footer } from '@/components/domain';

export default class App extends Component {
  template() {
    return `
      <header class="header"></header>
      <div class="IFrame"></div>
      <main class="main"></main>
      <footer class="footer"></footer>
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('.header');
    const $IFrame = this.$target.querySelector('.IFrame');
    const $main = this.$target.querySelector('.main');
    const $footer = this.$target.querySelector('.footer');
    
    new GNB($header);
    new IFrame($IFrame);
    new Banner($main);
    new Footer($footer);
  }
}
