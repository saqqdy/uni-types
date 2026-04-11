# StringLength

Get the length of a string at type level.

## Signature

```typescript
type StringLength<S extends string, Acc extends 0[] = []> = 
  S extends `${string}${infer Rest}`
    ? StringLength<Rest, [...Acc, 0]>
    : Acc['length']
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string to measure |

## Examples

### Basic Usage

```typescript
import type { StringLength } from 'uni-types'

type A = StringLength<'hello'>   // 5
type B = StringLength<''>        // 0
type C = StringLength<'abc'>     // 3
```

### Conditional Logic

```typescript
type IsLongString<S extends string> = StringLength<S> extends 1 | 2 | 3
  ? 'short'
  : 'long'
```

## Related

- [`PadStart`](./pad-start) - Pad string to length
- [`PadEnd`](./pad-end) - Pad string to length