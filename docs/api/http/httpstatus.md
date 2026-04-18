# HTTPStatus

**Since 1.4.0**

HTTP status codes union type.

## Signature

```typescript
type HTTPStatus = 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 500 | ...
```

## Description

Union type of common HTTP status codes.

## Examples

### Basic Usage

```typescript
import type { HTTPStatus } from 'uni-types'

const ok: HTTPStatus = 200
const notFound: HTTPStatus = 404
const serverError: HTTPStatus = 500
```

## Related

- [`HTTPMethod`](./httpmethod) - HTTP methods
- [`APIResponse`](./apiresponse) - API response type