# StringifyJSON

**Since 1.4.0**

Stringify type to JSON string representation.

## Signature

```typescript
type StringifyJSON<T> = T extends string ? `"${T}"` : T extends number ? `${T}` : ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Type to stringify |

## Description

Converts a TypeScript type to its JSON string representation.

## Examples

### Basic Usage

```typescript
import type { StringifyJSON } from 'uni-types'

type Str = StringifyJSON<'hello'>
// '"hello"'

type Num = StringifyJSON<123>
// '123'

type Bool = StringifyJSON<true>
// 'true'

type Null = StringifyJSON<null>
// 'null'
```

## Related

- [`ParseJSON`](./parsejson) - Parse JSON string to type