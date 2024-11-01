import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: { 
      globals: globals.browser,
    },
    rules: {
      // ** Best Practices **
      "eqeqeq": "error", // Enforce using === and !==
      "curly": ["error", "all"], // Require consistent use of curly braces
      "no-multi-spaces": "error", // Disallow multiple spaces
      "no-eval": "error", // Disallow use of eval()

      // ** Variables **
      "no-unused-vars": ["warn", { vars: "all", args: "none", ignoreRestSiblings: true }], // Disallow unused variables
      "no-undef": "error", // Disallow the use of undeclared variables

      // ** Style **
      "indent": ["error", 2, { SwitchCase: 1 }], // Enforce consistent indentation
      "quotes": ["error", "double", { avoidEscape: true }], // Enforce single quotes with exceptions for avoiding escape
      "semi": ["error", "always"], // Require semicolons at the end of statements
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline statements
      "object-curly-spacing": ["error", "always"], // Enforce consistent spacing inside braces

      // ** ES6 **
      "prefer-const": "error", // Suggest using const where possible
      "arrow-spacing": ["error", { before: true, after: true }], // Enforce consistent spacing around arrow functions
      "no-var": "error", // Disallow var (use let or const instead)
      "no-duplicate-imports": "error", // Disallow duplicate imports

      // ** React Specific Rules (if applicable) **
      "react/jsx-uses-react": "off", // Disable react/jsx-uses-react for React 17+ (new JSX transform)
      "react/jsx-uses-vars": "error", // Prevent React variables being marked as unused
      "react/no-direct-mutation-state": "error", // Prevent state mutation directly
      "react/react-in-jsx-scope": "off", // Disable react-in-jsx-scope for React 17+ (new JSX transform)
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];