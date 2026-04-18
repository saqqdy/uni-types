# ParseURL

**自 1.4.0 起**

解析 URL 字符串为组件。

## 签名

```typescript
type ParseURL<S extends string> = S extends `${infer Protocol}://${infer Rest}` ? ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要解析的 URL 字符串 |

## 描述

从 URL 中提取协议、主机、路径名、查询和哈希。

## 示例

### 基本用法

```typescript
import type { ParseURL } from 'uni-types'

type URL = ParseURL<'https://example.com/path?q=1'>
// { protocol: 'https'; host: 'example.com'; pathname: '/path'; search: '?q=1'; hash: '' }

type WithHash = ParseURL<'https://example.com#section'>
// { protocol: 'https'; host: 'example.com'; pathname: '/'; search: ''; hash: '#section' }
```

## 相关

- [`QueryParams`](./queryparams) - 解析查询字符串
- [`PathParams`](./pathparams) - 提取路径参数