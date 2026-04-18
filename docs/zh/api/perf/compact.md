# Compact

**自 1.2.0 起**

紧凑类型 - 从对象中移除 never 和 undefined。

## 签名

```typescript
type Compact<T> = {
  [K in keyof T as T[K] extends never ? never : undefined extends T[K] ? never : K]: T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要紧凑化的对象类型 |

## 描述

从对象类型中移除值为 never 或 undefined 类型的属性。结合了 StripNever 和 StripUndefined 的效果。

## 示例

### 基本用法

```typescript
import type { Compact } from 'uni-types'

type MyObject = {
  name: string
  invalid: never
  optional?: number
  age: number
}

type Result = Compact<MyObject>
// { name: string; age: number }
```

### 与混合属性一起使用

```typescript
import type { Compact } from 'uni-types'

type Mixed = {
  valid: string
  excluded: never
  maybeUndefined?: boolean
  alsoValid: number
}

type Result = Compact<Mixed>
// { valid: string; alsoValid: number }
```

## 相关

- [`StripNever`](./stripnever) - 从对象中移除 never
- [`StripUndefined`](./stripundefined) - 从对象中移除 undefined
