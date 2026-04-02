# Agent Instructions

This is a **Symbols/DOMQL v3** project. Follow these rules strictly — violations cause silent failures (black page, nothing renders).

## MCP Server

This project uses the `symbols-mcp` MCP server. Configure it to access Symbols documentation, component generation, code conversion, and auditing tools.

### Codex MCP Configuration

Add to your `codex.json` or agent configuration:

```json
{
  "mcpServers": {
    "symbols-mcp": {
      "command": "uvx",
      "args": ["symbols-mcp"]
    }
  }
}
```

Available tools: `search_symbols_docs`, `get_sdk_reference`, `get_project_rules`, `audit_component`, `generate_component`, `generate_page`, `convert_html`, `convert_react`.

Always call `get_project_rules` before any code generation task.

## Critical Rules

1. **Components are OBJECTS** — never functions. `export const X = { extends: 'Flex' }`
2. **NO imports between project files** — components reference each other by PascalCase key name in the tree
3. **`components/index.js`** — use `export *` NOT `export * as` (breaks resolution)
4. **Pages extend `'Page'`** — not `'Flex'` or `'Box'`
5. **`pages/index.js`** — only file where cross-file imports are allowed
6. **v3 syntax only** — `extends` (not `extend`), `childExtends` (not `childExtend`), `onClick` (not `on: { click }`), props flattened (no `props: {}` wrapper)
7. **`flexAlign`** not `align` for Flex shorthand
8. **State** — use `s.update({})`, never mutate directly
9. **Icons** — use `Svg` atom with `html` prop, never `Icon` inside `Button`
10. **`childExtends`** — must be a named component string, never an inline object
11. **Color tokens** — no opacity modifier syntax (`color: 'white .7'` is invalid), define tokens in designSystem
12. **Border** — split into `borderWidth`, `borderStyle`, `borderColor` (shorthand renders as text)
13. **Flat folders** — no subfolders inside `components/`, `pages/`, `functions/`
14. **`el.call('fn', arg)`** — `this` is the element inside the function, not the first arg

## Project Structure

```
├── index.js              # entry: import { create } from 'smbls'
├── context.js            # wires state, components, pages, designSystem, etc.
├── state.js              # export default { ... }
├── config.js             # framework config flags
├── components/           # flat, export * from each file
├── pages/                # import + export default { '/': page }
├── functions/            # export * from each file
├── designSystem/         # theme, colors, typography, etc.
└── files/                # embedded assets as base64 JS modules
```
