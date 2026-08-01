# Collapse ToC Content Plugin for DokuWiki

[![made with Cursor AI](https://img.shields.io/badge/CURSOR-made_with_Cursor-26241E?logo=cursor&logoColor=ffffff&labelColor=14120B)](https://cursor.com/)

DokuWiki plugin that adds nested expand/collapse controls inside the built-in
Table of Contents (`#dw__toc`), controlled by headline level.

## Features

- Branch toggles on ToC entries that have nested children
- Heading links stay clickable (toggle is a separate control)
- No per-page syntax and no remembered open/closed state
- Toggle labels are localizable via `lang/*/lang.php` (`$lang['js']`)

## Installation

1. Install into `lib/plugins/collapsetoccontent/` (Extension Manager or manual
  copy). If the folder is named differently, the plugin will not work!
2. Ensure the plugin is enabled.
3. Optionally adjust settings under **Admin → Configuration Settings →
  Collapse ToC Content Plugin**.
4. Purge the cache after CSS/JS changes (`&purge=true` or clear `data/cache`).

Templates must keep core ToC markup (`#dw__toc`, nested `ul` / `li.levelN`) for
the plugin to find and enhance the table of contents.

Please refer to https://www.dokuwiki.org/extensions for additional info on how
to install extensions in DokuWiki.

## Configuration


| Setting      | Default | Description                                                                                 |
| ------------ | ------- | ------------------------------------------------------------------------------------------- |
| `enabled`    | on      | Enable nested ToC collapse controls                                                         |
| `openlevels` | `2`     | Headline levels that start expanded (1–5). Nested entries below this level start collapsed. |


With the default `openlevels = 2`, level 1–2 entries are visible and branches under
level 2 (i.e. level 3+) start collapsed until opened.

## Copyright

Copyright (C) only9elias <elias@noreply.blubb.app>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; version 2 of the License

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
