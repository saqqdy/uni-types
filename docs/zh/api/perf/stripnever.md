# StripNever

**自 1.2.0 起**

从对象中移除 never 类型属性。

## 签名

```typescript
type StripNever<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要处理的对象类型 |

## 描述

从对象类型中移除值为 never 类型的属性。适用于过滤掉无效或被排除的属性。

## 示例

### 基本用法

```typescript
import type { StripNever } from 'uni-types'

type MyObject = {
  name: string
  invalid: never
  age: number
}

type Result = StripNever<MyObject>
// { name: string; age: number }
```

### 与条件类型一起使用

```typescript
import type { StripNever } from 'uni-types'

type MyUnion = 'a' | 'b' | 'c'
type Filtered = {
  [K in MyUnion]: K extends 'a' ? never : K
}

type Result = StripNever<Filtered>
// { b: 'b'; c: 'c' }
```

## 相关

- [`StripUndefined`](./stripundefined) - 从对象中移除 undefined
- [`Compact`](./compact) - 移除 never 和 undefined
