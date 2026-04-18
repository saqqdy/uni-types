# SQLType

**Since 1.4.0**

TypeScript to SQL type mapping.

## Signature

```typescript
type SQLType<T> = T extends string ? 'VARCHAR' : T extends number ? 'INTEGER' : T extends boolean ? 'BOOLEAN' : T extends Date ? 'TIMESTAMP' : 'TEXT'
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | TypeScript type |

## Description

Maps TypeScript types to corresponding SQL types.

## Examples

### Basic Usage

```typescript
import type { SQLType } from 'uni-types'

type Varchar = SQLType<string>
// 'VARCHAR'

type Integer = SQLType<number>
// 'INTEGER'

type Boolean = SQLType<boolean>
// 'BOOLEAN'
```

## Related

- [`CreateTable`](./createtable) - CREATE TABLE type
- [`SQLColumn`](./sqlcolumn) - Column definition