# HTTPMethod

**Since 1.4.0**

HTTP methods union type.

## Signature

```typescript
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'
```

## Description

Union type of standard HTTP methods.

## Examples

### Basic Usage

```typescript
import type { HTTPMethod } from 'uni-types'

const method: HTTPMethod = 'GET' // Valid
const invalid: HTTPMethod = 'INVALID' // Error
```

## Related

- [`HTTPStatus`](./httpstatus) - HTTP status codes
- [`Route`](./route) - Route definition