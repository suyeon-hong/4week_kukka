import { Component } from '@/components/core';

export default class IFrame extends Component {
  template() {
    return `
      <div class="IFrameWrapper">
        <caption>
          <a href="https://www.youtube.com/watch?v=4-eFPCvI1yk">
            <p class="IFrameTitle">이유 없이 꽃을 선물해봤다(feat.꾸까)</p>
          </a>
        </caption>
        <iframe class="IFrame" src="https://www.youtube.com/embed/4-eFPCvI1yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  }
}
