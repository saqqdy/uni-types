# TypeSet

**自 1.3.0 起**

类型层面的 Set 实现。在类型层面表示一组类型的集合。

## 签名

```typescript
export type TypeSet<T> = T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 集合中包含的元素类型 |

## 示例

### 基本用法

```typescript
import type { TypeSet } from 'uni-types'

type StringSet = TypeSet<string>
// string
```

### 联合类型集合

```typescript
type NumberOrBoolean = TypeSet<number | boolean>
// number | boolean
```
