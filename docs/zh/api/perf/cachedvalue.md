# CachedValue

**自 1.2.0 起**

从缓存类型中提取缓存值。

## 签名

```typescript
type CachedValue<T> = T extends { __cached: infer U } ? U : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要提取的缓存类型 |

## 描述

从 Cached 包装器中提取原始类型。这是 Cached 的逆操作。

## 示例

### 基本用法

```typescript
import type { Cached, CachedValue } from 'uni-types'

type Original = { name: string; age: number }
type CachedType = Cached<Original>
type Extracted = CachedValue<CachedType>
// { name: string; age: number }
```

### 与复杂类型一起使用

```typescript
import type { CachedValue } from 'uni-types'

type MyCached = { __cached: string | number | boolean }
type Result = CachedValue<MyCached>
// string | number | boolean
```

## 相关

- [`Cached`](./cached) - 缓存类型包装器
- [`Memoized`](./memoized) - 记忆化类型
