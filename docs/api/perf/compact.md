# Compact

**Since 1.2.0**

Compact type - remove never and undefined from objects.

## Signature

```typescript
type Compact<T> = {
  [K in keyof T as T[K] extends never ? never : undefined extends T[K] ? never : K]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to compact |

## Description

Removes properties with never or undefined types from an object type. Combines the effects of StripNever and StripUndefined.

## Examples

### Basic Usage

```typescript
import type { Compact } from 'uni-types'

type MyObject = {
  name: string
  invalid: never
  optional?: number
  age: number
}

type Result = Compact<MyObject>
// { name: string; age: number }
```

### With Mixed Properties

```typescript
import type { Compact } from 'uni-types'

type Mixed = {
  valid: string
  excluded: never
  maybeUndefined?: boolean
  alsoValid: number
}

type Result = Compact<Mixed>
// { valid: string; alsoValid: number }
```

## Related

- [`StripNever`](./stripnever) - Strip never from object
- [`StripUndefined`](./stripundefined) - Strip undefined from object
