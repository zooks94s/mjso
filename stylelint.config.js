module.exports = {
  plugins: ["stylelint-scss"],
  rules: {
    /**
     * Built-in rules
     */

    /* color */
    "color-hex-case": "lower",
    "color-named": "never",
    "color-no-invalid-hex": true,

    /* font */
    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,

    /* function */
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-before": "never",
    "function-comma-space-after": "always",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "never",
    "function-whitespace-after": "always",

    /* string */
    "string-no-newline": true,

    /* length */
    "length-zero-no-unit": true,

    /* unit */
    "unit-case": "lower",
    "unit-no-unknown": true,

    /* value */
    "value-no-vendor-prefix": true,

    /* value list */
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",

    /* property */
    "property-case": "lower",
    "property-no-vendor-prefix": true,

    /* declaration */
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,

    /* declaration block */
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",

    /* block */
    "block-closing-brace-newline-after": [
      "always-multi-line",
      {
        ignoreAtRules: ["if", "else", "elseif"]
      }
    ],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-before": "always-multi-line",

    /* selector */
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-class-pattern": /^(?!^js-)/,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-max-type": 0,
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "selector-max-empty-lines": 0,

    /* selector list */
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",

    /* media */
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    /* at rule */
    "at-rule-name-case": "lower",

    /* comment */
    "comment-no-empty": true,

    /* space rule */
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ],

    /* general */
    indentation: 2,
    "max-nesting-depth": 4,
    "no-duplicate-selectors": true,
    "no-extra-semicolons": true,
    "no-unknown-animations": true,

    /**
     * stylelint-scss rules
     */
    "scss/selector-no-redundant-nesting-selector": true
  }
};
