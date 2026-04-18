# SQLType

**自 1.4.0 起**

TypeScript 到 SQL 类型映射。

## 签名

```typescript
type SQLType<T> = T extends string ? 'VARCHAR' : T extends number ? 'INTEGER' : T extends boolean ? 'BOOLEAN' : T extends Date ? 'TIMESTAMP' : 'TEXT'
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | TypeScript 类型 |

## 描述

将 TypeScript 类型映射到对应的 SQL 类型。

## 示例

### 基本用法

```typescript
import type { SQLType } from 'uni-types'

type Varchar = SQLType<string>
// 'VARCHAR'

type Integer = SQLType<number>
// 'INTEGER'

type Boolean = SQLType<boolean>
// 'BOOLEAN'
```

## 相关

- [`CreateTable`](./createtable) - CREATE TABLE 类型
- [`SQLColumn`](./sqlcolumn) - 列定义