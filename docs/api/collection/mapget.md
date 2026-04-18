# MapGet

**Since 1.3.0**

Get the value associated with a key from a type-level map.

## Signature

```typescript
export type MapGet<M, K> = K extends keyof M ? M[K & keyof M] : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `M` | The type-level map |
| `K` | The key to look up |

## Examples

### Basic Usage

```typescript
import type { MapGet } from 'uni-types'

type Config = { host: string; port: number }
type Result = MapGet<Config, 'host'>
// string
```

### Key Not Found

```typescript
type Result = MapGet<Config, 'protocol'>
// never
```
