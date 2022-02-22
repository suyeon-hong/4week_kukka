import { Component } from '@/components/core';
import { Banner } from '@/components/domain';

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

    new Banner($main);
  }
}
