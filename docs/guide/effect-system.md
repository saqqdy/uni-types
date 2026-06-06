# Effect System Preview

Preview of the type-level effect system for tracking side effects in types.

## Effect

Base effect type representing a computational effect.

```typescript
import type { Effect } from 'uni-types'

type ReadEffect = Effect<'read', { source: string }>
type WriteEffect = Effect<'write', { target: string }>
```

## EffectRow

A row of effects tracked by the effect system.

```typescript
import type { EffectRow } from 'uni-types'

type MyEffects = EffectRow<
	| Effect<'read', { source: 'database' }>
	| Effect<'log', { level: 'info' }>
>
```

## Effectful

Mark a function type as having specific effects.

```typescript
import type { Effectful } from 'uni-types'

type ReadData = Effectful<
	(id: string) => Promise<string>,
	Effect<'read', { source: 'database' }>
>
```

## Pure

Mark a function type as pure (no side effects).

```typescript
import type { Pure } from 'uni-types'

type PureFunction = Pure<(x: number) => number>
// { __pure: true; (x: number): number }
```

## Handle

Handle an effect with a specific handler.

```typescript
import type { Handle } from 'uni-types'

type Handled = Handle<
	Effectful<(id: string) => Promise<string>, Effect<'read', { source: 'database' }>>,
	'read',
	(id: string) => string
>
```

## EffectMask

Mask certain effects from the effect row.

```typescript
import type { EffectMask } from 'uni-types'

type Masked = EffectMask<
	EffectRow<Effect<'read'> | Effect<'write'>>,
	'read'
>
// EffectRow<Effect<'write'>>
```

## EffectUnion

Combine multiple effect rows into one.

```typescript
import type { EffectUnion } from 'uni-types'

type Combined = EffectUnion<
	EffectRow<Effect<'read'>>,
	EffectRow<Effect<'write'>>
>
// EffectRow<Effect<'read'> | Effect<'write'>>
```

## InferEffects

Infer the effects from an effectful function type.

```typescript
import type { InferEffects } from 'uni-types'

type Effects = InferEffects<Effectful<
	() => void,
	Effect<'log'> | Effect<'write'>
>>
// Effect<'log'> | Effect<'write'>
```
