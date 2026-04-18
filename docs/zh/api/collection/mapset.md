# MapSet

**自 1.3.0 起**

在类型层面的 Map 中设置键值对。返回包含更新条目的新 Map。

## 签名

```typescript
export type MapSet<M, K, V> = Omit<M, K> & { [P in K]: V }
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `M` | 原始类型层面的 Map |
| `K` | 要设置的键 |
| `V` | 要关联到键的值 |

## 示例

### 基本用法

```typescript
import type { MapSet } from 'uni-types'

type Config = { host: string; port: number }
type Updated = MapSet<Config, 'host', 'localhost'>
// { port: number; host: 'localhost' }
```

### 添加新键

```typescript
type Config = { host: string; port: number }
type WithProtocol = MapSet<Config, 'protocol', 'https'>
// { host: string; port: number; protocol: 'https' }
```
