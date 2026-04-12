# ArrayElement

**Since 1.0.0**

Get the element type of an array.

## Signature

```typescript
type ArrayElement<T> = T extends readonly (infer E)[] ? E : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The array type |

## Description

Extracts the element type from an array type. Works with both regular arrays and readonly arrays.

## Examples

### Basic Usage

```typescript
import type { ArrayElement } from 'uni-types'

type Elem1 = ArrayElement<string[]> // string
type Elem2 = ArrayElement<number[]> // number
type Elem3 = ArrayElement<boolean[]> // boolean
```

### Union Elements

```typescript
type Elem4 = ArrayElement<(string | number)[]> // string | number
type Elem5 = ArrayElement<('a' | 'b' | 'c')[]> // 'a' | 'b' | 'c'
```

### Readonly Arrays

```typescript
type Elem6 = ArrayElement<readonly string[]> // string
type Elem7 = ArrayElement<ReadonlyArray<number>> // number
```

### Non-Array Types

```typescript
type Elem8 = ArrayElement<string> // never
type Elem9 = ArrayElement<{}> // never
```

## Related

- [`Awaited`](./awaited) - Unwrap Promise type
- [`ValueOf`](./value-of) - Get object value types