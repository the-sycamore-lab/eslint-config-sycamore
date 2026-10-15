import tseslint from "typescript-eslint";

export default [
  {
    name: "sycamore/base",
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.*"],
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
];
