# Type-Level Macros

This guide covers the **Type-Level Macros** features introduced in v2.0.0.

## Overview

Type-Level Macros provide a macro system for compile-time type transformations. Inspired by macro systems in Rust and Lisp, these utilities enable rule-based type expansion and template generation.

## Macro Core

```typescript
import type { MacroV2, MacroRule, MacroExpand, MacroExpandAll } from 'uni-types'

type M = MacroV2<number>
// M._input: number, M._name: string, M._version: string

type Rule = MacroRuleV2<'optional', { optional: true }>
type Expanded = MacroExpand<'optional', [Rule]>  // { optional: true }
```

## Built-in Macros

### Inline

`InlineV2` removes type indirection by flattening:

```typescript
import type { InlineV2 } from 'uni-types'
type T = InlineV2<{ a: string; b: number }>  // { a: string; b: number }
```

### Specialize & Generic

```typescript
import type { SpecializeV2, GenericV2 } from 'uni-types'
type G = GenericV2<string, [number]>  // G._body = string, G._params = [number]
type S = SpecializeV2<SomeGeneric, [number, string]>
```

### Template

```typescript
import type { TemplateV2 } from 'uni-types'
type T = TemplateV2<{ name: string }>  // T._name = string
```

## Rewrite Utilities

```typescript
import type { RewriteRule, ApplyRuleV2, ApplyRulesV2 } from 'uni-types'

type R = RewriteRule<'old', 'new'>
type A = ApplyRuleV2<'old', R>  // 'new'
```

## Combinators

```typescript
import type { MacroComposeV2, MacroPipeV2, MacroFlip } from 'uni-types'

type Composed = MacroComposeV2<MacroA, MacroB>
type Piped = MacroPipeV2<Input, [MacroA, MacroB]>
type Flipped = MacroFlip<string, number>  // [number, string]
```

## API Reference

See the [Type-Level Macros API Reference](/api/type-macros) for complete documentation.
