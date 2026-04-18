# StripUndefined

**自 1.2.0 起**

从对象中移除 undefined 类型属性。

## 签名

```typescript
type StripUndefined<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要处理的对象类型 |

## 描述

从对象类型中移除值为 undefined 类型的属性。适用于创建不含可选属性的严格对象类型。

## 示例

### 基本用法

```typescript
import type { StripUndefined } from 'uni-types'

type MyObject = {
  name: string
  optional?: string
  age: number
}

type Result = StripUndefined<MyObject>
// { name: string; age: number }
```

### 与可空属性一起使用

```typescript
import type { StripUndefined } from 'uni-types'

type MyType = {
  required: string
  optional?: number
  nullable: string | undefined
}

type Result = StripUndefined<MyType>
// { required: string }
```

## 相关

- [`StripNever`](./stripnever) - 从对象中移除 never
- [`Compact`](./compact) - 移除 never 和 undefined
