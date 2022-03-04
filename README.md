# 바닐라자바스크립트로 구현한 꽃 판매 사이트

👉 [회고록 바로가기](https://velog.io/@suyeon-hong/4%EC%A3%BC%EC%B0%A8-%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9%EC%BD%94%EC%8A%A4-%ED%9A%8C%EA%B3%A0)

![1](https://user-images.githubusercontent.com/78653426/156376790-35ed5729-1c6f-4a89-8926-31fb67e56bc9.png)


<br>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/4week_kukka.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start:webpack
```

<br>


### 📝 기능 목록 명세
- 최신 문법의 자바스크립트 코드를 ie8버전으로 컴파일하기 위해 babel을 사용했습니다. 
```js
// babel.config.json
{
  "presets": [["@babel/preset-env", { "targets": {"ie": 8} }]]
}
```
또한 postcss의 autoprefixer 기능을 활용하여 각 브라우저의 벤더 프리픽스를 자동으로 붙여주었습니다. 
```js
// postcss.config.js
module.exports = {
  plugins: [require('autoprefixer')],
};

// package.json
 "browserslist": [
    "> 1%",
    "last 2 versions",
    "ie 8 - 10"
  ],

// webpack.config.js
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
      publicPath: '.',
      },
    },
    'css-loader',
    'postcss-loader',
  ],
```
마지막으로 css 압축과 JS 문법 컴파일, 각 loader 들을 한꺼번에 처리하기 위해 webpack을 사용하였습니다.

### ✨ 역할

#### ✔ 김지영

- 프로젝트 기초 세팅, webpack, babel, postcss 설정
- `Banner`, `Carousel` 컴포넌트 구현

#### ✔ 고병표

- `Youtube` , `Popup` 컴포넌트 구현

#### ✔ 유제호

- `Header` 컴포넌트 구현, webpack 설정, 배포

#### ✔ 홍수연

- `Footer` 구현, 컴포넌트 병합

<br>
<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── babel.config.json
├── package.json
├── postcss.config.js
├── src
│   ├── App.js
│   ├── components
│   ├── global.css
│   ├── index.html
│   ├── main.js
│   ├── pages
│   ├── public
│   ├── reset.css
│   └── utils
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```
