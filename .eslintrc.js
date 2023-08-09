module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    // 'React' must be in scope when using JSX 에러 지우기(Next.js)
    "react/react-in-jsx-scope": "off",
    // ts파일에서 tsx구문 허용(Next.js)
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }], // should add ".ts" if typescript project
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unknown-property": ["error", { ignore: ["css"] }], // emotion css prop error 제거
    "import/prefer-default-export": "off", // export가 1개 있을 때 발생하는 에러 제거  https://stackoverflow.com/questions/52627477/eslint-prefer-default-export-import-prefer-default-export
    // don't use {} 제거
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "react/require-default-props": "off", // https://stackoverflow.com/questions/63696724/eslint-problem-with-default-props-in-functional-component-typescript-react
    "no-restricted-syntax": "off",
    "no-plusplus": "off", // https://stackoverflow.com/questions/65628948/eslint-error-unary-operator-used-no-plusplus
    "no-nested-ternary": "off", // 삼항연산자 중첩 금지 해제
    "no-console": "off", // console.log 에러 해제
    "no-alert": "off", // alert 에러 해제
    "@typescript-eslint/no-explicit-any": "off", // err any 타입 에러 해제
    "@typescript-eslint/no-non-null-assertion": "off", // 접미사 연산자를 사용하여 null이 아닌 어설션을 허용하지 않습니다
    "consistent-return": "off", // consistent-return 해제
    "react/no-array-index-key": "off", // map 안에서 key로 index 사용하지 못하게 하는 에러 해제
    "prefer-destructuring": "off", // https://eslint.org/docs/latest/rules/prefer-destructuring
    "jsx-a11y/label-has-associated-control": "off", // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
    "no-shadow": "off", // https://typescript-eslint.io/rules/no-shadow/
    "@typescript-eslint/no-shadow": "off", // https://typescript-eslint.io/rules/no-shadow/
    "no-lonely-if": "off", // https://eslint.org/docs/latest/rules/no-lonely-if
  },
};
