# Project Instructions

## Symbols MCP

Always use `symbols-mcp` tools (e.g. `search_symbols_docs`, `get_sdk_reference`, `get_project_rules`, `audit_component`, etc.) when working on this project. Before writing or modifying any component, consult Symbols documentation and framework rules to ensure compliance with the Symbols.app design-system framework and DOMQL v3 syntax.

## Symbols / DOMQL v3 — Rules

You are working inside a **Symbols/DOMQL v3** project. These rules are absolute and override any general coding instincts. Violations cause silent failures (black page, nothing renders).

### 1. Components are OBJECTS — never functions

```js
// CORRECT
export const Header = { extends: 'Flex', padding: 'A' }

// WRONG
export const Header = (el, state) => ({ padding: 'A' })
```

### 2. NO imports between project files — EVER

Components reference each other by PascalCase key name in the tree. No `import` statements between `components/`, `pages/`, `functions/`, etc.

```js
// WRONG
import { Navbar } from './Navbar.js'

// CORRECT — just use the key name in the tree
Nav: { extends: 'Navbar' }
```

### 3. `components/index.js` — use `export *` NOT `export * as`

```js
// CORRECT
export * from './Navbar.js'

// WRONG — breaks component resolution
export * as Navbar from './Navbar.js'
```

### 4. Pages extend `'Page'`, not `'Flex'` or `'Box'`

### 5. `pages/index.js` — imports ARE allowed here (it's the registry)

```js
import { main } from './main.js'
export default { '/': main }
```

### 6. Tab/view switching — use DOM IDs + a function, NOT reactive `display` bindings

### 7. `el.call('fn', arg)` — element is `this` inside the function, NOT the first arg

### 8. Icon rendering — use `Svg` atom with `html` prop, NEVER `Icon` inside `Button`

### 9. Use `align` not `flexAlign` for Flex shorthand (v3 rule)

### 10. State — use `s.update()`, never mutate directly

### 11. v3 syntax — never use v2

| v3 | v2 (wrong) |
|---|---|
| `extends: 'X'` | `extend: 'X'` |
| `childExtends: 'X'` | `childExtend: 'X'` |
| `onClick: fn` | `on: { click: fn }` |
| props flattened at root | `props: { ... }` wrapper |

### 12. All folders are flat — no subfolders

### 13. `childExtends` — MUST be a named component string, never an inline object

### 14. Color tokens — NO opacity modifier syntax (`color: 'white .7'` is invalid)

### 15. Border shorthand — split into individual props (`borderWidth`, `borderStyle`, `borderColor`)

## Project structure

```
├── index.js              # entry: import { create } from 'smbls'
├── context.js            # wires everything together
├── state.js              # export default { ... }
├── config.js             # framework config flags
├── dependencies.js       # export default { ... }
├── components/           # flat, export * from each file
├── pages/                # import + export default { '/': page }
├── functions/            # export * from each file
├── designSystem/         # theme, colors, typography, etc.
└── files/                # embedded assets as base64 JS modules
```
