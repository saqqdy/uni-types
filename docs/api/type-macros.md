# Type-Level Macros API Reference

## Macro Core

### `MacroV2<T>`

Core macro type wrapping an input with metadata.

```typescript
import type { MacroV2 } from 'uni-types'

type M = MacroV2<number>
// M._input: number, M._name: string, M._version: string
```

### `MacroRule<Input, Output>`

A single rewrite rule with pattern, replacement, and optional priority.

### `MacroExpand<T, Rules>`

Expands a macro one step using the provided rules.

### `MacroExpandAll<T, Rules, Seen>`

Fully expands a macro until fixed point.

## Built-in Macros

### `InlineV2<T>`

Inlines a type by removing indirection.

### `SpecializeV2<T, Args>`

Specializes a generic type with concrete arguments.

### `GenericV2<T, Params>`

Marks a type as parameterized.

### `TemplateV2<T>`

Type-level template with name, params, and body.

## Macro Definition

### `DefineMacroV2<T>`

Defines a new macro with name, parameters, body, and rules.

### `LoadMacroV2<D>`

Loads a macro definition.

### `CombineMacroV2<A, B>`

Combines two macros.

## Rewrite Utilities

### `RewriteRule<From, To>`

Alias for `MacroRule<From, To>`.

### `ApplyRuleV2<T, R>`
### `ApplyRulesV2<T, Rules>`

## Combinators

### `MacroComposeV2<A, B>`
### `MacroPipeV2<T, Ms>`
### `MacroPartialV2<M, Partial>`
### `MacroFlip<A, B>`

## Debugging

### `MacroDebug<T>`

Debug info with original, expanded, steps, and rules applied.

### `MacroTrace<T, Rules>`

Trace including final result.
