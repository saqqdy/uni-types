# Dependent Types API Reference

## Core Dependent Types

### `Dep<T, P>`

Simulated dependent type — constrains `T` to extend `P`.

```typescript
import type { Dep } from 'uni-types'

type A = Dep<string, string>  // string
type B = Dep<number, string>  // never
```

### `DepValue<T, V extends T>`

Value-dependent type — creates a type representing a specific value.

```typescript
import type { DepValue } from 'uni-types'

type Hello = DepValue<string, 'hello'>  // 'hello'
```

### `DepIndex<T extends readonly unknown[], I extends keyof T>`

Index-dependent type — extracts type by index.

```typescript
import type { DepIndex } from 'uni-types'

type First = DepIndex<['a', 'b'], 0>  // 'a'
```

### `DepKey<T extends Record<string, unknown>, K extends keyof T>`

Key-dependent type — extracts type by key.

```typescript
import type { DepKey } from 'uni-types'

type Name = DepKey<{ name: string; age: number }, 'name'>  // string
```

## Value-Dependent Types

### `ValueOf<T, V>`

Filters types matching a specific value.

```typescript
import type { ValueOf } from 'uni-types'

type R = ValueOf<string, string>  // string
```

### `Where<T, Condition>`

Conditional type constraint — filters by condition.

```typescript
import type { Where } from 'uni-types'

type R = Where<string, string>  // string
```

### `SuchThat<T, Predicate>`

Predicate-based type narrowing.

```typescript
import type { SuchThat } from 'uni-types'

type R = SuchThat<string, string>  // string
```

## Constraint Verification

### `Satisfies<T, Constraint>`

Verifies that a type satisfies a constraint without widening.

```typescript
import type { Satisfies } from 'uni-types'

type R = Satisfies<{ a: number }, { a: number }>  // { a: number }
```

### `Exactly<T, Shape>`

Ensures a type exactly matches another, with no excess properties.

```typescript
import type { Exactly } from 'uni-types'

type R = Exactly<{ a: number }, { a: number }>  // { a: number }
```

## Proof-Carrying Types

### `Proof<T, P extends string>`

Type-level proof carrier.

```typescript
import type { Proof } from 'uni-types'

type P = Proof<string, 'non-empty'>
// P._value: string, P._proof: 'non-empty'
```

### `Prove<T, Constraint extends string>`

Creates a proof that a type satisfies a constraint.

### `Verified<T>`

A type verified to satisfy constraints. Adds `__verified__: true` and `__verifiedAt__: number`.

### `Unverified<T>`

Removes verification from a verified type.

## Refinement Types

### `Refined<T, Predicate>`
### `Refine<T, R extends string>`
### `Unrefine<T>`

## Type-Level Equality

### `TypeEq<A, B>`

Strict type equality check returning `true` or `false`.

### `TypeNotEq<A, B>`
### `TypeExtends<A, B>`
### `TypeCompatible<A, B>`

Returns `true`, `'partial'`, or `false`. Mutual extension returns `true`, one-way returns `'partial'`, neither returns `false`.

## Type-Level Computation

### `DepCompute<T>`

Interface with `_result: T` and `_success: boolean`.

### `DepIf<Cond extends boolean, Then, Else>`
### `DepMatch<T, Cases>`
### `DepFmap<T extends readonly unknown[], F>`
