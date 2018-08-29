module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  rules: {
    // Blank lines before or after certain statements.
    // Ref: https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      2,
      // Blank line before a `return` statement or a multi-line
      // block.
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'multiline-block-like']
      },
      // Blank line after a multi-line block.
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' }
    ],
    // These rules conflict with Prettier formatting and therefore need to be
    // disabled.
    // Ref: https://eslint.org/docs/rules/operator-linebreak
    // Ref: https://github.com/xjamundx/eslint-plugin-standard/blob/master/rules/computed-property-even-spacing.js
    'operator-linebreak': 0,
    'standard/computed-property-even-spacing': 0,
    // Blank line between class members.
    // Ref: https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': 2,
    // PropTypes validation does improve readability and understandability of
    // React components, but authoring and maintaining them everywhere is
    // unrealistic.
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,
    // This rule prevents using `setState` in the `componentDidUpdate` lifecycle
    // method. This comes from a good place but sometimes is necessary.
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 0
  }
}
