# Framework Learnings - Deep Technical Findings

## 1. REGISTRY Blocks Content Update Cascade

**File**: `smbls/packages/element/mixins/registry.js`

The REGISTRY object defines properties that the update loop treats as built-in transformers and skips during recursive child iteration:

```js
export const REGISTRY = {
  attr, style, text, html, data,
  classlist: classList, state, scope,
  extends: {}, children: {}, content: {}, // <-- content is here!
  childExtends: {}, childExtendsRecursive: {},
  props: {}, if: {}, define: {}, ...
}
```

**Problem**: `content: {}` is in REGISTRY as an empty object. The update loop in `update.js` checks `isObject(REGISTRY[param])` and when it hits the `content` property on an element, it sees REGISTRY has `content` as `{}` (an object), so it skips it entirely. This means the **entire content subtree never receives update calls during state changes**.

**Impact**: Any element nested inside `content` (which is the primary child container in DOMQL) won't have its `beforeClassAssign` triggered, so functional CSS props (opacity, display, hide, etc.) never re-evaluate on state change.

**Fix applied** (`smbls/packages/element/update.js`): Added explicit content update logic after the main property loop:
```js
if (!preventContentUpdate) {
  const contentKey = ref.contentElementKey || 'content'
  const existingContent = element[contentKey]
  if (existingContent && existingContent.__ref && isFunction(existingContent.update)) {
    update.call(existingContent, params[contentKey], { ...options })
  } else {
    // fallback to setChildren/setContent
  }
}
```

---

## 2. onXxx Event Handlers Persist at Root Level After Propertization

**File**: `smbls/packages/utils/props.js` → `pickupPropsFromElement`

When elements are created via `children` arrays (e.g. city items in a dropdown), `onClick` handlers defined at root level are supposed to be moved to `on.click` by `propertizeElement`. However, for children created via `children` arrays, the `onClick` can persist at the element root level even after propertization.

**Problem**: During the update loop's `for (param in element)`, when it encounters a root-level `onClick` function, it calls `applyParam(param, element)` which internally does `exec(element[param], element)`. The `exec` calls `onClick(element, state, context)`, but the function signature expected `(event, element, state)` — so `state` becomes `context`, and `state.root.update(...)` crashes with `TypeError: Cannot read properties of undefined (reading 'update')`.

**Impact**: The crash in the update loop prevents subsequent operations (like `classlist` re-evaluation) from running, so CSS never updates.

**Fix applied** (`smbls/packages/element/update.js`): Skip `onXxx` event handler functions in the update property iteration:
```js
const isRootEventHandler = isFunction(prop) && param.length > 2 &&
  param.startsWith('on') && param[2] === param[2].toUpperCase()
// ...added to the continue conditions
```

---

## 3. Stale Emotion CSS Class Names Not Cleaned Up

**File**: `smbls/packages/emotion/index.js`

**The CSS-in-Props pipeline**:
1. `Box.onBeforeClassAssign` calls `useCssInProps(props, element)`
2. This **completely overwrites** `ref.__class` with fresh results
3. `transformEmotionClass` iterates `ref.__class` to generate Emotion CSS class names into `ref.__classNames`
4. `applyClassListOnNode` writes `__classNames` to the DOM node

**Problem**: When a CSS prop like `hide` transitions from truthy to falsy:
- The `CSS_PROPS_REGISTRY.hide` processor returns `{ display: 'none !important' }` when truthy
- When falsy, it returns `false` (from `!!exec(val) && ({display: 'none !important'})`)
- `usePropsAsCSS` checks `if (result)` and skips falsy — so `hide` is simply absent from the new `__class`
- `transformEmotionClass` only iterates `for (key in __class)` — never sees the missing `hide` key
- The OLD `smbls-xxx-hide` class name stays in `__classNames` and on the DOM forever

**Fix applied** (`smbls/packages/emotion/index.js`): Added stale className cleanup after the main loop:
```js
for (const key in __classNames) {
  if (key === 'classProps' || key === 'class') continue
  if (__class[key] === undefined) {
    delete __classNames[key]
  }
}
```

---

## 4. Directional Border Colors Don't Resolve Theme Tokens

**File**: `smbls/packages/css-in-props/src/props/theme.js` and `defaults.js`

**CSS-in-Props has two property resolution paths**:
1. **CSS_PROPS_REGISTRY** (theme.js, block.js): Processor functions that transform values (e.g. resolving theme colors via `getMediaColor`)
2. **DEFAULT_CSS_PROPERTIES_LIST** (defaults.js): Raw pass-through — value used as-is in CSS

