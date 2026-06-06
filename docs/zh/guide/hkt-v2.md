# 高阶类型 (HKT) 预览

增强的高阶类型支持预览，用于高级类型级编程。

## HKT

用于类型级函数的核心高阶类型抽象。

```typescript
import type { HKT } from 'uni-types'

interface MaybeHKT extends HKT {
	readonly type: this['_A'] | null
}

type MaybeString = MaybeHKT['_A'] extends string ? string | null : never
```

## Kind

将高阶类型应用于类型参数。

```typescript
import type { Kind } from 'uni-types'

interface ArrayHKT extends HKT {
	readonly type: this['_A'][]
}

type StringArray = Kind<ArrayHKT, string>
// string[]
```

## Kind2

将高阶类型应用于两个类型参数。

```typescript
import type { Kind2 } from 'uni-types'

interface MapHKT extends HKT {
	readonly type: Map<this['_A'], this['_B']>
}

type StringNumberMap = Kind2<MapHKT, string, number>
// Map<string, number>
```

## Apply

将类型函数应用于其参数。

```typescript
import type { Apply } from 'uni-types'

type Result = Apply<ArrayHKT, number>
// number[]
```

## ComposeK

组合两个高阶类型。

```typescript
import type { ComposeK } from 'uni-types'

type Composed = ComposeK<ArrayHKT, PromiseHKT, string>
// Promise<string>[]
```

## IdentityK

恒等高阶类型。

```typescript
import type { IdentityK } from 'uni-types'

type IdentityResult = IdentityK<string>
// string
```

## FlipK

翻转双参数高阶类型的类型参数。

```typescript
import type { FlipK } from 'uni-types'

type Flipped = FlipK<MapHKT, string, number>
// Map<number, string>
```

## ConstK

忽略其参数的常量高阶类型。

```typescript
import type { ConstK } from 'uni-types'

type AlwaysNumber = ConstK<number, string>
// number
```
