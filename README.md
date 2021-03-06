# π Sprout-Frontend

## π κ°μ(Summary)

κ°λ°μλ€μ μ€ν°λ νλ«νΌ

[Sprout-Backend repository](https://github.com/TEAM-ARK/sprout-backend)

---

<br />

## π― λͺ©ν(Objectives)

- ννλ‘μ νΈ λ° νμ κ²½ν
- Hard skill λ° Soft skill ν₯μ

---

<br />

## π κ°λ°κΈ°κ°(Develop period)

2021.12.05 ~ μ§νμ€

---

<br />

## π» λΌμ΄λΈλ¬λ¦¬ λ° κΈ°μ  μ€ν(Library & Stack)

- Language : Typescript
- Library : React.js
- React Framework : Next.js

---

<br />

## π ν  μΌ (Things to do)

- [x] νλ‘ νΈμλ μΈν : Next.js with Typescript, ESLint, Prettier ...
- [ ] λ©μΈ νμ΄μ§
- [ ] νμκ°μ νμ΄μ§
- [ ] μ€ν°λ λͺ¨μ§ νμ΄μ§
- [ ] Header, Footer layout

---

<br />

## β¨ μ£Όμ κΈ°λ₯

- λ°μν μΉ νμ΄μ§
- SSR

---

<br />

## π μμ λ΄μ©

<details>
<summary>2021.12.05 (λν)</summary>

## κ°λ° νκ²½ μΈν

- Next.js with Typescript, ESLint, Prettier μ€μΉ([WIKI](<https://github.com/TEAM-ARK/sprout-front/wiki/%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0(Next.js-with-Typescript,-ESLint,-Prettier)>)μ μ€μΉ κ³Όμ  μ λ¦¬)
- Sprout-Front readme.md μμ±
- git repositoryμ project μμ±
- branch λ³΄νΈ μ μ±(Branch protection rule)μ masterμ develop λ λ€ μ μ©

</details>

<details>
<summary>2021.12.23 (λν)</summary>

## Ant Design μ€μΉ

- \_app.tsx μμ±
  - `Prop spreading is forbidden` κ²½κ³ λ‘ μΈν΄ .eslintrc.jsμ rulesμ `'react/jsx-props-no-spreading': 'off'` μΆκ°νμ¬ λ μ΄μ κ²½κ³ λ λνλμ§ μκ² μ€μ 
- Ant Design μ€μΉ ([WIKI](https://github.com/TEAM-ARK/sprout-front/wiki/Ant-Design-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)μ μ μ© κ³Όμ  μ λ¦¬)

</details>

<details>
<summary>2022.01.05,15,23 / 02.05~6  (λν)</summary>

## Desktop λͺ¨λμ Navigation bar κ΅¬ν

- [νλ‘ν νμ λμμΈ](https://github.com/TEAM-ARK/sprout-front/wiki/%5B%EB%94%94%EC%9E%90%EC%9D%B8%5D%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%84%A4%EA%B3%84#%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80)μ λ§μΆ°μ UI κ΅¬ν

  ### κ΅¬ννλ©΄μ λ°μν μλ¬

  - \_app.tsxμ '../components/AppLayout' λΆλΆμ `Unable to resolve path to module '../components/AppLayout'.eslint import/no-unresolved`μλ¬κ° λ°μν΄μ .eslint.jsμ settingμ import/resolver μ΅μμ μΆκ°νμ¬ λ¬Έμ λ₯Ό ν΄κ²°ν¨.
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
  - \_app.tsxμ '../components/AppLayout' λΆλΆμ `Missing file extension for "../components/AppLayout"eslint import/extensions` μλ¬κ° λ°μνμ¬ .eslint.jsμ rulesμ import/extensions μ΅μμ μΆκ°νμ¬ λ¬Έμ λ₯Ό ν΄κ²°ν¨.

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

  - \_app.tsxμμ style λΆλΆμ `Type 'string' is not assignable to type 'TextAlign'.`μ `Type 'string' is not assignable to type 'Position'.` λΌλ typescript μλ¬κ° λ°μν¨.
    textAlignκ³Ό positionμ νμμ΄ stringμ΄ μλ string literal typeμΌλ‘ λμ΄ μμ΄μ `'center'`λ `'absolute'`μ κ°μ κ°μ΄ νλμ νμμ΄μλλ° μ΄λ¬ν κ°μ μ λλ‘ μλ ₯ν΄μ€λ κ³μ μμ κ°μ μλ¬κ° λ°μν¨.
    κ·Έλμ κ° λ€μ `as const`λ₯Ό μλ ₯ν΄μ£Όλ λ¬Έμ κ° ν΄κ²°λ¨.
    ```javascript
    position: 'absolute' as const,
    textAlign: 'center' as const,
    ```
    `as const`λ const assertionλ‘ μ»΄νμΌλ¬μκ² λλ κ°μ₯ κ΅¬μ²΄μ μΈ μ νμ μ μΆνλΌκ³  μ§μνκ²λ νλ κ².
    μ°Έκ³  λ§ν¬: https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case

## ν΄λ κ΅¬μ‘° λ³κ²½

- μμ€ μ½λλ₯Ό κ΄λ¦¬νλ src ν΄λλ₯Ό μμ±ν ν κΈ°μ‘΄ pages ν΄λλ₯Ό μ΄λ μν΄.

## Typescript Path Alias μ€μ 

- κΈΈμ΄μ§λ κ²½λ‘λͺμ λ³΄λ€ κ°νΈνκ³  κΉλνκ² μμ±νκΈ° μν΄ Typescript Typescript Path Aliasλ₯Ό μ€μ νμ¬ '../components/AppLayout'μ΄ μλ '@components/AppLayout'μ²λΌ μμ±ν  μ μκ² ν¨.
- μλ μ΅μμ μΆκ°νκΈ° μ , .eslint.jsμ settingμ 'import/resolver' μ΅μμ μΆκ°ν΄μ€μΌ ν¨. (μμμ μ λ¦¬ν 'import/resolver' λ΄μ© μ°Έκ³ )
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
