import { Component } from '@/components/core';
import { Footer } from '@/components/base';

export default class App extends Component {
  template() {
    return `
      <footer class="footer"></footer>
    `;
  }

  mounted() {
    const $footer = this.$target.querySelector('.footer');

    new Footer($footer);
  }
}
