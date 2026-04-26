# Type Inference Engine Types

**Since 1.8.0**

Advanced type inference and deduction utilities.

## Inference Engine Core

### InferEngine

Inference engine type that combines input, context, and result.

```typescript
import type { InferEngine } from 'uni-types'

type Engine = InferEngine<string>
// { input: string; context: InferContext<string>; result: InferResult<string> }
```

### InferContext

Inference context containing type variables, constraints, and substitutions.

```typescript
import type { InferContext } from 'uni-types'

type Context = InferContext<number>
```

### InferResult

Result of type inference - either success with inferred type or failure with error.

```typescript
import type { InferResult } from 'uni-types'

type Result = InferResult<string>
// Success: { success: true; type: string; context: InferContext<string> }
// Failure: { success: false; error: InferError<string> }
```

## Type Deduction

### Deduce

Deduce type from a value.

```typescript
import type { Deduce } from 'uni-types'

type T = Deduce<string>  // string
```

### DeduceArray

Deduce array element type.

```typescript
import type { DeduceArray } from 'uni-types'

type Element = DeduceArray<number[]>  // number
```

### DeducePromise

Deduce promise value type.

```typescript
import type { DeducePromise } from 'uni-types'

type Value = DeducePromise<Promise<string>>  // string
```

### DeduceReturn

Deduce function return type.

```typescript
import type { DeduceReturn } from 'uni-types'

type Return = DeduceReturn<() => string>  // string
```

### DeduceParams

Deduce function parameters type.

```typescript
import type { DeduceParams } from 'uni-types'

type Params = DeduceParams<(a: string, b: number) => void>  // [string, number]
```

### DeduceKey

Deduce object key by value type.

```typescript
import type { DeduceKey } from 'uni-types'

type Key = DeduceKey<{ a: string; b: number }, string>  // 'a'
```

## Constraint Solving

### Constraint

Type constraint definition.

```typescript
import type { Constraint } from 'uni-types'

type EqConstraint = Constraint<string>
```

### Unify

Unify two types to find common type.

```typescript
import type { Unify } from 'uni-types'

type Common = Unify<string | number, number | boolean>  // number
```

### Solve

Solve constraints to produce a type.

```typescript
import type { Solve } from 'uni-types'

type Result = Solve<string>
```

## Type Variables

### TypeVar

Type variable for generic programming.

```typescript
import type { TypeVar } from 'uni-types'

type V = TypeVar<'T'>  // { __typeVar: 'T' }
```

### FreeVars

Get free variables in a type.

```typescript
import type { FreeVars } from 'uni-types'

type Free = FreeVars<TypeVar<'T'>>  // 'T'
```

## Polymorphism

### Polymorphic

Polymorphic type wrapper.

```typescript
import type { Polymorphic } from 'uni-types'

type Poly = Polymorphic<string>
```

### Monomorphize

Convert polymorphic type to monomorphic.

```typescript
import type { Monomorphize } from 'uni-types'

type Mono = Monomorphize<Polymorphic<string>>  // string
```

## Kind System

### Kind

Get the kind of a type.

```typescript
import type { Kind } from 'uni-types'

type FnKind = Kind<() => void>  // 'function'
type ObjKind = Kind<{ a: 1 }>  // 'object'
type StrKind = Kind<string>  // 'string'
```

### KindCheck

Check if a type has expected kind.

```typescript
import type { KindCheck } from 'uni-types'

type Check = KindCheck<string, 'string'>
// { success: true; kind: 'string' }
```

### HigherKind

Higher-kinded type operations.

```typescript
import type { HigherKind } from 'uni-types'

type Result = HigherKind<Array, string>  // string[]
```

## Effect System

### Effect

Effect type for tracking side effects.

```typescript
import type { Effect } from 'uni-types'

type Eff = Effect<string>
// { value: string; effects: EffectRow }
```

### Pure

Pure computation type (no side effects).

```typescript
import type { Pure } from 'uni-types'

type PureValue = Pure<string>
```

### Effectful

Computation with specific effect.

```typescript
import type { Effectful } from 'uni-types'

type AsyncOp = Effectful<string, 'async'>
```

### Handle

Handle/remove an effect from a type.

```typescript
import type { Handle } from 'uni-types'

type Handled = Handle<Effectful<string, 'async'>, 'async'>  // string
```
