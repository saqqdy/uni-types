# MapDelete

**自 1.3.0 起**

从类型层面的 Map 中删除键。返回不包含指定键的新 Map。

## 签名

```typescript
export type MapDelete<M, K> = Omit<M, K>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `M` | 原始类型层面的 Map |
| `K` | 要删除的键 |

## 示例

### 基本用法

```typescript
import type { MapDelete } from 'uni-types'

type Config = { host: string; port: number; ssl: boolean }
type Result = MapDelete<Config, 'ssl'>
// { host: string; port: number }
```

### 删除不存在的键

```typescript
type Result = MapDelete<Config, 'protocol'>
// { host: string; port: number; ssl: boolean }
```
