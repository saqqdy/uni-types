# Role

**Since 1.5.0**

Represents a role with associated permissions.

## Signature

```typescript
type Role = {
  name: string
  permissions: Permission[]
  inherits?: string[]
}
```

## Examples

### Basic Usage

```typescript
import type { Role, Permission } from 'uni-types'

const adminRole: Role = {
  name: 'admin',
  permissions: [
    { name: 'users:*', resource: 'users', action: '*' },
    { name: 'posts:*', resource: 'posts', action: '*' }
  ]
}

const editorRole: Role = {
  name: 'editor',
  permissions: [
    { name: 'posts:read', resource: 'posts', action: 'read' },
    { name: 'posts:update', resource: 'posts', action: 'update' }
  ],
  inherits: ['viewer']
}
```

## Related

- [`Permission`](./permission)
- [`RBAC`](./rbac)
