# ForceEvaluate

**自 1.2.0 起**

强制求值惰性类型。

## 签名

```typescript
type ForceEvaluate<T> = T extends () => infer R ? R : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要求值的惰性类型 |

## 描述

从惰性 thunk 中提取结果类型。如果类型不是惰性的，则原样返回。

## 示例

### 基本用法

```typescript
import type { Lazy, ForceEvaluate } from 'uni-types'

type LazyString = Lazy<string>
type Evaluated = ForceEvaluate<LazyString>
// string
```

### 与非惰性类型一起使用

```typescript
import type { ForceEvaluate } from 'uni-types'

type NotLazy = { name: string }
type Result = ForceEvaluate<NotLazy>
// { name: string }（不变）
```

## 相关

- [`Lazy`](./lazy) - 惰性类型包装器
- [`Deferred`](./deferred) - 延迟类型
