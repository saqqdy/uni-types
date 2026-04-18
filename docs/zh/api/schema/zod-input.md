# ZodInput

**自 1.2.0 起**

从 Zod schema 中提取输入类型。

## 签名

```typescript
type ZodInput<T> = T extends { _input: infer I } ? I : T extends { _def: { type: string } } ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | Zod schema 类型 |

## 描述

提取表示 Zod schema 输入的 TypeScript 类型。适用于获取解析时接受的类型，由于转换的存在，可能与输出类型不同。

## 示例

### 基本用法

```typescript
import type { ZodInput } from 'uni-types'
import { z } from 'zod'

const DateSchema = z.string().transform(s => new Date(s))

type Input = ZodInput<typeof DateSchema>
// string（转换前的输入类型）
```

### 与对象 Schema 一起使用

```typescript
import type { ZodInput } from 'uni-types'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  age: z.coerce.number()  // 接受字符串输入
})

type Input = ZodInput<typeof UserSchema>
// age 可能接受字符串输入的类型
```

## 相关

- [`ZodOutput`](./zod-output) - 提取输出类型
- [`ZodShape`](./zod-shape) - 提取 schema 形状
