# LiteralString

字符串字面量类型。

## 签名

```typescript
type LiteralString<T> = T extends string ? (string extends T ? never : T) : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 描述

确保类型是字符串字面量，而不是宽泛的 `string` 类型。

## 示例

### 基本用法

```typescript
import type { LiteralString } from 'uni-types'

type A = LiteralString<'hello'> // 'hello'
type B = LiteralString<'world'> // 'world'
type C = LiteralString<string> // never
```

### 函数约束

```typescript
function createAction<T extends string>(
  type: LiteralString<T>
): { type: T } {
  return { type }
}

createAction('ADD_TODO') // { type: 'ADD_TODO' }
createAction('REMOVE_TODO') // { type: 'REMOVE_TODO' }
```

## 相关

- [`Literal`](./literal) - 字面量类型
- [`LiteralNumber`](./literal-number) - 数字字面量
- [`LiteralBoolean`](./literal-boolean) - 布尔字面量
