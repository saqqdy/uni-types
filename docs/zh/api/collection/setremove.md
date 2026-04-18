# SetRemove

**自 1.3.0 起**

从类型集合中移除元素。返回不包含所移除类型的新集合。

## 签名

```typescript
export type SetRemove<S, T> = Exclude<S, T>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 原始类型集合 |
| `T` | 要移除的元素类型 |

## 示例

### 基本用法

```typescript
import type { SetRemove } from 'uni-types'

type Result = SetRemove<string | number | boolean, number>
// string | boolean
```

### 从联合类型中移除

```typescript
type Mixed = string | number | boolean | null
type NoNull = SetRemove<Mixed, null>
// string | number | boolean
```
