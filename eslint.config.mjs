// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginImport from "eslint-plugin-import";
import pluginUnusedImports from "eslint-plugin-unused-imports";

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      prettier: pluginPrettier,
      import: pluginImport,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      // ⚙️ Prettier
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: "all",
          printWidth: 80,
        },
      ],

      // 🚫 Remove imports não utilizados automaticamente
      "unused-imports/no-unused-imports": "error",

      // 📦 Ordenação de imports com quebra de linha entre grupos
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },

  // Ignorar pastas padrão
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // 🔧 Garante compatibilidade com Prettier
  prettier,
]);

export default eslintConfig;
