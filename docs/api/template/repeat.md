# Repeat

Repeat a string N times.

## Signature

```typescript
type Repeat<
  S extends string,
  N extends number,
  Acc extends string = '',
  Count extends 0[] = [],
> = Count['length'] extends N ? Acc : Repeat<S, N, `${Acc}${S}`, [...Count, 0]>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string to repeat |
| `N` | Number of times to repeat |

## Examples

### Basic Usage

```typescript
import type { Repeat } from 'uni-types'

type A = Repeat<'ab', 3>   // 'ababab'
type B = Repeat<'x', 5>    // 'xxxxx'
type C = Repeat<'hi', 0>   // ''
```

### Creating Indent Strings

```typescript
type Indent = Repeat<' ', 4>  // '    '
type Tab = Repeat<'\t', 2>    // '\t\t'
```

### String Padding

```typescript
type DashedLine = Repeat<'-', 10>  // '----------'
```

## Related

- [`PadStart`](./pad-start) - Pad string on left
- [`PadEnd`](./pad-end) - Pad string on right