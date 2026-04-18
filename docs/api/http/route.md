# Route

**Since 1.4.0**

HTTP route definition.

## Signature

```typescript
interface Route<Path extends string, Method extends HTTPMethod, Handler, Context = object> {
  path: Path
  method: Method
  handler: Handler
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `Path` | Route path string |
| `Method` | HTTP method |
| `Handler` | Route handler type |
| `Context` | Request context type |

## Description

Defines an HTTP route with path, method, and handler.

## Examples

### Basic Usage

```typescript
import type { Route, HTTPMethod } from 'uni-types'

type GetUser = Route<'/users/:id', 'GET', (ctx: { params: { id: string } }) => Promise<Response>>
```

## Related

- [`RouteParams`](./routeparams) - Extract route params
- [`Router`](./router) - Router type