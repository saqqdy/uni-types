# MapKeys

**Since 1.3.0**

Get all keys from a type-level map. Returns a union of all key types.

## Signature

```typescript
export type MapKeys<M> = keyof M
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `M` | The type-level map |

## Examples

### Basic Usage

```typescript
import type { MapKeys } from 'uni-types'

type Config = { host: string; port: number; ssl: boolean }
type Result = MapKeys<Config>
// 'host' | 'port' | 'ssl'
```

### Empty Map

```typescript
type Empty = {}
type Result = MapKeys<Empty>
// never
```
