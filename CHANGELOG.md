# Changelog

All notable changes to this project are documented in this file.

## Unreleased

- Localize toggle `aria-label` / `title` via DokuWiki `LANG.plugins` (`lang/en/lang.php`)
- Improve accessibility: state-aware labels, `aria-controls` on nested lists, `:focus-visible` outline
- Add `plugin.info.txt` PHPUnit smoke test under `_test/`
- Add GPL-2.0 `LICENSE` file

## 2026-07-27

- Initial MVP: nested expand/collapse controls inside `#dw__toc`
- Admin settings: `enabled`, `openlevels` (default 2)
- No per-page syntax and no remembered open/closed state
