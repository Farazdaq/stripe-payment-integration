import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Ignore build output
  globalIgnores(["dist", "node_modules"]),

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      //  CODE CLEANLINESS

      "no-console": "warn",
      "no-debugger": "error",
      "no-unused-vars": "off", // handled by TS
      "@typescript-eslint/no-unused-vars": "warn",

      //  REACT MAINTAINABILITY

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Prevent bad React patterns
      "react-refresh/only-export-components": "warn",

      //  LOGIC SAFETY

      eqeqeq: ["error", "always"], // enforce ===
      "no-eval": "error",
      "no-implied-eval": "error",

      //  CODE STRUCTURE QUALITY

      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",

      //  READABILITY & MAINTAINABILITY

      "max-lines": ["warn", { max: 300 }],
      "max-depth": ["warn", 4],
      complexity: ["warn", 10],
    },
  },
]);
