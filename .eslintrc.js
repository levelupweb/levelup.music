module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-indent": 0,
    "indent": 0,
    "no-tabs": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "arrow-parens": 0,
    "jsx-a11y/href-no-hash": 0,
    "no-console": 0,
    "no-else-return": 0,
    "react/jsx-filename-extension": 0,
    "comma-dangle": 0,
    "global-require": 0,
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};