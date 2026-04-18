# Migration

**Since 1.4.0**

Database migration type.

## Signature

```typescript
interface Migration<T> {
  up: MigrationUp<T>
  down: MigrationDown<T>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Migration definition type |

## Description

Defines a database migration with up and down operations.

## Examples

### Basic Usage

```typescript
import type { Migration, CreateTable } from 'uni-types'

interface CreateUserTable extends Migration<CreateTable<{ id: number; name: string }>> {
  up: { action: 'createTable'; table: 'users'; columns: { id: 'INTEGER'; name: 'VARCHAR' } }
  down: { action: 'dropTable'; table: 'users' }
}
```

## Related

- [`MigrationUp`](./migrationup) - Up migration
- [`MigrationDown`](./migrationdown) - Down migration