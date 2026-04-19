# Permission

**自 1.5.0 起**

Represents a permission in an access control system.

## 签名

```typescript
type Permission = {
  name: string
  resource: string
  action: 'create' | 'read' | 'update' | 'delete' | '*' | string
  conditions?: Record<string, unknown>
}
```

## 示例

### 基本用法

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

## 相关

- [`Role`](./role)
- [`Policy`](./policy)
