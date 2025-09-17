import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },


  ...tseslint.configs.recommended,


  {
    files: ["tests/**/*.{ts,js}"],
    plugins: { playwright },
    rules: { ...playwright.configs.recommended.rules },
  },


  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
