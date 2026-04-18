# MapKeys

**自 1.3.0 起**

获取类型层面 Map 的所有键。返回所有键类型的联合类型。

## 签名

```typescript
export type MapKeys<M> = keyof M
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `M` | 类型层面的 Map |

## 示例

### 基本用法

```typescript
import type { MapKeys } from 'uni-types'

type Config = { host: string; port: number; ssl: boolean }
type Result = MapKeys<Config>
// 'host' | 'port' | 'ssl'
```

### 空 Map

```typescript
type Empty = {}
type Result = MapKeys<Empty>
// never
```
