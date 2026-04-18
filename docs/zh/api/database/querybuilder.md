# QueryBuilder

**自 1.4.0 起**

类型安全的查询构建器。

## 签名

```typescript
interface QueryBuilder<T extends Record<string, any>> {
  select: <Fields extends (keyof T)[]>(fields: Fields) => SelectQuery<T, Fields>
  insert: (data: Partial<T>) => InsertQuery<T>
  update: (data: Partial<T>) => UpdateQuery<T>
  delete: () => DeleteQuery<T>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 表行类型 |

## 描述

用于数据库操作的类型安全查询构建器。

## 示例

### 基本用法

```typescript
import type { QueryBuilder } from 'uni-types'

interface User {
  id: number
  name: string
  email: string
}

type UserQuery = QueryBuilder<User>
```

## 相关

- [`WhereBuilder`](./wherebuilder) - WHERE 子句构建器
- [`SelectQuery`](./selectquery) - SELECT 查询类型