import { Component } from '@/components/core';
import { IFrame } from '@/components/base';

export default class App extends Component {
  template() {
    return `
      <div class="IFrame"></div>
    `;
  }

  mounted() {
    const $IFrame = this.$target.querySelector('.IFrame');

    new IFrame($IFrame);
  }
}
