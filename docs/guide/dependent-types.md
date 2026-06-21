# Dependent Types

This guide covers the **Dependent Types Simulation** features introduced in v2.0.0.

## Overview

While TypeScript doesn't natively support dependent types (types that depend on values), `uni-types` provides simulated dependent type utilities that approximate this behavior using conditional types and inference. These tools enable more precise type checking at the type level.

## Core Concepts

### Dependent Types

A **dependent type** is a type that depends on a value. In `uni-types`, `Dep<T, P>` constrains `T` to extend `P`:

```typescript
import type { Dep } from 'uni-types'

type A = Dep<string, string>  // string
type B = Dep<number, string>  // never
```

### Value-Dependent Types

`DepValue<T, V>` creates a type representing a specific value `V` of type `T`:

```typescript
import type { DepValue } from 'uni-types'

type Hello = DepValue<string, 'hello'>  // 'hello'
type Num42 = DepValue<number, 42>       // 42
```

### Index and Key Dependencies

`DepIndex` and `DepKey` extract types based on indices and keys:

```typescript
import type { DepIndex, DepKey } from 'uni-types'

type First = DepIndex<['a', 'b', 'c'], 0>  // 'a'
type Name = DepKey<{ name: string; age: number }, 'name'>  // string
```

## Type-Level Assertions

```typescript
import type { AssertType, TypeEq, TypeExtends } from 'uni-types'

type Check = AssertType<string, string>  // true
type Eq = TypeEq<string, string>     // true
type Neq = TypeEq<string, number>    // false
type Ext = TypeExtends<'hello', string>  // true
```

## Proof-Carrying Types

```typescript
import type { Proof, Prove, Verified as VerifiedV2, Unverified } from 'uni-types'

type P = Prove<string, 'non-empty'>
type V = VerifiedV2<string>      // string & { __verified__: true; __verifiedAt__: number }
type U = Unverified<VerifiedV2<string>>  // string
```

## Refinement Types

```typescript
import type { Refine, Refined, Unrefine } from 'uni-types'

type Email = Refine<string, 'email'>  // string & { __refinement__: 'email' }
type Plain = Unrefine<Email>          // string
```

## Type-Level Computation

```typescript
import type { DepIf, DepMatch, DepCompute } from 'uni-types'

type Result = DepIf<true, 'yes', 'no'>  // 'yes'
type Match = DepMatch<'a', { a: 1; b: 2; default: 0 }>  // 1
```

## API Reference

See the [Dependent Types API Reference](/api/dependent-types) for complete documentation.
