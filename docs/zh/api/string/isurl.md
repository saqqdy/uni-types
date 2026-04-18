# IsURL

**Since v1.3.0**

检查字符串类型是否匹配有效的 URL 格式。如果字符串匹配带有协议和域名的 URL 模式则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type IsURL<T extends string> = T extends `${'http' | 'https'}://${string}.${string}`
	? true
	: false
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要验证为 URL 的字符串类型 |

## 示例

### 基本用法

```typescript
import type { IsURL } from 'uni-types'

type ValidHttp = IsURL<'http://example.com'> // true
type ValidHttps = IsURL<'https://example.com'> // true
type Invalid = IsURL<'not-a-url'> // false
```

### 带路径和查询参数

```typescript
import type { IsURL } from 'uni-types'

type WithPath = IsURL<'https://example.com/path/to/page'> // true
type WithQuery = IsURL<'https://example.com?page=1&limit=10'> // true
type MissingProtocol = IsURL<'example.com'> // false
```