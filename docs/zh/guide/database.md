# 数据库类型

**自 1.4.0 起**

类型级数据库工具。

## SQL 类型映射

### SQLType

将 TypeScript 类型映射为 SQL 类型。

```typescript
import type { SQLType } from 'uni-types'

type StringType = SQLType<string>  // 'VARCHAR'
type IntType = SQLType<number>  // 'INTEGER'
type BoolType = SQLType<boolean>  // 'BOOLEAN'
type DateType = SQLType<Date>  // 'TIMESTAMP'
```

### SQLColumn

SQL 列定义。

```typescript
import type { SQLColumn } from 'uni-types'

type Col = SQLColumn<string, { nullable: false; unique: true }>
```

### CreateTable

生成 CREATE TABLE 语句类型。

```typescript
import type { CreateTable } from 'uni-types'

type UserTable = CreateTable<{ id: number; name: string; email: string }>
```

## 查询类型

### SelectQuery

SELECT 查询类型。

```typescript
import type { SelectQuery } from 'uni-types'

type Query = SelectQuery<User, ['id', 'name']>
```

### WhereClause

WHERE 子句类型。

```typescript
import type { WhereClause } from 'uni-types'

type Clause = WhereClause<{ id: number; status: string }>
```

### InsertQuery / UpdateQuery / DeleteQuery

变更查询类型。

```typescript
import type { InsertQuery, UpdateQuery, DeleteQuery } from 'uni-types'

type Insert = InsertQuery<User, { name: string }>
type Update = UpdateQuery<User, { name: string }, { id: number }>
type Delete = DeleteQuery<User, { id: number }>
```

### JoinQuery

JOIN 查询类型。

```typescript
import type { JoinQuery } from 'uni-types'

type Query = JoinQuery<User, Post, 'id', 'userId'>
```

## 查询构建器

### QueryBuilder

查询构建器类型。

```typescript
import type { QueryBuilder } from 'uni-types'

type Builder = QueryBuilder<User>
```

### WhereBuilder

WHERE 构建器类型。

```typescript
import type { WhereBuilder } from 'uni-types'

type Builder = WhereBuilder<User>
```

## 迁移类型

### Migration

迁移定义。

```typescript
import type { Migration } from 'uni-types'

type CreateUserMigration = Migration<{
  name: 'create_users'
  up: CreateTable<{ id: number; name: string }>
  down: 'DROP TABLE users'
}>
```

### MigrationHistory

迁移历史类型。

```typescript
import type { MigrationHistory } from 'uni-types'

type History = MigrationHistory<['create_users', 'add_email_column']>
```

## 索引类型

### Index

索引定义。

```typescript
import type { Index } from 'uni-types'

type UserEmailIndex = Index<User, 'email'>
```

### UniqueIndex / CompositeIndex

唯一索引和复合索引。

```typescript
import type { UniqueIndex, CompositeIndex } from 'uni-types'

type Unique = UniqueIndex<User, 'email'>
type Composite = CompositeIndex<User, ['email', 'status']>
```

## 连接类型

### DatabaseConfig

数据库连接配置。

```typescript
import type { DatabaseConfig } from 'uni-types'

type Config = DatabaseConfig<{ host: 'localhost'; port: 5432; database: 'app' }>
```

### Transaction

事务类型。

```typescript
import type { Transaction } from 'uni-types'

type Tx = Transaction<User[]>
```

## 相关

- [HTTP & API](./http) - HTTP 类型
- [类型测试](./testing) - 测试工具