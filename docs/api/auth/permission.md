# Permission

**Since 1.5.0**

Represents a permission in an access control system.

## Signature

```typescript
type Permission = {
  name: string
  resource: string
  action: 'create' | 'read' | 'update' | 'delete' | '*' | string
  conditions?: Record<string, unknown>
}
```

## Examples

### Basic Usage

```typescript
import type { Permission } from 'uni-types'

const readUsers: Permission = {
  name: 'users:read',
  resource: 'users',
  action: 'read'
}

const deletePosts: Permission = {
  name: 'posts:delete',
  resource: 'posts',
  action: 'delete',
  conditions: { owned: true }
}
```

## Related

- [`Role`](./role)
- [`Policy`](./policy)
