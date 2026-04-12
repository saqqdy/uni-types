# IsTuple

**Since 1.0.0**

Check if a type is a tuple.

## Signature

```typescript
type IsTuple<T> = T extends readonly [unknown, ...unknown[]]
  ? T extends readonly unknown[]
    ? number extends T['length']
      ? false
      : true
    : false
  : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Returns

Returns `true` if `T` is a tuple type (fixed-length array), `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { IsTuple } from 'uni-types'

type Check1 = IsTuple<[string, number]> // true
type Check2 = IsTuple<[string]> // true
type Check3 = IsTuple<readonly [number, string]> // true
type Check4 = IsTuple<[]> // true (empty tuple)
```

### Non-Tuple Types

```typescript
type Check5 = IsTuple<string[]> // false
type Check6 = IsTuple<number[]> // false
type Check7 = IsTuple<string> // false
```

### Usage in Conditional Types

```typescript
import type { IsTuple } from 'uni-types'

type GetLength<T> = IsTuple<T> extends true 
  ? T extends readonly unknown[] ? T['length'] : never 
  : number

type Len1 = GetLength<[1, 2, 3]> // 3
type Len2 = GetLength<string[]> // number
```

## Related

- [`IsArray`](./is-array) - Check if type is an array
- [`TupleLength`](../core/tuple-length) - Get tuple length