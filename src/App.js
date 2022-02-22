import { Component } from '@/components/core';
import { Banner } from '@/components/domain';
import { GNB } from './components/base';

export default class App extends Component {
  template() {
    return `
      <header class="header"></header>
      <main class="main"></main>
      <footer class="footer"></footer>
    `;
  }

  mounted() {
    const $main = this.$target.querySelector('.main');
    const $header = this.$target.querySelector('.header');
    new GNB($header);
    new Banner($main);
  }
}
