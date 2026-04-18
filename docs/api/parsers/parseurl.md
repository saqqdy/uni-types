# ParseURL

**Since 1.4.0**

Parse URL string into components.

## Signature

```typescript
type ParseURL<S extends string> = S extends `${infer Protocol}://${infer Rest}` ? ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | URL string to parse |

## Description

Extracts protocol, host, pathname, search, and hash from URL.

## Examples

### Basic Usage

```typescript
import type { ParseURL } from 'uni-types'

type URL = ParseURL<'https://example.com/path?q=1'>
// { protocol: 'https'; host: 'example.com'; pathname: '/path'; search: '?q=1'; hash: '' }

type WithHash = ParseURL<'https://example.com#section'>
// { protocol: 'https'; host: 'example.com'; pathname: '/'; search: ''; hash: '#section' }
```

## Related

- [`QueryParams`](./queryparams) - Parse query string
- [`PathParams`](./pathparams) - Extract path params