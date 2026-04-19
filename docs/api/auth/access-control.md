# AccessControl

**Since 1.5.0**

Unified access control system combining RBAC and ABAC.

## Signature

```typescript
type AccessControl = {
  check: (context: PolicyContext) => PolicyDecision
  grant: (permission: Permission) => void
  revoke: (permission: Permission) => void
  getPermissions: (principal: string) => Permission[]
}
```

## Examples

### Basic Usage

```typescript
import type { AccessControl } from 'uni-types'

const ac: AccessControl = {
  check: (context) => ({ allowed: true, reason: 'Permission granted' }),
  grant: (permission) => { /* grant permission */ },
  revoke: (permission) => { /* revoke permission */ },
  getPermissions: (principal) => []
}
```

## Related

- [`RBAC`](./rbac)
- [`ABAC`](./abac)
