# Memoized

**自 1.2.0 起**

记忆化类型 - 记住计算结果。

## 签名

```typescript
type Memoized<T> = T extends infer U ? U : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要记忆化的类型 |

## 描述

创建类型的记忆化引用。TypeScript 的类型系统会记住计算结果，避免冗余的类型计算。

## 示例

### 基本用法

```typescript
import type { Memoized } from 'uni-types'

type ComplexType = { a: string } & { b: number } & { c: boolean }
type Result = Memoized<ComplexType>
// { a: string } & { b: number } & { c: boolean }
```

### 与递归类型一起使用

```typescript
import type { Memoized } from 'uni-types'

type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }
type MemoizedJSON = Memoized<JSONValue>
// JSONValue（已记忆化）
```

## 相关

- [`Cached`](./cached) - 缓存类型包装器
- [`CachedValue`](./cachedvalue) - 提取缓存值
