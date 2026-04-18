# Cached

**自 1.2.0 起**

缓存类型 - 防止重复计算。

## 签名

```typescript
type Cached<T> = T extends infer U ? { __cached: U } : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要缓存的类型 |

## 描述

将类型包装在缓存容器中，防止 TypeScript 重新计算复杂的类型表达式。可以提高昂贵计算的类型检查性能。

## 示例

### 基本用法

```typescript
import type { Cached } from 'uni-types'

type ComplexCalculation = /* 昂贵的类型计算 */
type CachedResult = Cached<ComplexCalculation>
// { __cached: ComplexCalculation }
```

### 与条件类型一起使用

```typescript
import type { Cached } from 'uni-types'

type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T

type CachedReadonly = Cached<DeepReadonly<{ a: { b: string } }>>
// { __cached: { readonly a: { readonly b: string } } }
```

## 相关

- [`CachedValue`](./cachedvalue) - 提取缓存值
- [`Memoized`](./memoized) - 记忆化类型
