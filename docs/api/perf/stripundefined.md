# StripUndefined

**Since 1.2.0**

Strip undefined from object.

## Signature

```typescript
type StripUndefined<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to process |

## Description

Removes properties with undefined type from an object type. Useful for creating strict object types without optional properties.

## Examples

### Basic Usage

```typescript
import type { StripUndefined } from 'uni-types'

type MyObject = {
  name: string
  optional?: string
  age: number
}

type Result = StripUndefined<MyObject>
// { name: string; age: number }
```

### With Nullable Properties

```typescript
import type { StripUndefined } from 'uni-types'

type MyType = {
  required: string
  optional?: number
  nullable: string | undefined
}

type Result = StripUndefined<MyType>
// { required: string }
```

## Related

- [`StripNever`](./stripnever) - Strip never from object
- [`Compact`](./compact) - Remove never and undefined
