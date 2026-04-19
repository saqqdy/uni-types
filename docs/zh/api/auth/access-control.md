# AccessControl

**自 1.5.0 起**

Unified access control system combining RBAC and ABAC.

## 签名

```typescript
type AccessControl = {
  check: (context: PolicyContext) => PolicyDecision
  grant: (permission: Permission) => void
  revoke: (permission: Permission) => void
  getPermissions: (principal: string) => Permission[]
}
```

## 示例

### 基本用法

```typescript
import type { AccessControl } from 'uni-types'

const ac: AccessControl = {
  check: (context) => ({ allowed: true, reason: 'Permission granted' }),
  grant: (permission) => { /* grant permission */ },
  revoke: (permission) => { /* revoke permission */ },
  getPermissions: (principal) => []
}
```

## 相关

- [`RBAC`](./rbac)
- [`ABAC`](./abac)
