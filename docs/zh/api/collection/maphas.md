# MapHas

**自 1.3.0 起**

检查键是否存在于类型层面的 Map 中。如果键存在则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type MapHas<M, K> = K extends keyof M ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `M` | 要搜索的类型层面的 Map |
| `K` | 要检查的键 |

## 示例

### 基本用法

```typescript
import type { MapHas } from 'uni-types'

type Config = { host: string; port: number }
type Result = MapHas<Config, 'host'>
// true
```

### 键不存在

```typescript
type Result = MapHas<Config, 'protocol'>
// false
```
