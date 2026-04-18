# SetAdd

**自 1.3.0 起**

向类型集合中添加元素。返回包含所添加类型的新集合。

## 签名

```typescript
export type SetAdd<S, T> = S | T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 原始类型集合 |
| `T` | 要添加的元素类型 |

## 示例

### 基本用法

```typescript
import type { SetAdd } from 'uni-types'

type Result = SetAdd<string, number>
// string | number
```

### 向已有集合添加元素

```typescript
type Existing = string | boolean
type Extended = SetAdd<Existing, number>
// string | boolean | number
```
