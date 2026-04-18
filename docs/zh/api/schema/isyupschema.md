# IsYupSchema

**自 1.2.0 起**

检查类型是否为 Yup schema。

## 签名

```typescript
type IsYupSchema<T> = T extends { spec: object }
  ? true
  : T extends { __isYupSchema: true }
    ? true
    : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 描述

通过检查是否存在 `spec` 属性或 Yup schema 具有的 `__isYupSchema` 标记来确定给定类型是否为 Yup schema。

## 示例

### 基本用法

```typescript
import type { IsYupSchema } from 'uni-types'
import * as yup from 'yup'

const StringSchema = yup.string()

type Check = IsYupSchema<typeof StringSchema>  // true
type CheckPlain = IsYupSchema<string>  // false
```

### 与条件类型一起使用

```typescript
import type { IsYupSchema } from 'uni-types'
import * as yup from 'yup'

type GetSchemaType<T> = IsYupSchema<T> extends true
  ? T['__outputType']
  : T

const UserSchema = yup.object({ name: yup.string() })

type Result = GetSchemaType<typeof UserSchema>
// { name: string }
```

## 相关

- [`YupOutput`](./yup-output) - 提取输出类型
- [`YupInput`](./yup-input) - 提取输入类型
