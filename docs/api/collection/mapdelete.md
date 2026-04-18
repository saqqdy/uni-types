# MapDelete

**Since 1.3.0**

Delete a key from a type-level map. Returns a new map without the specified key.

## Signature

```typescript
export type MapDelete<M, K> = Omit<M, K>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `M` | The original type-level map |
| `K` | The key to delete |

## Examples

### Basic Usage

```typescript
import type { MapDelete } from 'uni-types'

type Config = { host: string; port: number; ssl: boolean }
type Result = MapDelete<Config, 'ssl'>
// { host: string; port: number }
```

### Deleting Non-Existent Key

```typescript
type Result = MapDelete<Config, 'protocol'>
// { host: string; port: number; ssl: boolean }
```
