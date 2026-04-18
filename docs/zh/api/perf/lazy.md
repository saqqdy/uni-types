# Lazy

**自 1.2.0 起**

惰性类型包装器 - 延迟类型求值。

## 签名

```typescript
type Lazy<T> = () => T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要包装为惰性 thunk 的类型 |

## 描述

创建一个惰性类型，延迟到需要时才进行求值。适用于避免循环类型引用或延迟加载昂贵的类型。

## 示例

### 基本用法

```typescript
import type { Lazy } from 'uni-types'

type LazyString = Lazy<string>
// () => string

type LazyObject = Lazy<{ name: string; age: number }>
// () => { name: string; age: number }
```

### 与循环引用一起使用

```typescript
import type { Lazy } from 'uni-types'

interface TreeNode {
  value: number
  left?: Lazy<TreeNode>
  right?: Lazy<TreeNode>
}
```

## 相关

- [`ForceEvaluate`](./forceevaluate) - 强制求值惰性类型
- [`Deferred`](./deferred) - 延迟类型
