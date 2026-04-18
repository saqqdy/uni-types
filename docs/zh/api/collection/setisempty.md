# SetIsEmpty

**自 1.3.0 起**

检查类型集合是否为空。如果集合为 `never` 则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type SetIsEmpty<S> = S extends never ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要检查的类型集合 |

## 示例

### 基本用法

```typescript
import type { SetIsEmpty } from 'uni-types'

type Result = SetIsEmpty<never>
// true
```

### 非空集合

```typescript
type Result = SetIsEmpty<string | number>
// false
```
