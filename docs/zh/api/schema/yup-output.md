# YupOutput

**自 1.2.0 起**

从 Yup schema 中提取输出类型。

## 签名

```typescript
type YupOutput<T> = T extends { __outputType: infer O }
  ? O
  : T extends { spec: object }
    ? T
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | Yup schema 类型 |

## 描述

提取表示 Yup schema 输出的 TypeScript 类型。适用于获取验证后将返回的类型。

## 示例

### 基本用法

```typescript
import type { YupOutput } from 'uni-types'
import * as yup from 'yup'

const UserSchema = yup.object({
  name: yup.string().required(),
  age: yup.number().optional()
})

type User = YupOutput<typeof UserSchema>
// { name: string; age?: number | undefined }
```

### 与转换一起使用

```typescript
import type { YupOutput } from 'uni-types'
import * as yup from 'yup'

const DateSchema = yup.string().transform(value => new Date(value))

type Output = YupOutput<typeof DateSchema>
// string（或转换后的类型）
```

## 相关

- [`YupInput`](./yup-input) - 提取输入类型
- [`IsYupSchema`](./isyupschema) - 检查是否为 Yup schema
