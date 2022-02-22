import { Component } from '@/components/core';

export default class Popup extends Component {
  template() {
    return `
        <a href="#popupBox" class="openBtn" style="display:none;"></a>
        <div id="popupBox" class="popupWrapper" style="display:block;">
          <div class="popupInner">
            <img class="popupImg" src="./images/popupimg.png" alt="">
            <div class="closeBox">
              <div>              
                <button type="button" class="blankBtn">X</button>
                <span class="closeText">오늘은 더 이상 보지 않기</span>
              </div>
              <button type="button" class="closeBtn">X</button>            
            </div>
          </div>
        </div>
    `;
  }

  setEvent() {
    window.onload = function () {
      var target = document.querySelectorAll('.openBtn');
      var popupBtnClose = document.querySelectorAll('.popupWrapper .closeBox');

      for (var j = 0; j < target.length; j++) {
        popupBtnClose[j].addEventListener('click', function () {
          this.parentNode.parentNode.style.display = 'none';
        });
      }
    };
  }
}
