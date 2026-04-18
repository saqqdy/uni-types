# Memoized

**Since 1.2.0**

Memoized type - remembers computation.

## Signature

```typescript
type Memoized<T> = T extends infer U ? U : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to memoize |

## Description

Creates a memoized reference to a type. TypeScript's type system will remember the computed result, avoiding redundant type calculations.

## Examples

### Basic Usage

```typescript
import type { Memoized } from 'uni-types'

type ComplexType = { a: string } & { b: number } & { c: boolean }
type Result = Memoized<ComplexType>
// { a: string } & { b: number } & { c: boolean }
```

### With Recursive Types

```typescript
import type { Memoized } from 'uni-types'

type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }
type MemoizedJSON = Memoized<JSONValue>
// JSONValue (memoized)
```

## Related

- [`Cached`](./cached) - Cached type wrapper
- [`CachedValue`](./cachedvalue) - Extract cached value
