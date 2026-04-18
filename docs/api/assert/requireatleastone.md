# RequireAtLeastOne

**Since 1.3.0**

Require at least one of the specified keys to be present in an object type.

## Signature

```typescript
type RequireAtLeastOne<T, K extends keyof T = keyof T> = K extends K
  ? Omit<T, K> & { [P in K]-?: T[P] } & { [P in Exclude<K, K>]+?: T[P] }
  : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `K` | The keys where at least one must be present (defaults to all keys) |

## Examples

### Basic Usage

```typescript
import type { RequireAtLeastOne } from 'uni-types'

type Contact = { email?: string; phone?: string; address?: string }
type ValidContact = RequireAtLeastOne<Contact, 'email' | 'phone'>
// Must have at least email or phone, address remains optional
```

### With Default Keys

```typescript
type Options = { a?: number; b?: string; c?: boolean }
type AtLeastOne = RequireAtLeastOne<Options>
// Must have at least one of a, b, or c
```

### For API Responses

```typescript
type SearchResult = { id?: string; name?: string; code?: number }
type MatchResult = RequireAtLeastOne<SearchResult, 'id' | 'name'>
// Must match by id or name
```

## Related

- [`RequireExactlyOne`](./requireexactlyone) - Require exactly one key
- [`RequireKeys`](./requirekeys) - Make specific keys required
- [`MakeOptional`](./makeoptional) - Make specific keys optional
