# 📚 Sprout-Frontend

## 📖 개요(Summary)

개발자들의 스터디 플랫폼

[Sprout-Backend repository](https://github.com/TEAM-ARK/sprout-backend)

---

<br />

## 🎯 목표(Objectives)

- 팀프로젝트 및 협업 경험
- Hard skill 및 Soft skill 향상

---

<br />

## 📆 개발기간(Develop period)

2021.12.05 ~ 진행중

---

<br />

## 💻 라이브러리 및 기술 스택(Library & Stack)

- Language : Typescript
- Library : React.js
- React Framework : Next.js

---

<br />

## 📑 할 일 (Things to do)

- [x] 프론트엔드 세팅 : Next.js with Typescript, ESLint, Prettier ...
- [ ] 메인 페이지
- [ ] 회원가입 페이지
- [ ] 스터디 모집 페이지
- [ ] Header, Footer layout

---

<br />

## ✨ 주요 기능

- 반응형 웹 페이지
- SSR

---

<br />

## 📗 작업 내용

<details>
<summary>2021.12.05 (나현)</summary>

## 개발 환경 세팅

- Next.js with Typescript, ESLint, Prettier 설치([WIKI](<https://github.com/TEAM-ARK/sprout-front/wiki/%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0(Next.js-with-Typescript,-ESLint,-Prettier)>)에 설치 과정 정리)
- Sprout-Front readme.md 생성
- git repository에 project 생성
- branch 보호 정책(Branch protection rule)을 master와 develop 둘 다 적용

</details>

<details>
<summary>2021.12.23 (나현)</summary>

## Ant Design 설치

- \_app.tsx 생성
  - `Prop spreading is forbidden` 경고로 인해 .eslintrc.js의 rules에 `'react/jsx-props-no-spreading': 'off'` 추가하여 더 이상 경고나 나타나지 않게 설정
- Ant Design 설치 ([WIKI](https://github.com/TEAM-ARK/sprout-front/wiki/Ant-Design-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)에 적용 과정 정리)

</details>

<details>
<summary>2022.01.05,15,23 / 02.05~6  (나현)</summary>

## Desktop 모드의 Navigation bar 구현

- [프로토타입 디자인](https://github.com/TEAM-ARK/sprout-front/wiki/%5B%EB%94%94%EC%9E%90%EC%9D%B8%5D%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%84%A4%EA%B3%84#%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80)에 맞춰서 UI 구현

  ### 구현하면서 발생한 에러

  - \_app.tsx의 '../components/AppLayout' 부분에 `Unable to resolve path to module '../components/AppLayout'.eslint import/no-unresolved`에러가 발생해서 .eslint.js의 setting에 import/resolver 옵션을 추가하여 문제를 해결함.
    ```javascript
    module.exports = {
      ...,
      settings: {
        ...,
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
      }
    }
    ```
  - \_app.tsx의 '../components/AppLayout' 부분에 `Missing file extension for "../components/AppLayout"eslint import/extensions` 에러가 발생하여 .eslint.js의 rules에 import/extensions 옵션을 추가하여 문제를 해결함.

    ```javascript
    module.exports = {
      ...,
      rules: {
        ...,
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      }
    }
    ```

  - \_app.tsx에서 style 부분에 `Type 'string' is not assignable to type 'TextAlign'.`와 `Type 'string' is not assignable to type 'Position'.` 라는 typescript 에러가 발생함.
    textAlign과 position은 타입이 string이 아닌 string literal type으로 되어 있어서 `'center'`나 `'absolute'`와 같은 값이 하나의 타입이었는데 이러한 값을 제대로 입력해줘도 계속 위와 같은 에러가 발생함.
    그래서 값 뒤에 `as const`를 입력해주니 문제가 해결됨.
    ```javascript
    position: 'absolute' as const,
    textAlign: 'center' as const,
    ```
    `as const`는 const assertion로 컴파일러에게 또는 가장 구체적인 유형을 유추하라고 지시하게끔 하는 것.
    참고 링크: https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case

## 폴더 구조 변경

- 소스 코드를 관리하는 src 폴더를 생성한 후 기존 pages 폴더를 이동 시킴.

## Typescript Path Alias 설정

- 길어지는 경로명을 보다 간편하고 깔끔하게 작성하기 위해 Typescript Typescript Path Alias를 설정하여 '../components/AppLayout'이 아닌 '@components/AppLayout'처럼 작성할 수 있게 함.
- 아래 옵션을 추가하기 전, .eslint.js의 setting에 'import/resolver' 옵션을 추가해줘야 함. (위에서 정리한 'import/resolver' 내용 참고)
  ```json
  // tsconfig.json
  {
    "compilerOptions": {
      ...,
      "baseUrl": ".",
      "paths": {
         "@components/*": ["src/components/*"]
       }
    }
  }
  ```
  </details>
