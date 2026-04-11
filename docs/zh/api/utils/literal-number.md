# LiteralNumber

数字字面量类型。

## 签名

```typescript
type LiteralNumber<T> = T extends number ? (number extends T ? never : T) : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 描述

确保类型是数字字面量，而不是宽泛的 `number` 类型。

## 示例

### 基本用法

```typescript
import type { LiteralNumber } from 'uni-types'

type A = LiteralNumber<42> // 42
type B = LiteralNumber<100> // 100
type C = LiteralNumber<number> // never
```

### 状态码约束

```typescript
type HttpStatusCode = 200 | 201 | 400 | 404 | 500

function setStatus<T extends number>(
  code: LiteralNumber<T>
): { status: T } {
  return { status: code }
}

setStatus(200) // { status: 200 }
setStatus(404) // { status: 404 }
```

## 相关

- [`Literal`](./literal) - 字面量类型
- [`LiteralString`](./literal-string) - 字符串字面量
- [`LiteralBoolean`](./literal-boolean) - 布尔字面量
