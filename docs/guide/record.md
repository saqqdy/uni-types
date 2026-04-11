# Record Types

Advanced record and object manipulation types.

## DeepNullable

Make all properties nullable recursively.

```typescript
import type { DeepNullable } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Nullable = DeepNullable<Config>
// { database: { host: string | null; port: number | null } | null }
```

## DeepOptional

Make all properties optional recursively.

```typescript
import type { DeepOptional } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Optional = DeepOptional<Config>
// { database?: { host?: string; port?: number } }
```

## Immutable

Make all properties deeply readonly.

```typescript
import type { Immutable } from 'uni-types'

interface Config {
  database: {
    host: string
    ports: number[]
  }
}

type Readonly = Immutable<Config>
// { readonly database: { readonly host: string; readonly ports: readonly number[] } }
```

## Mutable

Remove readonly from all properties recursively.

```typescript
import type { Mutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
  }
}

type Writable = Mutable<Config>
// { database: { host: string } }
```

## DeepNonNullable

Remove null and undefined from all properties.

```typescript
import type { DeepNonNullable } from 'uni-types'

interface Config {
  host: string | null
  port: number | undefined
}

type NonNull = DeepNonNullable<Config>
// { host: string; port: number }
```

## Exact

Ensure an object has exactly the specified keys.

```typescript
import type { Exact } from 'uni-types'

type A = Exact<{ a: string }, { a: string }>           // { a: string }
type B = Exact<{ a: string }, { a: string; b: number }> // never
```

## HasKeys

Check if an object has at least the specified keys.

```typescript
import type { HasKeys } from 'uni-types'

type A = HasKeys<{ a: string; b: number }, 'a'>  // { a: string; b: number }
type B = HasKeys<{ a: string }, 'b'>             // never
```
