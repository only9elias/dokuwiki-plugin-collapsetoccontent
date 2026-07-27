<<<<<<< HEAD
# dokuwiki-plugin-collapsetoccontent
DokuWiki plugin for collapsing the headers within a ToC (Table of Contents) based on headline levels
=======
# Collapse ToC Content

DokuWiki plugin that adds nested expand/collapse controls inside the built-in
Table of Contents (`#dw__toc`), controlled by headline level.

## Features

- Branch toggles on ToC entries that have nested children
- Heading links stay clickable (toggle is a separate control)
- Admin-configurable how many headline levels start expanded
- Leaves the template’s whole-ToC open/close control (`h3.toggle`) alone
- No per-page syntax and no remembered open/closed state

## Requirements

- DokuWiki (developed against the default `dokuwiki` template)
- Templates that render the standard `#dw__toc` nested list markup

## Installation

1. Install into `lib/plugins/collapsetoccontent` (Extension Manager or manual copy).
2. Ensure the plugin is enabled.
3. Optionally adjust settings under **Admin → Configuration Settings →
   Collapse ToC Content Plugin**.
4. Purge the cache after CSS/JS changes (`&purge=true` or clear `data/cache`).

## Configuration

| Setting | Default | Description |
| --- | --- | --- |
| `enabled` | on | Enable nested ToC collapse controls |
| `openlevels` | `2` | Headline levels that start expanded (1–5). Nested entries below this level start collapsed. |

With the default `openlevels = 2`, level 1–2 entries are visible and branches under
level 2 (i.e. level 3+) start collapsed until opened.

## Behavior notes

- Scope is limited to `#dw__toc`.
- Initial expand/collapse state is applied on each page load from the admin
  config (not persisted in cookies or localStorage).
- Works best with templates that keep the core ToC DOM (`#dw__toc`, nested
  `ul` / `li.levelN`).

## Compatibility

This plugin enhances the existing ToC DOM; it does not replace ToC generation.

- **Default `dokuwiki` template**: Nested ToC toggles, heading-link navigation,
  and the template’s whole-ToC `h3.toggle` all work with this plugin.
- **Pinkberry Night** (sticky ToC): Nested collapse works. In testing, the
  template’s sticky ToC did **not** remain on screen while scrolling even with
  this plugin disabled (template `float` + `position: sticky` limitation), so
  sticky behavior is not something this plugin can fix.
- **sectiontoggle**: Complementary (page sections vs nested ToC branches). Both
  can be enabled together; ToC branch toggles and section header toggles operate
  independently. Configure sectiontoggle’s `platform` (e.g. `all`) if you need
  it on desktop.
- Plugins that rewrite or relocate ToC markup (for example **toctweak**,
  **intoc**, **inlinetoc**) may conflict because they change the DOM this plugin
  expects. Those combinations are not deeply supported.

## Development

Plugin id: `collapsetoccontent` (repo name without the `dokuwiki-plugin-` prefix).

Components:

- `action.php` — publishes config to `JSINFO`
- `script.js` / `style.css` — nested collapse UI
- `conf/` + `lang/en/settings.php` — Configuration Manager settings
>>>>>>> 4375b92 (Add Collapse ToC Content plugin MVP)
