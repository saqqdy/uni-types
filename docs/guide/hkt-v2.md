# Higher-Kinded Types (HKT) Preview

Preview of enhanced Higher-Kinded Types support for advanced type-level programming.

## HKT

Core Higher-Kinded Type abstraction for type-level functions.

```typescript
import type { HKT } from 'uni-types'

interface MaybeHKT extends HKT {
	readonly type: this['_A'] | null
}

type MaybeString = MaybeHKT['_A'] extends string ? string | null : never
```

## Kind

Apply a higher-kinded type to a type parameter.

```typescript
import type { Kind } from 'uni-types'

interface ArrayHKT extends HKT {
	readonly type: this['_A'][]
}

type StringArray = Kind<ArrayHKT, string>
// string[]
```

## Kind2

Apply a higher-kinded type to two type parameters.

```typescript
import type { Kind2 } from 'uni-types'

interface MapHKT extends HKT {
	readonly type: Map<this['_A'], this['_B']>
}

type StringNumberMap = Kind2<MapHKT, string, number>
// Map<string, number>
```

## Apply

Apply a type function to its argument.

```typescript
import type { Apply } from 'uni-types'

type Result = Apply<ArrayHKT, number>
// number[]
```

## ComposeK

Compose two higher-kinded types.

```typescript
import type { ComposeK } from 'uni-types'

type Composed = ComposeK<ArrayHKT, PromiseHKT, string>
// Promise<string>[]
```

## IdentityK

Identity higher-kinded type.

```typescript
import type { IdentityK } from 'uni-types'

type IdentityResult = IdentityK<string>
// string
```

## FlipK

Flip the type parameters of a two-parameter HKT.

```typescript
import type { FlipK } from 'uni-types'

type Flipped = FlipK<MapHKT, string, number>
// Map<number, string>
```

## ConstK

Constant higher-kinded type that ignores its argument.

```typescript
import type { ConstK } from 'uni-types'

type AlwaysNumber = ConstK<number, string>
// number
```
