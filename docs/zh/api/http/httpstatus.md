# HTTPStatus

**自 1.4.0 起**

HTTP 状态码联合类型。

## 签名

```typescript
type HTTPStatus = 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 500 | ...
```

## 描述

常见 HTTP 状态码的联合类型。

## 示例

### 基本用法

```typescript
import type { HTTPStatus } from 'uni-types'

const ok: HTTPStatus = 200
const notFound: HTTPStatus = 404
const serverError: HTTPStatus = 500
```

## 相关

- [`HTTPMethod`](./httpmethod) - HTTP 方法
- [`APIResponse`](./apiresponse) - API 响应类型