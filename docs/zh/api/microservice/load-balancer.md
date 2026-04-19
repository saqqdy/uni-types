# LoadBalancer

**自 1.5.0 起**

Load balancer for distributing requests across service instances with configurable strategies.

## 签名

```typescript
type LoadBalancer = {
  select: (instances: ServiceInstance[]) => ServiceInstance | undefined
  getStrategy: () => LoadBalancerStrategy
  setStrategy: (strategy: LoadBalancerStrategy) => void
}
```

## 参数

This type has no generic parameters.

## 示例

### 基本用法

```typescript
import type { LoadBalancer, ServiceInstance } from 'uni-types'

const instances: ServiceInstance[] = [
  { id: '1', name: 'api', host: '10.0.0.1', port: 3000, version: '1.0', status: 'healthy' },
  { id: '2', name: 'api', host: '10.0.0.2', port: 3000, version: '1.0', status: 'healthy' },
  { id: '3', name: 'api', host: '10.0.0.3', port: 3000, version: '1.0', status: 'unhealthy' }
]

const lb: LoadBalancer = {
  select: (instances) => instances[0],
  getStrategy: () => 'round-robin',
  setStrategy: (strategy) => { /* update strategy */ }
}

const instance = lb.select(instances.filter(i => i.status === 'healthy'))
```

### Weighted Strategy

```typescript
import type { LoadBalancer, ServiceInstance } from 'uni-types'

const lb: LoadBalancer = {
  select: (instances) => instances[0],
  getStrategy: () => 'weighted',
  setStrategy: (strategy) => { /* update */ }
}

lb.setStrategy('least-connections')

const weightedInstances: ServiceInstance[] = [
  { id: '1', name: 'api', host: '10.0.0.1', port: 3000, version: '1.0', status: 'healthy', weight: 3, connections: 5 },
  { id: '2', name: 'api', host: '10.0.0.2', port: 3000, version: '1.0', status: 'healthy', weight: 1, connections: 12 }
]

const selected = lb.select(weightedInstances)
```

## 相关

- [`ServiceInstance`](./service-instance)
- [`ServiceRegistry`](./service-registry)
