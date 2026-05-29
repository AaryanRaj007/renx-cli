# Active TypeScript Configuration Problems

This document explains the active TypeScript configuration problems detected in the project `tsconfig.json` files.

---

## 1. Missing Base Configuration: '@tsconfig/bun/tsconfig.json' Not Found
* **Files:**
  * [tsconfig.json](file:///c:/Users/aarya/Documents/ANTIGRAVITY_PROJECTZ/ThgMad/Renx-cli/renx/tsconfig.json) (Line 3)
  * [packages/renx/tsconfig.json](file:///c:/Users/aarya/Documents/ANTIGRAVITY_PROJECTZ/ThgMad/Renx-cli/renx/packages/renx/tsconfig.json) (Line 3)
* **Error Message:** `File '@tsconfig/bun/tsconfig.json' not found.`
* **Technical Explanation:**
  Both configurations use the `"extends"` property to inherit standard compilation options tailored for Bun from the `@tsconfig/bun` npm package. Since the project dependencies in `node_modules` are not fully installed or resolved, the TypeScript compiler cannot physically locate the `@tsconfig/bun` package directory or its `tsconfig.json` file.
* **How to Resolve:**
  1. Complete the installation of development dependencies by running the package manager installation script (e.g., `pnpm install` or `bun install`) to populate the `node_modules` directory with the `@tsconfig/bun` package.
  2. Alternatively, replace the `"extends"` line with inline compiler options equivalent to the Bun configuration target.

---

## 2. Invalid 'customConditions' Compiler Option
* **File:** [packages/renx/tsconfig.json](file:///c:/Users/aarya/Documents/ANTIGRAVITY_PROJECTZ/ThgMad/Renx-cli/renx/packages/renx/tsconfig.json) (Line 10)
* **Error Message:** `Option 'customConditions' can only be used when 'moduleResolution' is set to 'node16', 'nodenext', or 'bundler'.`
* **Technical Explanation:**
  The `customConditions` compiler option enables custom export map conditions (like `["browser"]`) during import resolution. However, TypeScript restricts this option to modern resolution algorithms (`node16`, `nodenext`, or `bundler`). In the current configuration, `"moduleResolution"` is either omitted or defaults to `"node"` (Node10), which is incompatible with modern conditions resolution.
* **How to Resolve:**
  Add `"moduleResolution": "bundler"` (or `"node16"` / `"nodenext"`) to the `"compilerOptions"` object inside [packages/renx/tsconfig.json](file:///c:/Users/aarya/Documents/ANTIGRAVITY_PROJECTZ/ThgMad/Renx-cli/renx/packages/renx/tsconfig.json):
  ```json
  "compilerOptions": {
    "moduleResolution": "bundler",
    "customConditions": ["browser"],
    ...
  }
  ```
