# ZodArrayElement

**自 1.2.0 起**

从 ZodArray 中获取元素类型。

## 签名

```typescript
type ZodArrayElement<T> = T extends { _def: { type: 'array', elementType: infer E } }
  ? E
  : T extends { element: infer E }
    ? E
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | ZodArray schema 类型 |

## 描述

从 ZodArray schema 中提取元素类型。适用于获取数组 schema 中项目的类型。

## 示例

### 基本用法

```typescript
import type { ZodArrayElement } from 'uni-types'
import { z } from 'zod'

const NumbersSchema = z.array(z.number())

type Element = ZodArrayElement<typeof NumbersSchema>
// ZodNumber
```

### 与复杂元素类型一起使用

```typescript
import type { ZodArrayElement } from 'uni-types'
import { z } from 'zod'

const UsersSchema = z.array(z.object({
  id: z.string(),
  name: z.string()
}))

type Element = ZodArrayElement<typeof UsersSchema>
// ZodObject<{ id: ZodString; name: ZodString }>
```

## 相关

- [`ZodOutput`](./zod-output) - 提取输出类型
- [`ZodShape`](./zod-shape) - 提取 schema 形状
