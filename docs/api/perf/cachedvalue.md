# CachedValue

**Since 1.2.0**

Extract cached value from a Cached type.

## Signature

```typescript
type CachedValue<T> = T extends { __cached: infer U } ? U : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The cached type to extract from |

## Description

Extracts the original type from a Cached wrapper. This is the inverse operation of Cached.

## Examples

### Basic Usage

```typescript
import type { Cached, CachedValue } from 'uni-types'

type Original = { name: string; age: number }
type CachedType = Cached<Original>
type Extracted = CachedValue<CachedType>
// { name: string; age: number }
```

### With Complex Types

```typescript
import type { CachedValue } from 'uni-types'

type MyCached = { __cached: string | number | boolean }
type Result = CachedValue<MyCached>
// string | number | boolean
```

## Related

- [`Cached`](./cached) - Cached type wrapper
- [`Memoized`](./memoized) - Memoized type
