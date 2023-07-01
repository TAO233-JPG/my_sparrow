module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },

  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.config.js"],
      },
    ],
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-restricted-syntax": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "no-sequences": 0,
    "no-loop-func": 0,
    "no-nested-ternary": 0,
    "object-curly-newline": 0,
    "comma-dangle": 0,
  },
};
