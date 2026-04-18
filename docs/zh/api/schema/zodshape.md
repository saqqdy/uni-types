# ZodShape

**自 1.2.0 起**

从 ZodObject 中提取形状。

## 签名

```typescript
type ZodShape<T> = T extends { _def: { shape: () => infer S } }
  ? S
  : T extends { shape: infer S }
    ? S
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | ZodObject schema 类型 |

## 描述

从 ZodObject schema 中提取形状类型。形状表示 schema 中定义的属性结构。

## 示例

### 基本用法

```typescript
import type { ZodShape } from 'uni-types'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  age: z.number()
})

type Shape = ZodShape<typeof UserSchema>
// { name: ZodString; age: ZodNumber }
```

### 与嵌套对象一起使用

```typescript
import type { ZodShape } from 'uni-types'
import { z } from 'zod'

const ConfigSchema = z.object({
  database: z.object({
    host: z.string(),
    port: z.number()
  })
})

type Shape = ZodShape<typeof ConfigSchema>
// { database: ZodObject<{ host: ZodString; port: ZodNumber }> }
```

## 相关

- [`ZodOutput`](./zod-output) - 提取输出类型
- [`ZodArrayElement`](./zodarrayelement) - 获取数组元素类型
