# ToTypeFest

**Since 1.4.0**

Convert type to type-fest format.

## Signature

```typescript
type ToTypeFest<T> = T extends object ? { [K in keyof T]: ToTypeFest<T[K]> } : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Type to convert |

## Description

Converts uni-types to type-fest compatible format.

## Examples

### Basic Usage

```typescript
import type { ToTypeFest } from 'uni-types'

type Converted = ToTypeFest<{ name: string; age: number }>
```

## Related

- [`FromTypeFest`](./fromtypefest) - Convert from type-fest
- [`ToTsToolbelt`](./totoolbelt) - Convert to ts-toolbelt