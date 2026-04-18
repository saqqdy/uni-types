# QueryParams

**自 1.4.0 起**

解析查询字符串为对象。

## 签名

```typescript
type QueryParams<S extends string> = S extends `?${infer Rest}` ? ParseQueryPairs<Rest> : Record<string, never>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 以 `?` 开头的查询字符串 |

## 描述

从 URL 查询字符串中提取键值对。

## 示例

### 基本用法

```typescript
import type { QueryParams } from 'uni-types'

type Params = QueryParams<'?a=1&b=2'>
// { a: '1'; b: '2' }

type Empty = QueryParams<'?'>
// {}
```

## 相关

- [`ParseURL`](./parseurl) - 解析完整 URL
- [`PathParams`](./pathparams) - 提取路径参数