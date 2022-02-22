import { Component } from '@/components/core';
import { GNB } from './components/base';
import { Banner } from '@/components/domain';
import { Footer } from '@/components/domain';

export default class App extends Component {
  template() {
    return `
      <header class="header"></header>
      <main class="main"></main>
      <footer class="footer"></footer>
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('.header');
    const $main = this.$target.querySelector('.main');
    const $footer = this.$target.querySelector('.footer');
    
    new GNB($header);
    new Banner($main);
    new Footer($footer);
  }
}
