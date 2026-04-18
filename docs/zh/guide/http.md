# HTTP & API 类型

**自 1.4.0 起**

类型级 HTTP 和 API 工具。

## HTTP 类型

### HTTPMethod

HTTP 方法。

```typescript
import type { HTTPMethod } from 'uni-types'

type Method = HTTPMethod  // 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'
```

### HTTPStatus

HTTP 状态码。

```typescript
import type { HTTPStatus } from 'uni-types'

type Status = HTTPStatus  // 200 | 201 | 400 | 404 | 500 | ...
```

### HTTPStatusCategory

获取状态码分类。

```typescript
import type { HTTPStatusCategory } from 'uni-types'

type Cat1 = HTTPStatusCategory<200>  // 'success'
type Cat2 = HTTPStatusCategory<404>  // 'client_error'
type Cat3 = HTTPStatusCategory<500>  // 'server_error'
```

### HTTPHeaders

HTTP 头类型。

```typescript
import type { HTTPHeaders } from 'uni-types'

type Headers = HTTPHeaders<{ 'X-Custom': 'value' }>
```

### ContentType

Content-Type 值。

```typescript
import type { ContentType } from 'uni-types'

type Json = ContentType  // 'application/json' | 'text/html' | ...
```

## 路由类型

### Route

定义路由。

```typescript
import type { Route } from 'uni-types'

type UserRoute = Route<'/users/:id', 'GET', User>
```

### RouteParams

从路由路径提取路径参数。

```typescript
import type { RouteParams } from 'uni-types'

type Params = RouteParams<'/users/:id/posts/:postId'>  // { id: string; postId: string }
```

### RouteQuery

查询参数类型。

```typescript
import type { RouteQuery } from 'uni-types'

type Query = RouteQuery<{ page: number; limit: number }>  // { page?: string; limit?: string }
```

### Router

路由器类型。

```typescript
import type { Router } from 'uni-types'

type MyRouter = Router<{
  '/users': { GET: { response: User[] }; POST: { response: User, request: CreateUser } }
  '/users/:id': { GET: { response: User }; DELETE: { response: void } }
}>
```

## API 类型

### APIEndpoint

API 端点类型。

```typescript
import type { APIEndpoint } from 'uni-types'

type Endpoint = APIEndpoint<{
  method: 'GET'
  path: '/users'
  response: User[]
}>
```

### APIRequest / APIResponse / APIError

请求和响应类型。

```typescript
import type { APIRequest, APIResponse, APIError } from 'uni-types'

type Req = APIRequest<{ body: CreateUserInput }>
type Res = APIResponse<{ data: User; status: 200 }>
type Err = APIError<{ message: string; code: 'NOT_FOUND' }>
```

## 中间件类型

### Middleware

中间件函数类型。

```typescript
import type { Middleware, Context } from 'uni-types'

type AuthMiddleware = Middleware<{ user: User }>
```

### MiddlewareChain / ComposeMiddleware

中间件组合。

```typescript
import type { MiddlewareChain, ComposeMiddleware } from 'uni-types'

type Chain = MiddlewareChain<[AuthMiddleware, LoggingMiddleware]>
type Composed = ComposeMiddleware<[AuthMiddleware]>
```

## REST 辅助类型

### RESTCollection

REST 集合端点。

```typescript
import type { RESTCollection } from 'uni-types'

type UserEndpoints = RESTCollection<User, CreateUserInput, UpdateUserInput>
```

### CRUDOperation

CRUD 操作类型。

```typescript
import type { CRUDOperation } from 'uni-types'

type Op = CRUDOperation  // 'create' | 'read' | 'update' | 'delete'
```

## 相关

- [解析器](./parsers) - JSON、URL、CSV 解析器
- [数据库](./database) - 数据库类型