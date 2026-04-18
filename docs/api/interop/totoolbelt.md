# ToTsToolbelt

**Since 1.4.0**

Convert type to ts-toolbelt format.

## Signature

```typescript
type ToTsToolbelt<T> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Type to convert |

## Description

Converts uni-types to ts-toolbelt compatible format.

## Examples

### Basic Usage

```typescript
import type { ToTsToolbelt } from 'uni-types'

type Converted = ToTsToolbelt<{ name: string; age: number }>
```

## Related

- [`FromTsToolbelt`](./fromstoolbelt) - Convert from ts-toolbelt
- [`ToTypeFest`](./totypefest) - Convert to type-fest