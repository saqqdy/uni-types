# Merge

合并两个类型（后者覆盖前者）。

## 签名

```typescript
type Merge<T, U> = Omit<T, keyof U> & U
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 第一个类型 |
| `U` | 第二个类型（覆盖 T） |

## 描述

合并两个对象类型。当两个类型具有相同的键时，`U` 中的类型优先。

## 示例

### 基本用法

```typescript
import type { Merge } from 'uni-types'

type Result = Merge<{ a: string; b: number }, { b: boolean; c: string }>
// { a: string; b: boolean; c: string }
```

### 覆盖类型

```typescript
type Base = {
  id: number
  name: string
  active: boolean
}

type Override = {
  active: string
  role: 'admin' | 'user'
}

type Merged = Merge<Base, Override>
// { id: number; name: string; active: string; role: 'admin' | 'user' }
```

## 相关

- [`AtLeastOne`](./at-least-one) - 要求至少一个属性
