# Database Types

**Since 1.4.0**

Type-level database utilities.

## SQL Type Mapping

### SQLType

Map TypeScript types to SQL types.

```typescript
import type { SQLType } from 'uni-types'

type StringType = SQLType<string>  // 'VARCHAR'
type IntType = SQLType<number>  // 'INTEGER'
type BoolType = SQLType<boolean>  // 'BOOLEAN'
type DateType = SQLType<Date>  // 'TIMESTAMP'
```

### SQLColumn

SQL column definition.

```typescript
import type { SQLColumn } from 'uni-types'

type Col = SQLColumn<string, { nullable: false; unique: true }>
```

### CreateTable

Generate CREATE TABLE statement type.

```typescript
import type { CreateTable } from 'uni-types'

type UserTable = CreateTable<{ id: number; name: string; email: string }>
```

## Query Types

### SelectQuery

SELECT query type.

```typescript
import type { SelectQuery } from 'uni-types'

type Query = SelectQuery<User, ['id', 'name']>
```

### WhereClause

WHERE clause type.

```typescript
import type { WhereClause } from 'uni-types'

type Clause = WhereClause<{ id: number; status: string }>
```

### InsertQuery / UpdateQuery / DeleteQuery

Mutation query types.

```typescript
import type { InsertQuery, UpdateQuery, DeleteQuery } from 'uni-types'

type Insert = InsertQuery<User, { name: string }>
type Update = UpdateQuery<User, { name: string }, { id: number }>
type Delete = DeleteQuery<User, { id: number }>
```

### JoinQuery

JOIN query type.

```typescript
import type { JoinQuery } from 'uni-types'

type Query = JoinQuery<User, Post, 'id', 'userId'>
```

## Query Builder

### QueryBuilder

Query builder type.

```typescript
import type { QueryBuilder } from 'uni-types'

type Builder = QueryBuilder<User>
```

### WhereBuilder

WHERE builder type.

```typescript
import type { WhereBuilder } from 'uni-types'

type Builder = WhereBuilder<User>
```

## Migration Types

### Migration

Migration definition.

```typescript
import type { Migration } from 'uni-types'

type CreateUserMigration = Migration<{
  name: 'create_users'
  up: CreateTable<{ id: number; name: string }>
  down: 'DROP TABLE users'
}>
```

### MigrationHistory

Migration history type.

```typescript
import type { MigrationHistory } from 'uni-types'

type History = MigrationHistory<['create_users', 'add_email_column']>
```

## Index Types

### Index

Index definition.

```typescript
import type { Index } from 'uni-types'

type UserEmailIndex = Index<User, 'email'>
```

### UniqueIndex / CompositeIndex

Unique and composite index.

```typescript
import type { UniqueIndex, CompositeIndex } from 'uni-types'

type Unique = UniqueIndex<User, 'email'>
type Composite = CompositeIndex<User, ['email', 'status']>
```

## Connection Types

### DatabaseConfig

Database connection config.

```typescript
import type { DatabaseConfig } from 'uni-types'

type Config = DatabaseConfig<{ host: 'localhost'; port: 5432; database: 'app' }>
```

### Transaction

Transaction type.

```typescript
import type { Transaction } from 'uni-types'

type Tx = Transaction<User[]>
```

## Related

- [HTTP & API](./http) - HTTP types
- [Testing](./testing) - Testing utilities