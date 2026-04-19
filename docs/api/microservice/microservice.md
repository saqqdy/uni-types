# Microservice

**Since 1.5.0**

Represents a microservice with lifecycle management, configuration, and health reporting.

## Signature

```typescript
type Microservice<T = unknown> = {
  name: string
  version: string
  config: ServiceConfig<T>
  start: () => Promise<void>
  stop: () => Promise<void>
  health: () => Promise<HealthReport>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The options type for the service configuration |

## Examples

### Basic Usage

```typescript
import type { Microservice } from 'uni-types'

type UserServiceOptions = {
  maxConnections: number
  cacheEnabled: boolean
}

const userService: Microservice<UserServiceOptions> = {
  name: 'user-service',
  version: '1.0.0',
  config: {
    name: 'user-service',
    version: '1.0.0',
    port: 3000,
    host: '0.0.0.0',
    env: 'production',
    options: { maxConnections: 100, cacheEnabled: true }
  },
  start: async () => { /* start server */ },
  stop: async () => { /* graceful shutdown */ },
  health: async () => ({ status: 'healthy', timestamp: new Date(), service: 'user-service', version: '1.0.0', uptime: 3600, checks: {} })
}
```

### Multiple Services

```typescript
import type { Microservice } from 'uni-types'

const authService: Microservice = {
  name: 'auth-service',
  version: '2.1.0',
  config: {
    name: 'auth-service',
    version: '2.1.0',
    port: 3001,
    host: '0.0.0.0',
    env: 'production',
    dependencies: ['user-service', 'token-store']
  },
  start: async () => { /* start */ },
  stop: async () => { /* stop */ },
  health: async () => ({ status: 'healthy', timestamp: new Date(), service: 'auth-service', version: '2.1.0', uptime: 7200, checks: {} })
}
```

## Related

- [`ServiceRegistry`](./service-registry)
- [`ServiceConfig`](./service-config)
