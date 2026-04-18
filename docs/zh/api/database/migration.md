# Migration

**自 1.4.0 起**

数据库迁移类型。

## 签名

```typescript
interface Migration<T> {
  up: MigrationUp<T>
  down: MigrationDown<T>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 迁移定义类型 |

## 描述

定义包含升级和降级操作的数据库迁移。

## 示例

### 基本用法

```typescript
import type { Migration, CreateTable } from 'uni-types'

interface CreateUserTable extends Migration<CreateTable<{ id: number; name: string }>> {
  up: { action: 'createTable'; table: 'users'; columns: { id: 'INTEGER'; name: 'VARCHAR' } }
  down: { action: 'dropTable'; table: 'users' }
}
```

## 相关

- [`MigrationUp`](./migrationup) - 升级迁移
- [`MigrationDown`](./migrationdown) - 降级迁移