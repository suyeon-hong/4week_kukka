import { Component } from '@/components/core';

export default class Footer extends Component {
  template() {
    return `
      <div class="footerInner">
      <div>
        <ul class="icons">
          <li>
            <a href="https://ko-kr.facebook.com/kukka.kr/" class="facebook" target="_blank">
            페이스북
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kukkakorea/" class="instargram" target="_blank">
            인스타그램
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber" class="youtube" target="_blank">
            유튜브
            </a>
          </li>
        </ul>
        <div class="textWrapper">
          <h1>꾸까 고객센터</h1>
          <strong>1661-1031</strong>
          <span>(평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)</span>
          <a href="/" class="csBtn">꾸까 고객센터 ></a>
          <em>기업 제휴 문의:070-4238-8251</em>
        </div>
        <div class="logo">
        </div>
      </div>
      <div>
        <div>
          <address>
            <span>상호명: 꾸까(kukka)</span>
            <span>사업자등록번호: 264-81-32594</span>
            <span>대표자: 박춘화</span>
          </address>
          <address>
            <span>소재지: 서울시 서초구 남부순환로333길 10 kukka</span>
            <span class="pointer">기업공시</span>
            <span>통신판매신고번호 2018-서울서초-1692</span>
          </address>
          <p>&copy; 2014-2021 kukka, Inc. All rights reserved.</p>
        </div>
        <ul class="info">
          <li>
            <a href="/">이용약관</a>
          </li>
          <li>
            <a href="/">개인정보 처리방침</a>
          </li>
          <li>
            <a href="/">제휴안내</a>
          </li>
        </ul>
      </div>
      </div>
		`;
  }
}
