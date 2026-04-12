# ZodOutput

**自 1.2.0 起**

从 Zod schema 中提取输出类型。

## 签名

```typescript
type ZodOutput<T> = T extends { _output: infer O } ? O : T extends { _def: { type: string } } ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | Zod schema 类型 |

## 示例

### 基本用法

```typescript
import { z } from 'zod'
import type { ZodOutput } from 'uni-types'

const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional()
})

type User = ZodOutput<typeof UserSchema>
// { name: string; age?: number | undefined }
```

### 嵌套 Schema

```typescript
const NestedSchema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string().email()
  }),
  posts: z.array(z.object({
    title: z.string()
  }))
})

type Nested = ZodOutput<typeof NestedSchema>
```

## 相关

- [`ZodInput`](./zod-input) - 提取输入类型
- [`ZodShape`](./zod-shape) - 提取 schema 形状
