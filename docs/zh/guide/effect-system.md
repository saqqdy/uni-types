# 效果系统预览

用于在类型中跟踪副作用的类型级效果系统预览。

## Effect

表示计算效果的基础效果类型。

```typescript
import type { Effect } from 'uni-types'

type ReadEffect = Effect<'read', { source: string }>
type WriteEffect = Effect<'write', { target: string }>
```

## EffectRow

效果系统跟踪的效果行。

```typescript
import type { EffectRow } from 'uni-types'

type MyEffects = EffectRow<
	| Effect<'read', { source: 'database' }>
	| Effect<'log', { level: 'info' }>
>
```

## Effectful

将函数类型标记为具有特定效果。

```typescript
import type { Effectful } from 'uni-types'

type ReadData = Effectful<
	(id: string) => Promise<string>,
	Effect<'read', { source: 'database' }>
>
```

## Pure

将函数类型标记为纯函数（无副作用）。

```typescript
import type { Pure } from 'uni-types'

type PureFunction = Pure<(x: number) => number>
// { __pure: true; (x: number): number }
```

## Handle

使用特定处理器处理效果。

```typescript
import type { Handle } from 'uni-types'

type Handled = Handle<
	Effectful<(id: string) => Promise<string>, Effect<'read', { source: 'database' }>>,
	'read',
	(id: string) => string
>
```

## EffectMask

从效果行中遮蔽特定效果。

```typescript
import type { EffectMask } from 'uni-types'

type Masked = EffectMask<
	EffectRow<Effect<'read'> | Effect<'write'>>,
	'read'
>
// EffectRow<Effect<'write'>>
```

## EffectUnion

将多个效果行合并为一个。

```typescript
import type { EffectUnion } from 'uni-types'

type Combined = EffectUnion<
	EffectRow<Effect<'read'>>,
	EffectRow<Effect<'write'>>
>
// EffectRow<Effect<'read'> | Effect<'write'>>
```

## InferEffects

从带效果的函数类型中推断效果。

```typescript
import type { InferEffects } from 'uni-types'

type Effects = InferEffects<Effectful<
	() => void,
	Effect<'log'> | Effect<'write'>
>>
// Effect<'log'> | Effect<'write'>
```
