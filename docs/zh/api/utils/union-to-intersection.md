# UnionToIntersection

将联合类型转换为交叉类型。

## 签名

```typescript
type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `U` | 联合类型 |

## 描述

将联合类型转换为交叉类型。这在需要合并多个对象类型时非常有用。

## 示例

### 基本用法

```typescript
import type { UnionToIntersection } from 'uni-types'

type Union = { a: string } | { b: number }
type Intersection = UnionToIntersection<Union>
// { a: string } & { b: number }
```

### 合并配置

```typescript
type BaseConfig = {
  host: string
  port: number
}

type SSLConfig = {
  ssl: boolean
  certPath: string
}

type Config = UnionToIntersection<BaseConfig | SSLConfig>
// BaseConfig & SSLConfig
// { host: string; port: number; ssl: boolean; certPath: string }
```

## 相关

- [`UnionToTuple`](./union-to-tuple) - 将联合类型转换为元组
