# IsZodSchema

**自 1.2.0 起**

检查类型是否为 Zod schema。

## 签名

```typescript
type IsZodSchema<T> = T extends { _def: object } ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 描述

通过检查是否存在所有 Zod schema 都具有的 `_def` 属性来确定给定类型是否为 Zod schema。

## 示例

### 基本用法

```typescript
import type { IsZodSchema } from 'uni-types'
import { z } from 'zod'

const StringSchema = z.string()

type Check = IsZodSchema<typeof StringSchema>  // true
type CheckPlain = IsZodSchema<string>  // false
```

### 与条件类型一起使用

```typescript
import type { IsZodSchema } from 'uni-types'
import { z } from 'zod'

type GetSchemaType<T> = IsZodSchema<T> extends true
  ? T['_output']
  : T

const UserSchema = z.object({ name: z.string() })

type Result = GetSchemaType<typeof UserSchema>
// { name: string }
```

## 相关

- [`ZodOutput`](./zod-output) - 提取输出类型
- [`ZodInput`](./zod-input) - 提取输入类型
