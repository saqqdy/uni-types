# RBAC

**自 1.5.0 起**

Role-Based Access Control system definition.

## 签名

```typescript
type RBAC = {
  roles: Record<string, Role>
  assignRole: (userId: string, role: string) => void
  revokeRole: (userId: string, role: string) => void
  hasRole: (userId: string, role: string) => boolean
  getRoles: (userId: string) => Role[]
  can: (userId: string, action: string, resource: string) => boolean
}
```

## 示例

### 基本用法

```typescript
import type { RBAC } from 'uni-types'

const rbac: RBAC = {
  roles: {
    admin: { name: 'admin', permissions: [] },
    user: { name: 'user', permissions: [] }
  },
  assignRole: (userId, role) => { /* implementation */ },
  revokeRole: (userId, role) => { /* implementation */ },
  hasRole: (userId, role) => true,
  getRoles: (userId) => [],
  can: (userId, action, resource) => true
}
```

## 相关

- [`ABAC`](./abac)
- [`AccessControl`](./access-control)
