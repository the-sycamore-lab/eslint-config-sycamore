import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    name: "sycamore/misc",
    rules: {
      "max-lines": ["error"],
      "max-lines-per-function": ["error"],
      "max-statements": ["error"],
      "max-depth": ["error"],
      "max-nested-callbacks": ["error"],
      complexity: ["error"],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      "@typescript-eslint/prefer-readonly": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_" },
      ],
    },
  },
];
