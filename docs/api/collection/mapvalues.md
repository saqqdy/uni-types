# MapValues

**Since 1.3.0**

Get all values from a type-level map. Returns a union of all value types.

## Signature

```typescript
export type MapValues<M> = M[keyof M]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `M` | The type-level map |

## Examples

### Basic Usage

```typescript
import type { MapValues } from 'uni-types'

type Config = { host: string; port: number; ssl: boolean }
type Result = MapValues<Config>
// string | number | boolean
```

### Homogeneous Map

```typescript
type Labels = { a: string; b: string; c: string }
type Result = MapValues<Labels>
// string
```
