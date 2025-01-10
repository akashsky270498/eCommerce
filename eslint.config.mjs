import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ["dist", "node_modules", "documentation"],
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"), {
  plugins: {
    "@typescript-eslint": typescriptEslint,
  },

  languageOptions: {
    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignores: ["dist", "node_modules"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
}, {
  files: ["**/.eslintrc.{ts,js,cjs}"],

  languageOptions: {
    globals: {
      ...globals.node,
    },

    ecmaVersion: 5,
    sourceType: "commonjs",
  },
}];