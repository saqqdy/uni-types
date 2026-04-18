# MapSet

**Since 1.3.0**

Set a key-value pair in a type-level map. Returns a new map with the updated entry.

## Signature

```typescript
export type MapSet<M, K, V> = Omit<M, K> & { [P in K]: V }
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `M` | The original type-level map |
| `K` | The key to set |
| `V` | The value to associate with the key |

## Examples

### Basic Usage

```typescript
import type { MapSet } from 'uni-types'

type Config = { host: string; port: number }
type Updated = MapSet<Config, 'host', 'localhost'>
// { port: number; host: 'localhost' }
```

### Adding New Key

```typescript
type Config = { host: string; port: number }
type WithProtocol = MapSet<Config, 'protocol', 'https'>
// { host: string; port: number; protocol: 'https' }
```
