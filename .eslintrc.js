// https://eslint.org/docs/user-guide/configuring

/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: { browser: true, es6: true, jquery: true, mocha: true },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential", "@vue/standard"],
  settings: { 'import/resolve': { 'extensions': ['.vue', '.js'] } },
  plugins: ["vue"],
  rules: {
    'yoda': ["error","always"],
    "vue/max-attributes-per-line": ['off'],
    // don't require .vue extension when importing
    "import/extensions": ["warn", "ignorePackages", { vue: "never" , js: "never" }],

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow alignment of import from statement, allow alignment of assignment in variables
    "no-multi-spaces": ["error", { exceptions: { "VariableDeclarator": true, "ImportDeclaration": true} }],
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off",
        "vue/script-indent": ["error", 2, { "baseIndent": 1 }]
      }
    }
  ]
};
