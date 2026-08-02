# Changelog

All notable changes to this project are documented in this file.

## Unreleased

## 2026-08-02

- Exclude `AGENTS.md` and `_test/` from install archives via `.gitattributes` `export-ignore`
- Bump `plugin.info.txt` `date`

## 2026-08-01

- Localize toggle `aria-label` / `title` via DokuWiki `LANG.plugins` (`lang/en/lang.php`)
- Improve accessibility: state-aware labels, `aria-controls` on nested lists, `:focus-visible` outline
- Add `plugin.info.txt` PHPUnit smoke test under `_test/`
- Add GPL-2.0 `LICENSE` file
- Add German (`de`) locale for toggle labels and admin settings
- Bump `plugin.info.txt` `date` to match the landing commit (UTC)

## 2026-07-27

- Initial MVP: nested expand/collapse controls inside `#dw__toc`
- Admin settings: `enabled`, `openlevels` (default 2)
- No per-page syntax and no remembered open/closed state
