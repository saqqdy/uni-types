# StrictExtract

Strictly extract matching types.

## Signature

```typescript
type StrictExtract<T, U extends T> = T extends U ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source type |
| `U` | The type to extract (must be a subtype of T) |

## Description

Similar to TypeScript's built-in `Extract`, but requires `U` to be a subtype of `T`, providing stricter type checking.

## Examples

### Basic Usage

```typescript
import type { StrictExtract } from 'uni-types'

type Status = 'pending' | 'active' | 'inactive' | 'deleted'

type ActiveStatus = StrictExtract<Status, 'active' | 'inactive'>
// 'active' | 'inactive'
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

type ClickEvent = StrictExtract<Event, { type: 'click' }>
// { type: 'click'; x: number; y: number }
```

## Related

- [`StrictExclude`](./strict-exclude) - Strictly exclude types
- [`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) - TypeScript built-in Extract
