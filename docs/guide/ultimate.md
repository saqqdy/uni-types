# Ultimate Type Utilities

Ultimate type utilities that complete the type system with perfect, complete, and final types.

## Perfect

Makes all properties readonly and required.

```typescript
import type { Perfect } from 'uni-types'

interface User {
  name?: string
  age: number
}

type PerfectUser = Perfect<User>
// { readonly name: string; readonly age: number }
```

## Complete

Ensures all properties are defined and non-nullable.

```typescript
import type { Complete } from 'uni-types'

interface Config {
  host?: string | null
  port: number | undefined
}

type CompleteConfig = Complete<Config>
// { host: string; port: number }
```

## Final

Creates readonly, required, and non-nullable type.

```typescript
import type { Final } from 'uni-types'

interface Options {
  debug?: boolean
  timeout?: number | null
}

type FinalOptions = Final<Options>
// { readonly debug: boolean; readonly timeout: number }
```

## Ultimate

The most strict form with deep readonly and non-nullable.

```typescript
import type { Ultimate } from 'uni-types'

interface Nested {
  config?: {
    value?: string
  }
  count: number | null
}

type UltimateNested = Ultimate<Nested>
// { readonly config: { readonly value: string }; readonly count: number }
```

## PerfectPick / PerfectOmit

Pick or omit with perfect typing.

```typescript
import type { PerfectPick, PerfectOmit } from 'uni-types'

interface User {
  id: string
  name?: string
  email?: string
}

type PerfectName = PerfectPick<User, 'name'>
// { readonly name: string }

type PerfectWithoutEmail = PerfectOmit<User, 'email'>
// { readonly id: string; readonly name: string }
```

## Finalize / Frozen / Sealed / Locked

Type finalization utilities.

```typescript
import type { Finalize, Frozen, Sealed, Locked } from 'uni-types'

interface Data {
  value?: string
}

type FinalData = Finalize<Data>  // Final<Data>
type FrozenData = Frozen<Data>   // Deep readonly
type SealedData = Sealed<Data>   // No new properties
type LockedData = Locked<Data>   // Frozen and sealed
```

## Validate

Validate type against schema.

```typescript
import type { Validate, ValidationResult } from 'uni-types'

interface Schema {
  name: string
  age: number
}

type ValidUser = Validate<{ name: 'John', age: 30 }, Schema>
// { name: 'John', age: 30 }

type InvalidUser = Validate<{ name: 'John' }, Schema>
// never
```

## AssertType / AssertShape

Type assertion utilities.

```typescript
import type { AssertType, AssertShape } from 'uni-types'

type AssertString = AssertType<string, 'hello'>  // 'hello'
type AssertNumber = AssertType<string, 42>       // never

interface Shape {
  name: string
}

type Asserted = AssertShape<{ name: 'John', extra: boolean }, Shape>
// never (has extra property)