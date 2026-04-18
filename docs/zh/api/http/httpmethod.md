# HTTPMethod

**自 1.4.0 起**

HTTP 方法联合类型。

## 签名

```typescript
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'
```

## 描述

标准 HTTP 方法的联合类型。

## 示例

### 基本用法

```typescript
import type { HTTPMethod } from 'uni-types'

const method: HTTPMethod = 'GET' // 有效
const invalid: HTTPMethod = 'INVALID' // 错误
```

## 相关

- [`HTTPStatus`](./httpstatus) - HTTP 状态码
- [`Route`](./route) - 路由定义