# SetHas

**自 1.3.0 起**

检查元素是否存在于类型集合中。如果元素存在则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type SetHas<S, T> = T extends S ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要搜索的类型集合 |
| `T` | 要检查的元素类型 |

## 示例

### 基本用法

```typescript
import type { SetHas } from 'uni-types'

type Result = SetHas<string | number, string>
// true
```

### 元素不存在

```typescript
type Result = SetHas<string | number, boolean>
// false
```
