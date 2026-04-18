# StripNever

**Since 1.2.0**

Strip never from object.

## Signature

```typescript
type StripNever<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to process |

## Description

Removes properties with never type from an object type. Useful for filtering out invalid or excluded properties.

## Examples

### Basic Usage

```typescript
import type { StripNever } from 'uni-types'

type MyObject = {
  name: string
  invalid: never
  age: number
}

type Result = StripNever<MyObject>
// { name: string; age: number }
```

### With Conditional Types

```typescript
import type { StripNever } from 'uni-types'

type MyUnion = 'a' | 'b' | 'c'
type Filtered = {
  [K in MyUnion]: K extends 'a' ? never : K
}

type Result = StripNever<Filtered>
// { b: 'b'; c: 'c' }
```

## Related

- [`StripUndefined`](./stripundefined) - Strip undefined from object
- [`Compact`](./compact) - Remove never and undefined
