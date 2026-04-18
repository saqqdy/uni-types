# MapHas

**Since 1.3.0**

Check if a key exists in a type-level map. Returns `true` if the key is present, otherwise `false`.

## Signature

```typescript
export type MapHas<M, K> = K extends keyof M ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `M` | The type-level map to search in |
| `K` | The key to check for |

## Examples

### Basic Usage

```typescript
import type { MapHas } from 'uni-types'

type Config = { host: string; port: number }
type Result = MapHas<Config, 'host'>
// true
```

### Key Not Found

```typescript
type Result = MapHas<Config, 'protocol'>
// false
```
