# Role

**自 1.5.0 起**

Represents a role with associated permissions.

## 签名

```typescript
type Role = {
  name: string
  permissions: Permission[]
  inherits?: string[]
}
```

## 示例

### 基本用法

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

## 相关

- [`Permission`](./permission)
- [`RBAC`](./rbac)