**Problem**: Only the shorthand `borderColor` had a theme processor in `CSS_PROPS_REGISTRY`. The directional variants (`borderTopColor`, `borderBottomColor`, `borderLeftColor`, `borderRightColor`) were only in `DEFAULT_CSS_PROPERTIES_LIST`. When you wrote `borderTopColor: 'borderGray'`, the string `'borderGray'` was output directly as a CSS value. The browser doesn't understand it and falls back to `currentColor` (inheriting text color = black).

**Fix applied** (`smbls/packages/css-in-props/src/props/theme.js`): Added theme-aware processors for all directional variants:
```js
borderTopColor: (val, element) => {
  const globalTheme = getSystemGlobalTheme(element)
  if (!val) return
  return { borderTopColor: getMediaColor(val, globalTheme) }
},
// Same for borderBottomColor, borderLeftColor, borderRightColor
```

Since `CSS_PROPS_REGISTRY` is checked before `DEFAULT_CSS_PROPERTIES_LIST` in `usePropsAsCSS`, the new processors take priority.

---

## 5. Event Discovery: props.onClick Not Registered on DOM Nodes

**File**: `smbls/packages/element/event/on.js`

**Problem**: `applyEventsOnNode` only iterated `element.on` to register DOM event listeners. But `propertizeElement` moves root-level `onClick` to `props.onClick` (not to `on.click`). So elements with `onClick` defined in props never got their click handlers attached to DOM nodes.

**Fix applied**: Added a second pass in `applyEventsOnNode` that scans `props` for `onXxx` patterns:
```js
if (props) {
  for (const key in props) {
    if (key.length > 2 && key.startsWith('on') && isFunction(props[key])) {
      const eventName = key[2].toLowerCase() + key.slice(3)
      if (!handled.has(eventName)) registerNodeEvent(eventName, element, node, options)
    }
  }
}
```

---

## 6. SPA Routing Blocked by Capturing Click Listeners

**File**: `rita/index.js`

**Problem**: Rita's `index.js` had a document-level capturing click listener that intercepted ALL `<a>` clicks and forced `window.location.href = href`, bypassing DOMQL's SPA router.

**Fix**: Removed the capturing click listener. The remaining click listener only handles `<a href="#...">` anchor links for smooth scrolling (with `e.preventDefault()`).

---

## 7. Logo `<a>` Tag Needs preventDefault for SPA

**File**: `realhome/smbls/components/Navbar.js`

When a DOMQL component uses `tag: 'a'` with `attr: { href: '/' }` and also has an `onClick` handler, both the handler and the browser's default `<a>` navigation fire. The `onClick` must call `e.preventDefault()` to prevent a full page reload.

---

## Key Architecture Insights

### CSS-in-Props Resolution Order (in `usePropsAsCSS`)
1. `element.classlist[key]` — component-level class definitions
2. `CSS_PROPS_REGISTRY[key]` — theme-aware processors (color, border, shadow, hide, etc.)
3. `DEFAULT_CSS_PROPERTIES_LIST.includes(key)` — raw pass-through (no theme resolution)
4. Everything else → `rest` (returned as non-CSS props)

### Update Cascade Path (state change → CSS re-evaluation)
```
state.update()
  → applyElementUpdate
    → element.update({}, {updateByState: true})
      → for (param in element): update children recursively
      → [NEW] update content element explicitly (bypasses REGISTRY skip)
        → triggerEventOn('beforeClassAssign')
          → Box.onBeforeClassAssign
            → useCssInProps(props, element) → ref.__class = {...}
              → transformEmotionClass → ref.__classNames = {...}
                → [NEW] clean stale classNames
                  → applyClassListOnNode → node.setAttribute('class', ...)
```

### Emotion CSS Class Names
- Content-hashed: `{opacity: "0"}` and `{opacity: "1"}` produce different class names
- Format: `smbls-{hash}-{label}` (e.g. `smbls-g01xjr-opacity`)
- `hide` when truthy generates a class with `display: none !important`
- When `hide` is falsy, no class is generated — the stale one must be explicitly removed

---

## 8. CSS-in-Props Override Precedence

`props` block CSS **cannot** override base component-level CSS. Override must match the declaration level:
- Component-level `color: 'currentColor'` in Link → override with component-level `color: 'mediumBlue'`, NOT `props: { color: 'mediumBlue' }`
- Same rule applies to sub-component overrides in nested children

## 9. Emotion CSS Transitions Require Forced Reflow

DOMQL `state.root.update()` applies all Emotion classes in one JS block — browser never paints intermediate state. Use `node.offsetHeight` to force reflow between setting inline opacity:0 and clearing it to let Emotion class transition in. Don't use `requestAnimationFrame` (unreliable) or `transitionend` (may not fire if element starts hidden).

## 10. v3 Conditional Props Pattern

Use `isActive: (el, s) => boolean` + `'.isActive': { ... }` instead of `props: (el, s) => ({...spread})`. Default state goes at component level, active overrides in the `.isActive` block.

## 11. Button type Attribute — Dynamic Attrs Must Use `attr` Block

