# uni-types Project Memory

## Project Overview
- TypeScript type utility library (type-only, no runtime)
- Uses tabs for indentation
- Build: tsdown (rolldown-based)
- Test: vitest with expectTypeOf
- Docs: VitePress with bilingual (EN/CN) support
- Version: 1.12.0 (as of 2026-06-06)

## Key Patterns
- Source modules: `src/<module-name>/index.ts`
- Exports in `src/index.ts` with version comments
- Some modules use `export *` (no name conflicts), others use `export type { ... }` with aliases
- Type-only exports (interfaces, type aliases) - no runtime code
- Test files: `tests/v1.X.0.test.ts` per version
- Docs: `docs/guide/<name>.md` (EN) + `docs/zh/guide/<name>.md` (CN)

## Bundler Constraints
- tsdown/rolldown does NOT support interface methods with generic type params (e.g., `pick<K extends keyof T>(): Builder<Pick<T, K>>`)
- Solution: Use simple `type` aliases with object literal syntax instead of `interface` with generic methods
- Empty object type `{}` causes ESLint error `ts/no-empty-object-type` - use `Record<string, never>` or `object` instead

## Naming Conflicts
- Some type names exist in multiple modules (e.g., `FeatureFlag`, `Command`, `Effectful`, `EffectType`)
- New v1.12.0 types renamed to avoid conflicts: `ExperimentalFeatureFlag`, `DevToolsCommand`, `EffectfulV2`, `EffectTypeV2`
- Use aliasing in `src/index.ts` exports to disambiguate

## Version 1.12.0 Modules (10 new)
1. `src/experimental/` - Experimental v2 Features
2. `src/unified/` - Unified Type System Preview
3. `src/hkt-v2/` - Higher-Kinded Types Preview
4. `src/effect/` - Effect System Preview
5. `src/plugin-v2/` - Plugin System Preview
6. `src/interop-v2/` - Interop Enhancements
7. `src/devtools/` - Developer Tools Integration
8. `src/docgen-v2/` - Documentation Generation v2
9. `src/community/` - Community Feedback System
10. `src/rc-gates/` - RC Quality Gates
