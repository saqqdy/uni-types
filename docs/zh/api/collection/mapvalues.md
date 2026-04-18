# MapValues

**自 1.3.0 起**

获取类型层面 Map 的所有值。返回所有值类型的联合类型。

## 签名

```typescript
export type MapValues<M> = M[keyof M]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `M` | 类型层面的 Map |

## 示例

### 基本用法

```typescript
import type { MapValues } from 'uni-types'

type Config = { host: string; port: number; ssl: boolean }
type Result = MapValues<Config>
// string | number | boolean
```

### 同构 Map

```typescript
type Labels = { a: string; b: string; c: string }
type Result = MapValues<Labels>
// string
```
