# Policy

**自 1.5.0 起**

Represents an access control policy.

## 签名

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

## 示例

### 基本用法

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

## 相关

- [`RBAC`](./rbac)
- [`ABAC`](./abac)
