# Deferred

**自 1.2.0 起**

延迟类型 - 防止立即展开。

## 签名

```typescript
type Deferred<T> = T extends infer U ? U : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要延迟的类型 |

## 描述

创建一个延迟类型，防止 TypeScript 立即展开类型表达式。有助于提高可读性和类型检查性能。

## 示例

### 基本用法

```typescript
import type { Deferred } from 'uni-types'

type MyType = Deferred<{ a: string } & { b: number }>
// { a: string } & { b: number }（未展开）
```

### 与联合类型一起使用

```typescript
import type { Deferred } from 'uni-types'

type MyUnion = Deferred<string | number | boolean>
// string | number | boolean
```

## 相关

- [`Lazy`](./lazy) - 惰性类型包装器
- [`ForceEvaluate`](./forceevaluate) - 强制求值惰性类型
