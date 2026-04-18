# YupInput

**自 1.2.0 起**

从 Yup schema 中提取输入类型。

## 签名

```typescript
type YupInput<T> = T extends { __inputType: infer I }
  ? I
  : T extends { spec: object }
    ? T
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | Yup schema 类型 |

## 描述

提取表示 Yup schema 输入的 TypeScript 类型。适用于获取验证时接受的类型。

## 示例

### 基本用法

```typescript
import type { YupInput } from 'uni-types'
import * as yup from 'yup'

const UserSchema = yup.object({
  name: yup.string().required(),
  age: yup.number()
})

type Input = YupInput<typeof UserSchema>
// { name: string; age?: number | undefined }
```

### 与类型转换一起使用

```typescript
import type { YupInput } from 'uni-types'
import * as yup from 'yup'

const NumberSchema = yup.number().transform(value => Number(value))

type Input = YupInput<typeof NumberSchema>
// number（转换前的输入类型）
```

## 相关

- [`YupOutput`](./yup-output) - 提取输出类型
- [`IsYupSchema`](./isyupschema) - 检查是否为 Yup schema
