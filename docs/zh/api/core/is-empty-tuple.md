# IsEmptyTuple

检查元组是否为空。

## 签名

```typescript
type IsEmptyTuple<T extends readonly unknown[]> = T extends readonly []
  ? true
  : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { IsEmptyTuple } from 'uni-types'

type Empty = IsEmptyTuple<[]> // true
type NotEmpty = IsEmptyTuple<[1]> // false
type NotEmpty2 = IsEmptyTuple<[string, number]> // false
```

### 数组

```typescript
type ArrayCheck = IsEmptyTuple<string[]> // false
```

## 相关

- [`TupleLength`](./tuple-length) - 获取元组长度
