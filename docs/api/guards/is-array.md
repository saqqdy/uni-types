# IsArray

Check if a type is an array.

## Signature

```typescript
type IsArray<T> = T extends readonly unknown[]
  ? T extends readonly [...unknown[]]
    ? true
    : false
  : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Returns

Returns `true` if `T` is an array type, `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { IsArray } from 'uni-types'

type Check1 = IsArray<string[]> // true
type Check2 = IsArray<number[]> // true
type Check3 = IsArray<readonly string[]> // true
```

### Non-Array Types

```typescript
type Check4 = IsArray<string> // false
type Check5 = IsArray<number> // false
type Check6 = IsArray<{ length: number }> // false
type Check7 = IsArray<{ [key: string]: any }> // false
```

### With Tuples

```typescript
type Check8 = IsArray<[string, number]> // true (tuples are arrays)
```

## Usage in Conditional Types

```typescript
import type { IsArray } from 'uni-types'

type ArrayElement<T> = IsArray<T> extends true ? T[number] : never

type Elem = ArrayElement<string[]> // string
type NotArray = ArrayElement<string> // never
```

## Related

- [`IsTuple`](./is-tuple) - Check if type is a tuple
- [`ArrayElement`](../infer/array-element) - Get array element type