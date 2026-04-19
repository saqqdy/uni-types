# APIGateway

**Since 1.5.0**

API gateway for routing requests to microservices with middleware support.

## Signature

```typescript
type APIGateway = {
  routes: GatewayRoute[]
  start: () => Promise<void>
  stop: () => Promise<void>
  addRoute: (route: GatewayRoute) => void
  removeRoute: (path: string) => void
}
```

## Parameters

This type has no generic parameters.

## Examples

### Basic Usage

```typescript
import type { APIGateway, GatewayRoute } from 'uni-types'

const gateway: APIGateway = {
  routes: [
    {
      path: '/api/users',
      method: 'GET',
      service: 'user-service',
      timeout: 5000
    },
    {
      path: '/api/orders',
      method: ['GET', 'POST'],
      service: 'order-service',
      timeout: 10000,
      rateLimit: { windowMs: 60000, max: 100 }
    }
  ],
  start: async () => { /* start gateway */ },
  stop: async () => { /* stop gateway */ },
  addRoute: (route) => { /* add route */ },
  removeRoute: (path) => { /* remove route */ }
}

await gateway.start()
```

### With Auth and CORS

```typescript
import type { APIGateway, GatewayRoute } from 'uni-types'

const secureGateway: APIGateway = {
  routes: [
    {
      path: '/api/admin',
      method: ['GET', 'POST', 'DELETE'],
      service: 'admin-service',
      auth: {
        type: 'jwt',
        required: true,
        validate: async (token) => token.length > 0
      },
      cors: {
        origin: ['https://admin.example.com'],
        methods: ['GET', 'POST', 'DELETE'],
        credentials: true
      },
      retryPolicy: {
        maxRetries: 3,
        backoff: 'exponential',
        initialDelay: 100,
        maxDelay: 5000
      }
    }
  ],
  start: async () => { /* start */ },
  stop: async () => { /* stop */ },
  addRoute: (route) => { /* add */ },
  removeRoute: (path) => { /* remove */ }
}
```

## Related

- [`GatewayRoute`](./gateway-route)
- [`Microservice`](./microservice)
