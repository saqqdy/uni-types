# Policy

**Since 1.5.0**

Represents an access control policy.

## Signature

```typescript
type Policy<T = unknown> = {
  id: string
  name: string
  effect: 'allow' | 'deny'
  principals: string[]
  actions: string[]
  resources: string[]
  conditions?: PolicyCondition<T>[]
}
```

## Examples

### Basic Usage

```typescript
import type { Policy } from 'uni-types'

const allowReadPolicy: Policy = {
  id: 'policy-001',
  name: 'Allow Read Access',
  effect: 'allow',
  principals: ['user:*'],
  actions: ['read'],
  resources: ['documents/*']
}
```

## Related

- [`RBAC`](./rbac)
- [`ABAC`](./abac)
