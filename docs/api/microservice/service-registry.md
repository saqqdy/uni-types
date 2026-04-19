# ServiceRegistry

**Since 1.5.0**

Service registry for registering, discovering, and tracking service instances with heartbeat support.

## Signature

```typescript
type ServiceRegistry<S = unknown> = {
  register: (service: S) => Promise<void>
  deregister: (serviceName: string) => Promise<void>
  getService: (serviceName: string) => Promise<ServiceInstance | undefined>
  getAllServices: () => Promise<ServiceInstance[]>
  heartbeat: (serviceName: string, instanceId: string) => Promise<void>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The service type to register |

## Examples

### Basic Usage

```typescript
import type { ServiceRegistry } from 'uni-types'

const registry: ServiceRegistry = {
  register: async (service) => { /* add to registry */ },
  deregister: async (serviceName) => { /* remove from registry */ },
  getService: async (serviceName) => { return undefined },
  getAllServices: async () => { return [] },
  heartbeat: async (serviceName, instanceId) => { /* update heartbeat */ }
}

await registry.register({ name: 'user-service', version: '1.0.0' })
const service = await registry.getService('user-service')
```

### With Health Tracking

```typescript
import type { ServiceRegistry, ServiceInstance } from 'uni-types'

const registry: ServiceRegistry<ServiceInstance> = {
  register: async (service) => { /* add to registry */ },
  deregister: async (serviceName) => { /* remove */ },
  getService: async (serviceName) => { return undefined },
  getAllServices: async () => { return [] },
  heartbeat: async (serviceName, instanceId) => {
    // Update lastHeartbeat timestamp
    console.log(`Heartbeat from ${serviceName}:${instanceId}`)
  }
}

// Periodic heartbeat
setInterval(() => {
  registry.heartbeat('user-service', 'inst-001')
}, 10000)
```

## Related

- [`Microservice`](./microservice)
- [`LoadBalancer`](./load-balancer)
