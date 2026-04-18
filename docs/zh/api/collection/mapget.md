# MapGet

**自 1.3.0 起**

从类型层面的 Map 中获取与键关联的值。

## 签名

```typescript
export type MapGet<M, K> = K extends keyof M ? M[K & keyof M] : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `M` | 类型层面的 Map |
| `K` | 要查找的键 |

## 示例

### 基本用法

```typescript
import type { MapGet } from 'uni-types'

type Config = { host: string; port: number }
type Result = MapGet<Config, 'host'>
// string
```

### 键不存在

```typescript
type Result = MapGet<Config, 'protocol'>
// never
```
