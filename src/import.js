import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    name: "sycamore/import",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({ alwaysTryTypes: true }),
      ],
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import-x/no-empty-named-blocks": ["error"],
      "import-x/no-extraneous-dependencies": ["error"],
      "import-x/no-absolute-path": ["error"],
      "import-x/no-cycle": ["error"],
      "import-x/no-dynamic-require": ["error"],
      "import-x/no-internal-modules": ["error"],
      "import-x/consistent-type-specifier-style": ["error"],
      "import-x/extensions": ["error", "never", { json: "always" }],
      "import-x/first": ["error"],
      "import-x/no-default-export": ["error"],
    },
  },
  {
    name: "sycamore/import/config-files",
    files: ["**/eslint.config.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      "import-x/no-default-export": "off",
    },
  },
];