Functions at component level get stringified as HTML attributes. Dynamic HTML attribute functions must go in `attr: {}` block where DOMQL properly executes them. E.g., `type: ({ props }) => props.type` at component level → renders `type="({ props })=>props.type"`.

## 12. Component Key Auto-Extending

Child key matching a registered component name auto-extends. E.g., `Hgroup: { gap: '0' }` auto-extends the registered Hgroup component. Use explicit `extends` when key casing differs from component name.

## 13. state.root.update() with onlyUpdate

`state.root.update({ activeModal: true }, { onlyUpdate: 'ModalCard' })` — limits re-rendering to only the named component subtree for performance.

---

## 14. Cloning & Migrating Projects as Submodules (vdcapital, byld, 4it)

### Submodule Setup Pattern

All three projects are git submodules added to the monorepo at `/Users/nikoloza/www/next/`:

| Project | Remote | Branch | .git file |
|---------|--------|--------|-----------|
| vdcapital | `symbo-ls/examples` | `vdcapital` | `gitdir: ../.git/modules/vdcapital` |
| byld | `the-most-responsive/byld` | `feature/variables` | `gitdir: ../.git/modules/byld` |
| 4it | `the-most-responsive/4it` | main (default) | `gitdir: ../.git/modules/4it` |

Each has a local `next` branch checked out for monorepo integration work.

### Standard Project Skeleton

All migrated projects follow this structure:
```
project/
├── .git                    # File (not dir) — submodule gitdir reference
├── .eslintrc               # {"extends": "@symbo.ls"}
├── .gitignore              # node_modules, dist, .parcel-cache
├── package.json            # @symbo.ls/starter-kit-{name}, smbls@^3.4.11, parcel@^2.16.4
├── symbols.json            # key, bundler: "parcel", optional dir/version/branch
├── symbols/                # Main app code
│   ├── index.js            # Entry: create(app, context)
│   ├── app.js              # Root app definition with router
│   ├── index.html          # Parcel entry point
│   ├── config.js           # globalTheme ("light" or "dark")
│   ├── context.js          # Re-exports all modules for create()
│   ├── state.js            # App state data
│   ├── dependencies.js     # External lib imports (or empty {})
│   ├── sharedLibraries.js  # Shared lib imports
│   ├── pages/              # Route pages + index.js with route map
│   ├── components/         # Custom components + index.js
│   ├── designSystem/       # COLOR, THEME, FONT, TYPOGRAPHY, SPACING, etc.
│   ├── files/              # Assets as .js modules (e.g. logo.png.js)
│   ├── functions/          # Utility functions
│   ├── snippets/           # Reusable snippets
│   └── methods/            # Custom methods
```

### Router Patterns

Three different router patterns observed:

1. **vdcapital**: Routes defined in `pages/index.js`, router function called inline
2. **byld**: Routes in `pages/index.js`, separate `router.js` wrapping pages in `Layout` with `Folder > Top/Cnt/Bottom` nesting
3. **4it**: Routes + `pageComponents` exported from `pages/index.js`, simplified `router.js` with `Layout > Content` (no Folder nesting)

### Parcel Configuration

- Default Parcel works for most projects
- **byld** requires custom `.parcelrc` for font/SVG handling:
  - `.woff2`, `.otf` → `@parcel/transformer-raw`
  - `.svg` → `@parcel/transformer-inline-string`

### symbols.json Variations

```json
// vdcapital (full)
{ "key": "vdcapital.symbo.ls", "version": "1.0.23", "branch": "main", "dir": "symbols", "bundler": "parcel" }

// byld (minimal)
{ "key": "byld.symbo.ls", "bundler": "parcel" }

// 4it (with dir)
{ "key": "4it.symbo.ls", "dir": "./symbols" }
```

### Naming Convention

Package names follow `@symbo.ls/starter-kit-{project}` pattern. Scripts always: `start` → `smbls start`, `build` → `smbls build`.

### Migration Gotchas

- **4it has dual structure**: Both `src/` (legacy, uses `@domql/utils` directly) and `symbols/` (current v3). The `src/` is the pre-migration version; `symbols/` is the migrated code. Both coexist.
- **vdcapital's wrangler.jsonc** has wrong name (`"realhome"` instead of `"vdcapital"`) — copy-paste artifact
- **vdcapital's launch.json** also has wrong name (`"rita-dev"` instead of vdcapital) — another copy-paste issue
- All projects use v3 syntax natively (`extends`, not `extend`) — no backward compat needed
- **External deps** (Google Maps, page-flip) go in both `package.json` dependencies AND `symbols/dependencies.js`
- **Design system complexity varies**: vdcapital is comprehensive (15 exports), byld is minimal (7), 4it is moderate (14) with special `getCookie('globalTheme')` for dynamic theming
