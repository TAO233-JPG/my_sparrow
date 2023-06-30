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
  },
};
