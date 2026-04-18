# RequireExactlyOne

**Since 1.3.0**

Require exactly one of the specified keys to be present in an object type.

## Signature

```typescript
type RequireExactlyOne<T, K extends keyof T = keyof T> = K extends K
  ? Omit<T, K> & Required<Pick<T, K>> & Partial<Omit<T, K>>
  : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `K` | The keys where exactly one must be present (defaults to all keys) |

## Examples

### Basic Usage

```typescript
import type { RequireExactlyOne } from 'uni-types'

type Identifier = { id?: number; uuid?: string; slug?: string }
type SingleIdentifier = RequireExactlyOne<Identifier, 'id' | 'uuid' | 'slug'>
// Must have exactly one of id, uuid, or slug
```

### For Mutually Exclusive Options

```typescript
type Config = { url?: string; file?: string; data?: object }
type SourceConfig = RequireExactlyOne<Config, 'url' | 'file' | 'data'>
// Must provide exactly one source
```

### With Default Behavior

```typescript
type Options = { a?: number; b?: string }
type ExactlyOne = RequireExactlyOne<Options>
// Must have exactly one of a or b (not both)
```

## Related

- [`RequireAtLeastOne`](./requireatleastone) - Require at least one key
- [`RequireKeys`](./requirekeys) - Make specific keys required
