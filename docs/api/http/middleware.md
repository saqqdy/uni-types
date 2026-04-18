# Middleware

**Since 1.4.0**

Middleware function type.

## Signature

```typescript
type Middleware<C extends Record<string, any> = object> = (
  ctx: Context<C>,
  next: () => Promise<void>
) => Promise<void>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `C` | Context type |

## Description

Middleware function that can modify context and call next middleware.

## Examples

### Basic Usage

```typescript
import type { Middleware, Context } from 'uni-types'

type AuthMiddleware = Middleware<{ user: { id: string } }>

const auth: AuthMiddleware = async (ctx, next) => {
  ctx.user = await authenticate(ctx.request)
  await next()
}
```

## Related

- [`Context`](./context) - Request context
- [`ComposeMiddleware`](./composemiddleware) - Compose middleware chain