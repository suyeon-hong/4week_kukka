import { Component } from '@/components/core';
import './Popup.css';

export default class Popup extends Component {
  template() {
    return `
        <div id="popupBox" class="popupWrapper">
          <div class="popupInner">
            <img class="popupImg" src="./images/popupimg.png" alt="">
            <div class="btnBox">
              <div>              
                <input type="checkbox" id="check" />
                <label for="check">오늘은 더 이상 보지 않기</label>
              </div>
              <div class="closeBtn">
              </div>
            </div>
          </div>
        </div>
    `;
  }

  setEvent() {
    window.onload = function () {
      var isCookie = document.cookie.indexOf('isdone');
      var popupBox = document.querySelector('#popupBox');
      var closeBtn = document.querySelector('.closeBtn');
      var popupStyle = '';

      isCookie === -1 ? (popupStyle = 'block') : (popupStyle = 'none');
      popupBox.style.display = popupStyle;

      closeBtn.addEventListener('click', function (e) {
        var target = e.target.closest('#popupBox');
        target.style.display = 'none';

        if (target.querySelector('#check').checked) {
          var date = new Date();
          date.setDate(date.getDate() + 1);
          document.cookie = `cookie=isdone; path=/; expires=${date.toGMTString()}`;
        }
      });
    };
  }
}
