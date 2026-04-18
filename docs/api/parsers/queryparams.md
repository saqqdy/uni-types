# QueryParams

**Since 1.4.0**

Parse query string into object.

## Signature

```typescript
type QueryParams<S extends string> = S extends `?${infer Rest}` ? ParseQueryPairs<Rest> : Record<string, never>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | Query string starting with `?` |

## Description

Extracts key-value pairs from URL query string.

## Examples

### Basic Usage

```typescript
import type { QueryParams } from 'uni-types'

type Params = QueryParams<'?a=1&b=2'>
// { a: '1'; b: '2' }

type Empty = QueryParams<'?'>
// {}
```

## Related

- [`ParseURL`](./parseurl) - Parse full URL
- [`PathParams`](./pathparams) - Extract path params