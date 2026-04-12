# PathLength

**自 1.1.0 起**

获取路径的段数。

## 签名

```typescript
type PathLength<P extends string> = P extends ''
  ? 0
  : P extends `${string}.${infer Rest}`
    ? Increment<PathLength<Rest>>
    : 1
```

## 参数

| 参数 | 描述 |
|------|------|
| `P` | 路径字符串 |

## 示例

### 基本用法

```typescript
import type { PathLength } from 'uni-types'

type A = PathLength<'a.b.c'>   // 3
type B = PathLength<'single'>  // 1
type C = PathLength<''>        // 0
```

### 条件逻辑

```typescript
type ShallowPath<P extends string> = PathLength<P> extends 1 | 2
  ? P
  : never
```

## 相关

- [`ParentPath`](./parent-path) - 获取父路径
- [`PathLeaf`](./path-leaf) - 获取最后一段