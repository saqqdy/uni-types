# IsURL

**Since v1.3.0**

Check if a string type matches a valid URL format. Returns `true` if the string matches the URL pattern with a protocol and domain, otherwise returns `false`.

## Signature

```typescript
export type IsURL<T extends string> = T extends `${'http' | 'https'}://${string}.${string}`
	? true
	: false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The string type to validate as URL |

## Examples

### Basic Usage

```typescript
import type { IsURL } from 'uni-types'

type ValidHttp = IsURL<'http://example.com'> // true
type ValidHttps = IsURL<'https://example.com'> // true
type Invalid = IsURL<'not-a-url'> // false
```

### With Path and Query

```typescript
import type { IsURL } from 'uni-types'

type WithPath = IsURL<'https://example.com/path/to/page'> // true
type WithQuery = IsURL<'https://example.com?page=1&limit=10'> // true
type MissingProtocol = IsURL<'example.com'> // false
```