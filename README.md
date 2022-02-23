# 목표는 취업이조 2팀

<br>

## 🚀 정보

- [배포주소 바로가기](https://quizzical-carson-b46780.netlify.app/)
- [노션 바로가기](https://github.com/wanted-team2/4week_kukka.git)

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

## 😎 팀원

| [김지영(팀장)](https://github.com/Jeong-jeong)                                                                                    | [고병표](https://github.com/kokoball)                                                                                            | [유제호](https://github.com/ludacirs)                                                                                           | [홍수연](https://github.com/suyeon-hong)                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/68528752/153546074-abd9a7df-771c-4f14-8a2f-a77246210b1c.jpeg" width="400px"/> | <img src="https://user-images.githubusercontent.com/68528752/153546140-b58f43fe-4730-46ca-bfda-0b048f36d24f.JPG" width="400px"/> | <img src="https://user-images.githubusercontent.com/68528752/153545718-c688e091-53a3-4e30-97fd-a2f00ab97aa8.JPG" width="400px"> | <img src="https://user-images.githubusercontent.com/68528752/153545721-ecc413f4-9d1b-45e0-9909-423c27128b1c.jpeg" width="400px"> |
|                                                                                    |                                                                                                                                  |                                                                                                                                 |                                                                                                                                  |

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
