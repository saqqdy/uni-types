# StrictExclude

**Since 1.0.0**

Strictly exclude types.

## Signature

```typescript
type StrictExclude<T, U extends T> = T extends U ? never : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source type |
| `U` | The type to exclude (must be a subtype of T) |

## Description

Similar to TypeScript's built-in `Exclude`, but requires `U` to be a subtype of `T`, providing stricter type checking.

## Examples

### Basic Usage

```typescript
import type { StrictExclude } from 'uni-types'

type Status = 'pending' | 'active' | 'inactive' | 'deleted'

type NonPending = StrictExclude<Status, 'pending'>
// 'active' | 'inactive' | 'deleted'
```

### With Union Types

```typescript
type Event = {
  type: 'click'
  x: number
  y: number
} | {
  type: 'scroll'
  scrollTop: number
} | {
  type: 'keypress'
  key: string
}

type NonClickEvent = StrictExclude<Event, { type: 'click' }>
// { type: 'scroll'; scrollTop: number } | { type: 'keypress'; key: string }
```

## Related

- [`StrictExtract`](./strict-extract) - Strictly extract types
- [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#exclude-type-excludedunion) - TypeScript built-in Exclude
